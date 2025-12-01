import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestCard } from "@/components/ui/TestCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { EmptyState } from "@/components/EmptyState";
import { useDebounce } from "@/hooks/useDebounce";
import { inorganicTests, physicalTests, organicTests, aptitudeTests } from "@/data/testData";
import { FlaskConical, Atom, Beaker, Brain, Search, X, BookOpen, Award } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("inorganic");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // Enhanced filter function - searches across multiple fields
  const filterTests = (tests: typeof inorganicTests) => {
    if (!debouncedSearchQuery.trim()) return tests;
    
    const query = debouncedSearchQuery.toLowerCase().trim();
    
    return tests.filter(test => {
      // Search in title
      const titleMatch = test.title.toLowerCase().includes(query);
      
      // Search in test type
      const typeMatch = test.testType.toLowerCase().includes(query);
      
      // Search in link (alternative names)
      const linkMatch = test.link.toLowerCase().includes(query);
      
      // Extract number from search (e.g., "test 5" or "5")
      const numberMatch = query.match(/\d+/);
      const testNumberMatch = numberMatch && test.number.toString() === numberMatch[0];
      
      // Match partial words (e.g., "coord" matches "coordination")
      const partialMatch = 
        test.title.toLowerCase().split(' ').some(word => word.startsWith(query)) ||
        test.testType.toLowerCase().split(' ').some(word => word.startsWith(query));
      
      return titleMatch || typeMatch || linkMatch || testNumberMatch || partialMatch;
    });
  };

  const filteredInorganicTests = useMemo(() => filterTests(inorganicTests), [debouncedSearchQuery]);
  const filteredPhysicalTests = useMemo(() => filterTests(physicalTests), [debouncedSearchQuery]);
  const filteredOrganicTests = useMemo(() => filterTests(organicTests), [debouncedSearchQuery]);
  const filteredAptitudeTests = useMemo(() => filterTests(aptitudeTests), [debouncedSearchQuery]);

  const totalTests = inorganicTests.length + physicalTests.length + organicTests.length + aptitudeTests.length;
  const totalFilteredTests = filteredInorganicTests.length + filteredPhysicalTests.length + 
                             filteredOrganicTests.length + filteredAptitudeTests.length;
  
  const hasSearchQuery = debouncedSearchQuery.trim().length > 0;
  const hasNoResults = hasSearchQuery && totalFilteredTests === 0;
  
  const clearSearch = () => {
    setSearchQuery("");
  };

  const stats = [
    { icon: BookOpen, label: "Total Tests", value: totalTests, color: "text-primary" },
    { icon: Atom, label: "Inorganic", value: inorganicTests.length, color: "text-primary" },
    { icon: FlaskConical, label: "Physical", value: physicalTests.length, color: "text-secondary" },
    { icon: Beaker, label: "Organic", value: organicTests.length, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-safe">
      <Header />
      {/* Hero Section */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 -mt-8 sm:-mt-10 md:-mt-12 relative z-10">
        {/* Enhanced Search Bar */}
        <div className="mb-8 my-7 sm:mb-10 md:mb-12 animate-fade-in">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-3 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground pointer-events-none z-10" />
            <Input
              type="text"
              placeholder="Search by test name, number, type, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 sm:pl-12 md:pl-14 pr-10 sm:pr-12 md:pr-14 h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg bg-card backdrop-blur-sm border-2 border-border/50 focus:border-primary hover:border-primary/30 shadow-card hover:shadow-card-hover rounded-xl sm:rounded-2xl transition-all duration-300 font-medium"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full hover:bg-muted/50 transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>
          
          {/* Search Results Info */}
          {hasSearchQuery && !hasNoResults && (
            <div className="text-center mt-4 sm:mt-5 md:mt-6 animate-fade-in">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Found <span className="font-bold text-primary">{totalFilteredTests}</span> test{totalFilteredTests !== 1 ? 's' : ''} matching 
                <span className="font-semibold text-foreground"> "{debouncedSearchQuery}"</span>
              </p>
            </div>
          )}
        </div>

        {/* Show Empty State if no results */}
        {hasNoResults ? (
          <EmptyState searchQuery={debouncedSearchQuery} onClearSearch={clearSearch} />
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
              <TabsList className="inline-flex h-auto p-1.5 sm:p-2 bg-card backdrop-blur-sm shadow-card-hover border border-border/50 rounded-xl sm:rounded-2xl gap-1.5 sm:gap-2 min-w-max">
              <TabsTrigger 
                value="inorganic" 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-primary-dark data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-primary/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
              >
                <Atom className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Inorganic</div>
                  <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredInorganicTests.length} tests</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="physical" 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-secondary data-[state=active]:to-secondary/80 data-[state=active]:text-secondary-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-secondary/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
              >
                <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Physical</div>
                  <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredPhysicalTests.length} tests</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="organic" 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-accent data-[state=active]:to-accent/80 data-[state=active]:text-accent-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-accent/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
              >
                <Beaker className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Organic</div>
                  <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredOrganicTests.length} tests</div>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="aptitude" 
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:via-secondary data-[state=active]:to-accent data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-primary/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
              >
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Aptitude</div>
                  <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredAptitudeTests.length} tests</div>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

            <TabsContent value="inorganic" className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="mb-6 sm:mb-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-primary/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2 sm:mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    <Atom className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-primary" />
                  </div>
                  <span>Inorganic Chemistry</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium sm:ml-[4.5rem]">
                  {hasSearchQuery ? (
                    <>Showing <span className="font-bold text-primary">{filteredInorganicTests.length}</span> of {inorganicTests.length} tests</>
                  ) : (
                    <>{filteredInorganicTests.length} comprehensive tests covering all major topics</>
                  )}
                </p>
              </div>
              {filteredInorganicTests.length > 0 ? (
                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredInorganicTests.map((test, idx) => (
                    <div key={test.number} className="animate-scale-in" style={{ animationDelay: `${idx * 50}ms` }}>
                      <TestCard {...test} category="inorganic" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <p className="text-muted-foreground text-sm sm:text-base">No inorganic tests match your search.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="physical" className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="mb-6 sm:mb-8 bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-secondary/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2 sm:mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-secondary/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    <FlaskConical className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-secondary" />
                  </div>
                  <span>Physical Chemistry</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium sm:ml-[4.5rem]">
                  {hasSearchQuery ? (
                    <>Showing <span className="font-bold text-secondary">{filteredPhysicalTests.length}</span> of {physicalTests.length} tests</>
                  ) : (
                    <>{filteredPhysicalTests.length} tests focusing on physical chemistry concepts</>
                  )}
                </p>
              </div>
              {filteredPhysicalTests.length > 0 ? (
                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPhysicalTests.map((test, idx) => (
                    <div key={test.number} className="animate-scale-in" style={{ animationDelay: `${idx * 50}ms` }}>
                      <TestCard {...test} category="physical" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <p className="text-muted-foreground text-sm sm:text-base">No physical tests match your search.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="organic" className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="mb-6 sm:mb-8 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-accent/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2 sm:mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-accent/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    <Beaker className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-accent" />
                  </div>
                  <span>Organic Chemistry</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium sm:ml-[4.5rem]">
                  {hasSearchQuery ? (
                    <>Showing <span className="font-bold text-accent">{filteredOrganicTests.length}</span> of {organicTests.length} tests</>
                  ) : (
                    <>{filteredOrganicTests.length} tests covering organic chemistry mechanisms and reactions</>
                  )}
                </p>
              </div>
              {filteredOrganicTests.length > 0 ? (
                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredOrganicTests.map((test, idx) => (
                    <div key={test.number} className="animate-scale-in" style={{ animationDelay: `${idx * 50}ms` }}>
                      <TestCard {...test} category="organic" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <p className="text-muted-foreground text-sm sm:text-base">No organic tests match your search.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="aptitude" className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="mb-6 sm:mb-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-primary/20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2 sm:mb-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg sm:rounded-xl flex-shrink-0">
                    <Brain className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-primary" />
                  </div>
                  <span>General Aptitude</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-medium sm:ml-[4.5rem]">
                  {hasSearchQuery ? (
                    <>Showing <span className="font-bold text-primary">{filteredAptitudeTests.length}</span> of {aptitudeTests.length} tests</>
                  ) : (
                    <>{filteredAptitudeTests.length} tests for general aptitude and reasoning</>
                  )}
                </p>
              </div>
              {filteredAptitudeTests.length > 0 ? (
                <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredAptitudeTests.map((test, idx) => (
                    <div key={test.number} className="animate-scale-in" style={{ animationDelay: `${idx * 50}ms` }}>
                      <TestCard {...test} category="aptitude" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <p className="text-muted-foreground text-sm sm:text-base">No aptitude tests match your search.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Index;
