import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FlaskConical, BookOpen } from "lucide-react";

export const MobileNav = () => {
  const location = useLocation();
  
  // Don't show on video page
  if (location.pathname === "/video") return null;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border/40 shadow-lg">
      <div className="flex items-center justify-around h-16 px-4">
        <Link
          to="/"
          className={cn(
            "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 min-w-[80px]",
            location.pathname === "/" 
              ? "bg-primary/10 text-primary scale-105" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <FlaskConical className="w-5 h-5" />
          <span className="text-xs font-semibold">Tests</span>
        </Link>
        <Link
          to="/courses"
          className={cn(
            "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 min-w-[80px]",
            location.pathname === "/courses" 
              ? "bg-primary/10 text-primary scale-105" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-xs font-semibold">Courses</span>
        </Link>
      </div>
    </nav>
  );
};
