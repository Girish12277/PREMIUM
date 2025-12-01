import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-muted/50 transition-colors"
      >
        <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-11 h-11 rounded-full hover:bg-primary/10 hover:scale-105 transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />
      <Sun className="relative h-5 w-5 sm:h-6 sm:w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-foreground group-hover:text-primary" />
      <Moon className="absolute h-5 w-5 sm:h-6 sm:w-6 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-foreground group-hover:text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
