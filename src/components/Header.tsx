import { ThemeToggle } from "./ThemeToggle";
import { FlaskConical, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const location = useLocation();
  const isVideoPage = location.pathname === "/video";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      <Link 
        to="/" 
        onClick={() => mobile && setIsOpen(false)}
        className={cn(
          "relative font-semibold transition-all duration-500 group",
          mobile 
            ? "text-lg py-4 px-5 rounded-2xl block" 
            : "text-sm py-2.5 px-5 rounded-full",
          location.pathname === "/" 
            ? mobile 
              ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary shadow-md" 
              : "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground shadow-lg shadow-primary/30" 
            : mobile 
              ? "text-foreground hover:bg-muted/50" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          !mobile && location.pathname !== "/" && "hover:shadow-md"
        )}
      >
        <span className="relative z-10">Test Series</span>
        {!mobile && location.pathname !== "/" && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 transition-all duration-500" />
        )}
      </Link>
      <Link 
        to="/courses" 
        onClick={() => mobile && setIsOpen(false)}
        className={cn(
          "relative font-semibold transition-all duration-500 group",
          mobile 
            ? "text-lg py-4 px-5 rounded-2xl block" 
            : "text-sm py-2.5 px-5 rounded-full",
          location.pathname === "/courses" 
            ? mobile 
              ? "bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 text-primary shadow-md" 
              : "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground shadow-lg shadow-primary/30" 
            : mobile 
              ? "text-foreground hover:bg-muted/50" 
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
          !mobile && location.pathname !== "/courses" && "hover:shadow-md"
        )}
      >
        <span className="relative z-10">Courses</span>
        {!mobile && location.pathname !== "/courses" && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-accent/5 transition-all duration-500" />
        )}
      </Link>
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300",
      isScrolled && "shadow-lg shadow-primary/5"
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-4 group relative z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative p-2.5 sm:p-3 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground drop-shadow-lg" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight tracking-tight group-hover:tracking-normal transition-all duration-300">
                Chemistry Tests
              </span>
              {!isVideoPage && (
                <span className="text-[11px] sm:text-xs text-muted-foreground/80 font-bold tracking-wider uppercase hidden sm:block">
                  Premium Test Series
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center gap-8 relative z-10">
            <nav className="flex items-center gap-3">
              <NavLinks />
            </nav>
            <div className="h-8 w-px bg-border/50" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-3 relative z-10">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="relative w-11 h-11 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                >
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] border-l border-border/50">
                <div className="flex flex-col gap-8 mt-8">
                  <div className="flex items-center gap-4 pb-6 border-b border-border/40">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-md opacity-40" />
                      <div className="relative p-3 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-lg">
                        <FlaskConical className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Chemistry Tests
                      </div>
                      <div className="text-[11px] text-muted-foreground/80 font-bold tracking-wider uppercase">
                        Premium Test Series
                      </div>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-3">
                    <NavLinks mobile />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
