import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  unitName: string;
  lectureNumber: number;
  lectureTitle: string;
  url: string;
  category: "inorganic" | "physical" | "organic";
}

export const CourseCard = ({ unitName, lectureNumber, lectureTitle, url, category }: CourseCardProps) => {
  const navigate = useNavigate();

  const getCategoryGradient = () => {
    switch (category) {
      case "inorganic":
        return "from-primary/10 via-primary/5 to-transparent";
      case "physical":
        return "from-secondary/10 via-secondary/5 to-transparent";
      case "organic":
        return "from-accent/10 via-accent/5 to-transparent";
      default:
        return "from-primary/10 via-primary/5 to-transparent";
    }
  };

  const getCategoryButtonClass = () => {
    switch (category) {
      case "inorganic":
        return "bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/30";
      case "physical":
        return "bg-gradient-to-r from-secondary to-secondary/80 hover:shadow-lg hover:shadow-secondary/30";
      case "organic":
        return "bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/30";
      default:
        return "bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/30";
    }
  };

  const getCategoryBadgeClass = () => {
    switch (category) {
      case "inorganic":
        return "bg-primary/10 text-primary border-primary/20";
      case "physical":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "organic":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const handleWatchVideo = () => {
    const params = new URLSearchParams({
      url: url,
      title: `${unitName} - ${lectureTitle}`,
      category: category,
    });
    navigate(`/video?${params.toString()}`);
  };

  return (
    <Card className={`group relative overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:scale-[1.03] border-2 bg-gradient-to-br ${getCategoryGradient()} touch-manipulation shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_30px_60px_-15px] hover:shadow-primary/30 backdrop-blur-sm
      ${category === 'inorganic' ? 'border-primary/30 hover:border-primary/50' : ''}
      ${category === 'physical' ? 'border-secondary/30 hover:border-secondary/50' : ''}
      ${category === 'organic' ? 'border-accent/30 hover:border-accent/50' : ''}`}>
      
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
        ${category === 'organic' ? 'bg-accent/20' : ''}`} />
      
      {/* Molecule Pattern Overlay - Enhanced */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className={`absolute top-4 right-4 w-4 h-4 rounded-full animate-pulse shadow-lg
          ${category === 'inorganic' ? 'bg-primary/30 shadow-primary/50' : ''}
          ${category === 'physical' ? 'bg-secondary/30 shadow-secondary/50' : ''}
          ${category === 'organic' ? 'bg-accent/30 shadow-accent/50' : ''}`} />
        <div className="absolute top-10 right-14 w-3 h-3 rounded-full bg-white/20 animate-pulse shadow-md" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-14 right-10 w-3.5 h-3.5 rounded-full bg-white/25 animate-pulse shadow-md" style={{ animationDelay: '0.4s' }} />
        <div className="absolute top-8 right-20 w-2 h-2 rounded-full bg-white/15 animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>

      <CardHeader className="pb-2 sm:pb-3 relative z-10 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
          <Badge 
            variant="secondary" 
            className={`text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 shadow-lg group-hover:shadow-xl transition-all duration-300 ${getCategoryBadgeClass()} border-2`}
          >
            Lecture #{lectureNumber}
          </Badge>
        </div>
        <h3 className={`text-base sm:text-lg font-bold leading-tight line-clamp-2 transition-all duration-300 flex items-start gap-2 group-hover:tracking-wide
          ${category === 'inorganic' ? 'group-hover:text-primary' : ''}
          ${category === 'physical' ? 'group-hover:text-secondary' : ''}
          ${category === 'organic' ? 'group-hover:text-accent' : ''}`}>
          <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0 transition-all duration-300
            ${category === 'inorganic' ? 'text-primary/60 group-hover:text-primary' : ''}
            ${category === 'physical' ? 'text-secondary/60 group-hover:text-secondary' : ''}
            ${category === 'organic' ? 'text-accent/60 group-hover:text-accent' : ''}
            group-hover:animate-pulse group-hover:drop-shadow-lg`} />
          <span className="flex-1">{lectureTitle}</span>
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground/80 mt-2 sm:mt-3 line-clamp-1 font-medium">{unitName}</p>
      </CardHeader>
      
      <CardContent className="pt-0 relative z-10 p-5 sm:p-7">
        <div className="flex flex-col gap-2.5">
          <Button 
            onClick={handleWatchVideo}
            className={`w-full group/btn transition-all duration-500 text-sm sm:text-base h-10 sm:h-11 font-bold shadow-lg hover:shadow-2xl ${getCategoryButtonClass()} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <Play className="mr-2 sm:mr-2.5 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-125 transition-transform duration-300 drop-shadow-md" fill="currentColor" />
            <span className="font-bold relative z-10">Watch Lecture</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="w-full text-[10px] sm:text-xs hover:bg-muted/50 transition-all duration-300 h-8 sm:h-9 border-2 hover:border-primary/30 hover:shadow-md backdrop-blur-sm"
            onClick={() => window.open(url, "_blank")}
          >
            <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="font-semibold">Open in New Tab</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
