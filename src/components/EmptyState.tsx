import { SearchX, Filter } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export const EmptyState = ({ searchQuery, onClearSearch }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4">
      <div className="relative mb-6 sm:mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full"></div>
        <div className="relative p-4 sm:p-6 bg-muted/50 backdrop-blur-sm rounded-2xl border border-border/50">
          <SearchX className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
        </div>
      </div>
      
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 text-center">
        No Tests Found
      </h3>
      
      <p className="text-sm sm:text-base text-muted-foreground text-center max-w-md mb-6 sm:mb-8">
        We couldn't find any tests matching <span className="font-semibold text-foreground">"{searchQuery}"</span>
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Button 
          onClick={onClearSearch}
          variant="default"
          className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          <Filter className="mr-2 h-4 w-4" />
          Clear Search
        </Button>
      </div>
      
      <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-muted/30 rounded-xl border border-border/30 max-w-lg">
        <h4 className="text-sm font-semibold text-foreground mb-2 sm:mb-3">Search Tips:</h4>
        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 sm:space-y-2">
          <li>• Try different keywords (e.g., "coordination", "organic")</li>
          <li>• Search by test type (e.g., "Sunday Test", "Test Series")</li>
          <li>• Use shorter, more general terms</li>
          <li>• Check spelling and try alternative names</li>
        </ul>
      </div>
    </div>
  );
};
