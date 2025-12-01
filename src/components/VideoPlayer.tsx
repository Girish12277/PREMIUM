import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, Minimize, Settings, RotateCcw, RotateCw, Loader2, PictureInPicture, Maximize2, ChevronRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  const videoUrl = searchParams.get("url");
  const title = searchParams.get("title");
  const category = searchParams.get("category");
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [previewTime, setPreviewTime] = useState<number | null>(null);
  const [showSkipAnimation, setShowSkipAnimation] = useState<'forward' | 'backward' | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    if (!videoUrl) {
      navigate("/");
    }
  }, [videoUrl, navigate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };
    
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsVideoReady(true);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
    };
    
    const handleWaiting = () => {
      setIsBuffering(true);
    };
    
    const handleCanPlay = () => {
      setIsBuffering(false);
    };
    
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const percentage = (bufferedEnd / video.duration) * 100;
        setBuffered(percentage);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("progress", handleProgress);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("progress", handleProgress);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const skip = useCallback((seconds: number) => {
    const video = videoRef.current;
    if (!video || !isVideoReady || !duration) return;

    const currentVideoTime = video.currentTime;
    const newTime = Math.max(0, Math.min(currentVideoTime + seconds, duration));
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
    
    // Show skip animation (YouTube style)
    setShowSkipAnimation(seconds > 0 ? 'forward' : 'backward');
    setTimeout(() => setShowSkipAnimation(null), 400);
  }, [isVideoReady, duration]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(err => console.error("Play error:", err));
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  }, []);

  const changeVolume = useCallback((delta: number) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = Math.max(0, Math.min(1, video.volume + delta));
    video.volume = newVolume;
    setVolume(newVolume);
    if (newVolume > 0 && video.muted) {
      video.muted = false;
      setIsMuted(false);
    }
  }, []);

  const handleSeek = useCallback((value: number[]) => {
    const video = videoRef.current;
    if (!video || !isVideoReady) return;
    const newTime = value[0];
    video.currentTime = newTime;
    setCurrentTime(newTime);
  }, [isVideoReady]);

  const handleVolumeChange = useCallback((value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = value[0];
    video.volume = newVolume;
    setVolume(newVolume);
    if (newVolume > 0 && video.muted) {
      video.muted = false;
      setIsMuted(false);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error("Fullscreen error:", err);
        toast({
          title: "Fullscreen not supported",
          description: "Your browser doesn't support fullscreen mode",
          variant: "destructive",
          duration: 2000,
        });
      });
    } else {
      document.exitFullscreen();
    }
  }, [toast]);

  // Track fullscreen changes (including ESC key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleTheaterMode = useCallback(() => {
    setIsTheaterMode(prev => !prev);
  }, []);

  const togglePictureInPicture = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await video.requestPictureInPicture();
      }
    } catch (error) {
      toast({
        title: "Picture-in-Picture not supported",
        variant: "destructive",
        duration: 2000,
      });
    }
  }, [toast]);

  const changePlaybackRate = useCallback((rate: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
    setPlaybackRate(rate);
  }, []);

  // Keyboard shortcuts (YouTube-like)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      const key = e.key.toLowerCase();
      
      // Number keys 0-9 for seeking (YouTube style)
      if (key >= '0' && key <= '9') {
        e.preventDefault();
        const percent = parseInt(key) / 10;
        const video = videoRef.current;
        if (video && duration) {
          const newTime = duration * percent;
          handleSeek([newTime]);
          toast({
            title: `Jumped to ${Math.floor(percent * 100)}%`,
            duration: 1000,
          });
        }
      } else if (key === ' ' || key === 'k') {
        e.preventDefault();
        togglePlay();
      } else if (key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (key === 'm') {
        e.preventDefault();
        toggleMute();
      } else if (key === 'arrowleft') {
        e.preventDefault();
        skip(-5);
      } else if (key === 'arrowright') {
        e.preventDefault();
        skip(5);
      } else if (key === 'arrowup') {
        e.preventDefault();
        changeVolume(0.05);
      } else if (key === 'arrowdown') {
        e.preventDefault();
        changeVolume(-0.05);
      } else if (key === 't') {
        e.preventDefault();
        toggleTheaterMode();
      } else if (key === 'j') {
        e.preventDefault();
        skip(-10);
      } else if (key === 'l') {
        e.preventDefault();
        skip(10);
      } else if (key === 'i') {
        e.preventDefault();
        togglePictureInPicture();
      } else if (key === 'c') {
        e.preventDefault();
        // Toggle captions (placeholder for future)
        toast({
          title: "Captions",
          description: "Captions coming soon!",
          duration: 2000,
        });
      } else if (key === '<' || key === ',') {
        e.preventDefault();
        // Previous frame when paused
        if (!isPlaying && videoRef.current) {
          videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 1/30);
        }
      } else if (key === '>' || key === '.') {
        e.preventDefault();
        // Next frame when paused
        if (!isPlaying && videoRef.current) {
          videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 1/30);
        }
      } else if (key === 'home') {
        e.preventDefault();
        handleSeek([0]);
      } else if (key === 'end') {
        e.preventDefault();
        handleSeek([duration - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [skip, togglePlay, toggleMute, changeVolume, toggleFullscreen, toggleTheaterMode, togglePictureInPicture, duration, isPlaying, handleSeek, toast]);

  // Auto-hide controls
  useEffect(() => {
    if (showControls && isPlaying) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls, isPlaying]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
  }, []);

  const handleDoubleClick = useCallback(() => {
    toggleFullscreen();
  }, [toggleFullscreen]);

  const handleProgressHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;
    setPreviewTime(time);
  }, [duration]);

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration || !isVideoReady) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    handleSeek([newTime]);
  }, [duration, isVideoReady, handleSeek]);

  // Scrubbing handlers
  const handleProgressMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsScrubbing(true);
    handleProgressClick(e);
  }, [handleProgressClick]);

  const handleProgressMouseMove = useCallback((e: MouseEvent) => {
    if (!isScrubbing || !progressBarRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = percent * duration;
    handleSeek([newTime]);
  }, [isScrubbing, duration, handleSeek]);

  const handleProgressMouseUp = useCallback(() => {
    setIsScrubbing(false);
  }, []);

  // Scrubbing event listeners
  useEffect(() => {
    if (isScrubbing) {
      window.addEventListener('mousemove', handleProgressMouseMove);
      window.addEventListener('mouseup', handleProgressMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleProgressMouseMove);
        window.removeEventListener('mouseup', handleProgressMouseUp);
      };
    }
  }, [isScrubbing, handleProgressMouseMove, handleProgressMouseUp]);

  if (!videoUrl) return null;

  return (
    <div className="min-h-screen bg-black">
      <div className={`transition-all duration-300 ${isTheaterMode ? '' : 'bg-gradient-to-br from-background via-muted/30 to-background'}`}>
        <Header />
        <div className={`mx-auto transition-all duration-300 ${isTheaterMode ? 'max-w-full px-0' : 'max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8'}`}>
          {!isTheaterMode && (
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-4 sm:mb-6 hover:bg-primary/10 hover:text-primary transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Back to Tests
            </Button>
          )}

          <div className={`bg-card overflow-hidden border-border/50 ${isTheaterMode ? 'rounded-none border-0' : 'rounded-xl sm:rounded-2xl shadow-card-hover border'}`}>
            {/* Video Player */}
            <div 
              ref={containerRef}
              className="relative bg-black group cursor-pointer"
              style={{ aspectRatio: isTheaterMode ? '21/9' : '16/9' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
              onDoubleClick={handleDoubleClick}
            >
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain bg-black"
                onClick={togglePlay}
                preload="metadata"
                playsInline
                disablePictureInPicture={false}
              />

              {/* Loading Indicator */}
              {isBuffering && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 bg-black/10">
                  <div className="relative">
                    <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-spin drop-shadow-2xl" />
                  </div>
                </div>
              )}

              {/* Skip Animation Overlays - YouTube Style */}
              {showSkipAnimation === 'backward' && (
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-30 animate-fade-in">
                  <div className="relative">
                    {/* Arc segments */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute inset-0 rounded-full border-4 border-white/80"
                          style={{
                            clipPath: 'polygon(0 0, 0 100%, 50% 100%, 50% 0)',
                            transform: `rotate(${i * -30}deg)`,
                            animation: `fade-in 0.15s ease-out ${i * 0.05}s both`
                          }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-xl sm:text-2xl drop-shadow-lg">5</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {showSkipAnimation === 'forward' && (
                <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-30 animate-fade-in">
                  <div className="relative">
                    {/* Arc segments */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute inset-0 rounded-full border-4 border-white/80"
                          style={{
                            clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                            transform: `rotate(${i * 30}deg)`,
                            animation: `fade-in 0.15s ease-out ${i * 0.05}s both`
                          }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-xl sm:text-2xl drop-shadow-lg">5</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Center Play/Pause Overlay */}
              {!isPlaying && !isBuffering && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <button
                    onClick={togglePlay}
                    className="w-24 h-24 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 shadow-2xl border-4 border-white/20 pointer-events-auto"
                  >
                    <Play className="w-12 h-12 text-white ml-2" fill="currentColor" />
                  </button>
                </div>
              )}

              {/* Top Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300 z-10 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                {isTheaterMode && (
                  <div className="p-4 flex items-center justify-between">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate("/")}
                      className="text-white hover:bg-white/20"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  </div>
                )}
              </div>

              {/* Controls Container */}
              <div className={`absolute bottom-0 left-0 right-0 transition-opacity duration-200 z-30 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                {/* Progress Bar */}
                <div 
                  className="relative h-1 bg-white/20 cursor-pointer group/progress hover:h-2 transition-all"
                  onMouseDown={handleProgressMouseDown}
                  onClick={handleProgressClick}
                  onMouseMove={handleProgressHover}
                  onMouseLeave={() => setPreviewTime(null)}
                  ref={progressBarRef}
                >
                  {/* Buffered Progress */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-white/30 transition-all pointer-events-none"
                    style={{ width: `${buffered}%` }}
                  />
                  
                  {/* Current Progress */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-red-600 pointer-events-none"
                    style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-lg" />
                  </div>

                  {/* Time Preview Tooltip */}
                  {previewTime !== null && (
                    <div 
                      className="absolute -top-12 -translate-x-1/2 bg-black/98 text-white text-xs px-2.5 py-1.5 rounded-md pointer-events-none backdrop-blur-sm border border-white/10 shadow-xl font-medium"
                      style={{ left: `${(previewTime / duration) * 100}%` }}
                    >
                      {formatTime(previewTime)}
                    </div>
                  )}
                </div>

                {/* Controls Bar */}
                <div className="bg-gradient-to-t from-black via-black/98 to-transparent px-2 sm:px-3 pb-2 pt-2">
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    {/* Left Controls */}
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {/* Play/Pause */}
                      <button
                        onClick={togglePlay}
                        className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 touch-manipulation"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? 
                          <Pause className="w-5 h-5 sm:w-6 sm:h-6" /> : 
                          <Play className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" />
                        }
                      </button>

                      {/* 5s Backward */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          skip(-5);
                        }}
                        className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 touch-manipulation"
                        title="Rewind 5 seconds (←)"
                        aria-label="Rewind 5 seconds"
                      >
                        <div className="relative">
                          <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="absolute inset-0 flex items-center justify-center text-[8px] sm:text-[9px] font-bold mt-0.5">5</span>
                        </div>
                      </button>

                      {/* 5s Forward */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          skip(5);
                        }}
                        className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 touch-manipulation"
                        title="Forward 5 seconds (→)"
                        aria-label="Forward 5 seconds"
                      >
                        <div className="relative">
                          <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="absolute inset-0 flex items-center justify-center text-[8px] sm:text-[9px] font-bold mt-0.5">5</span>
                        </div>
                      </button>

                      {/* Volume */}
                      <div className="hidden sm:flex items-center gap-1 group/volume ml-1">
                        <button
                          onClick={toggleMute}
                          className="text-white hover:bg-white/10 transition-all p-2 rounded-md hover:scale-105 active:scale-95"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted || volume === 0 ? 
                            <VolumeX className="w-5 h-5" /> : 
                            <Volume2 className="w-5 h-5" />
                          }
                        </button>

                        <div className="w-0 opacity-0 group-hover/volume:w-20 group-hover/volume:opacity-100 transition-all duration-300 overflow-hidden">
                          <Slider
                            value={[isMuted ? 0 : volume]}
                            max={1}
                            step={0.01}
                            onValueChange={handleVolumeChange}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>

                      {/* Mobile Volume (Simplified) */}
                      <button
                        onClick={toggleMute}
                        className="sm:hidden text-white hover:bg-white/10 transition-all p-2 rounded-md hover:scale-105 active:scale-95 ml-1"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted || volume === 0 ? 
                          <VolumeX className="w-5 h-5" /> : 
                          <Volume2 className="w-5 h-5" />
                        }
                      </button>

                      {/* Time Display */}
                      <span className="hidden sm:inline text-white text-xs font-medium whitespace-nowrap ml-2 select-none">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                      
                      {/* Mobile Time Display */}
                      <span className="sm:hidden text-white text-[10px] font-medium whitespace-nowrap ml-1 select-none">
                        {formatTime(currentTime)}
                      </span>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {/* Settings */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button 
                            className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 touch-manipulation relative z-50"
                            aria-label="Settings"
                          >
                            <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuPortal container={containerRef.current}>
                          <DropdownMenuContent 
                            align="end" 
                            className="w-44 sm:w-52 bg-black/98 text-white border-white/10 backdrop-blur-xl relative z-[99999]"
                            sideOffset={8}
                          >
                            <DropdownMenuLabel className="text-white/70 text-xs sm:text-sm">Playback Speed</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-white/10" />
                            {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((rate) => (
                              <DropdownMenuItem
                                key={rate}
                                onClick={() => changePlaybackRate(rate)}
                                className={`cursor-pointer text-xs sm:text-sm touch-manipulation ${playbackRate === rate ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-white/90'}`}
                              >
                                <span className="flex items-center justify-between w-full">
                                  <span>{rate === 1 ? 'Normal' : `${rate}x`}</span>
                                  {playbackRate === rate && <span className="text-red-500 font-bold">✓</span>}
                                </span>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenuPortal>
                      </DropdownMenu>

                      {/* Picture in Picture */}
                      <button
                        onClick={togglePictureInPicture}
                        className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 hidden sm:block touch-manipulation"
                        title="Picture in Picture (i)"
                        aria-label="Picture in Picture"
                      >
                        <PictureInPicture className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      {/* Theater Mode */}
                      <button
                        onClick={toggleTheaterMode}
                        className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 hidden md:block touch-manipulation"
                        title="Theater Mode (t)"
                        aria-label="Theater Mode"
                      >
                        <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>

                      {/* Fullscreen */}
                      <button
                        onClick={toggleFullscreen}
                        className="text-white hover:bg-white/10 transition-all p-1.5 sm:p-2 rounded-md hover:scale-105 active:scale-95 touch-manipulation"
                        title="Fullscreen (f)"
                        aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                      >
                        {isFullscreen ? 
                          <Minimize className="w-4 h-4 sm:w-5 sm:h-5" /> : 
                          <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Info Section */}
            <div className={`bg-card border-t border-border/50 ${isTheaterMode ? 'p-3' : 'p-4 sm:p-5 md:p-6'}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {category && (
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider
                        ${category === 'inorganic' ? 'bg-primary/15 text-primary' : ''}
                        ${category === 'physical' ? 'bg-secondary/15 text-secondary' : ''}
                        ${category === 'organic' ? 'bg-accent/15 text-accent' : ''}
                        ${category === 'aptitude' ? 'bg-gradient-to-r from-primary/15 to-secondary/15 text-primary' : ''}
                      `}>
                        {category}
                      </span>
                    )}
                  </div>
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">{title}</h1>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive test discussion with detailed solutions and explanations
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={() => navigate("/")}
                >
                  <ChevronRight className="w-4 h-4 mr-1" />
                  More Videos
                </Button>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-md">
                  HD Quality
                </span>
                <span className="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-semibold rounded-md">
                  Full Length
                </span>
                <span className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-md">
                  Expert Solutions
                </span>
                <span className="px-3 py-1.5 bg-muted text-muted-foreground text-xs font-semibold rounded-md">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};