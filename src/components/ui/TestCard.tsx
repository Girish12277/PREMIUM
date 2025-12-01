import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TestCardProps {
  number: number;
  title: string;
  testType: string;
  link?: string;
  url?: string;
  category: "inorganic" | "physical" | "organic" | "aptitude";
}

export const TestCard = ({ number, title, testType, link, url, category }: TestCardProps) => {
  const navigate = useNavigate();

  const getCategoryGradient = () => {
    switch(category) {
      case 'inorganic': return 'from-primary/10 via-primary/5 to-transparent';
      case 'physical': return 'from-secondary/10 via-secondary/5 to-transparent';
      case 'organic': return 'from-accent/10 via-accent/5 to-transparent';
      case 'aptitude': return 'from-primary/10 via-secondary/5 to-accent/10';
      default: return 'from-primary/10 via-primary/5 to-transparent';
    }
  };

  const getCategoryColor = () => {
    switch(category) {
      case 'inorganic': return 'primary';
      case 'physical': return 'secondary';
      case 'organic': return 'accent';
      case 'aptitude': return 'primary';
      default: return 'primary';
    }
  };

  const handleWatchVideo = () => {
    if (!url) return;
    navigate(`/video?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&category=${category}`);
  };

  return (
    <Card className={`group relative overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:scale-[1.03] border-2 bg-gradient-to-br ${getCategoryGradient()} shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_30px_60px_-15px] hover:shadow-primary/30 backdrop-blur-sm
      ${category === 'inorganic' ? 'border-primary/30 hover:border-primary/50' : ''}
      ${category === 'physical' ? 'border-secondary/30 hover:border-secondary/50' : ''}
      ${category === 'organic' ? 'border-accent/30 hover:border-accent/50' : ''}
      ${category === 'aptitude' ? 'border-primary/30 hover:border-primary/50' : ''}`}>
      
      {/* Platinum Border Gradient */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Metallic Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated Shimmer */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Premium Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10
        ${category === 'inorganic' ? 'bg-primary/20' : ''}
        ${category === 'physical' ? 'bg-secondary/20' : ''}
        ${category === 'organic' ? 'bg-accent/20' : ''}
        ${category === 'aptitude' ? 'bg-primary/20' : ''}`} />
      
      {/* Molecule Pattern Overlay - Enhanced */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className={`absolute top-4 right-4 w-4 h-4 rounded-full animate-pulse shadow-lg
          ${category === 'inorganic' ? 'bg-primary/30 shadow-primary/50' : ''}
          ${category === 'physical' ? 'bg-secondary/30 shadow-secondary/50' : ''}
          ${category === 'organic' ? 'bg-accent/30 shadow-accent/50' : ''}
          ${category === 'aptitude' ? 'bg-primary/30 shadow-primary/50' : ''}`} />
        <div className="absolute top-10 right-14 w-3 h-3 rounded-full bg-white/20 animate-pulse shadow-md" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-14 right-10 w-3.5 h-3.5 rounded-full bg-white/25 animate-pulse shadow-md" style={{ animationDelay: '0.4s' }} />
        <div className="absolute top-8 right-20 w-2 h-2 rounded-full bg-white/15 animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>

      <CardHeader className="pb-2 sm:pb-3 relative z-10 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4 flex-wrap">
          <Badge 
            variant="secondary" 
            className={`text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 ${
              category === 'inorganic' ? 'bg-primary/10 text-primary border-primary/20' :
              category === 'physical' ? 'bg-secondary/10 text-secondary border-secondary/20' :
              category === 'organic' ? 'bg-accent/10 text-accent border-accent/20' :
              'bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20'
            }`}
          >
            Test #{number}
          </Badge>
          <Badge 
            variant="outline" 
            className="text-[10px] sm:text-xs font-semibold border-2 border-border/50 group-hover:border-primary/40 transition-all duration-300 shadow-md backdrop-blur-sm"
          >
            {testType}
          </Badge>
        </div>
        <CardTitle className={`text-base sm:text-lg font-bold leading-tight line-clamp-2 transition-all duration-300 flex items-start gap-2 group-hover:tracking-wide
          ${category === 'inorganic' ? 'group-hover:text-primary' : ''}
          ${category === 'physical' ? 'group-hover:text-secondary' : ''}
          ${category === 'organic' ? 'group-hover:text-accent' : ''}
          ${category === 'aptitude' ? 'group-hover:text-primary' : ''}`}>
          <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0 transition-all duration-300
            ${category === 'inorganic' ? 'text-primary/60 group-hover:text-primary' : ''}
            ${category === 'physical' ? 'text-secondary/60 group-hover:text-secondary' : ''}
            ${category === 'organic' ? 'text-accent/60 group-hover:text-accent' : ''}
            ${category === 'aptitude' ? 'text-primary/60 group-hover:text-primary' : ''}
            group-hover:animate-pulse group-hover:drop-shadow-lg`} />
          <span className="flex-1">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 relative z-10 p-5 sm:p-7">
        <div className="flex flex-col gap-2.5">
          <Button 
            variant="default" 
            size="default"
            className={`w-full group/btn transition-all duration-500 text-sm sm:text-base h-10 sm:h-11 font-bold shadow-lg hover:shadow-2xl ${
              category === 'inorganic' ? 'bg-gradient-to-r from-primary to-primary/80 hover:shadow-primary/30' :
              category === 'physical' ? 'bg-gradient-to-r from-secondary to-secondary/80 hover:shadow-secondary/30' :
              category === 'organic' ? 'bg-gradient-to-r from-accent to-accent/80 hover:shadow-accent/30' :
              'bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-primary/30'
            } touch-manipulation relative overflow-hidden`}
            onClick={handleWatchVideo}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <Play className="mr-2 sm:mr-2.5 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-125 transition-transform duration-300 drop-shadow-md" fill="currentColor" />
            <span className="font-bold relative z-10">Watch Video</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full text-[10px] sm:text-xs hover:bg-muted/50 transition-all duration-300 h-8 sm:h-9 border-2 hover:border-primary/30 hover:shadow-md backdrop-blur-sm touch-manipulation"
            onClick={() => url && window.open(url, '_blank')}
          >
            <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="font-semibold">Open in New Tab</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
