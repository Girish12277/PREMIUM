import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/CourseCard";
import { inorganicCourses, physicalCourses, organicCourses } from "@/data/courseData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filterLectures = (courses: typeof inorganicCourses, query: string) => {
    if (!query.trim()) return courses;
    
    const lowerQuery = query.toLowerCase();
    return courses.map(unit => ({
      ...unit,
      lectures: unit.lectures.filter(lecture => 
        lecture.title.toLowerCase().includes(lowerQuery) ||
        unit.name.toLowerCase().includes(lowerQuery) ||
        lecture.number.toString().includes(lowerQuery)
      )
    })).filter(unit => unit.lectures.length > 0);
  };

  const filteredInorganicCourses = useMemo(
    () => filterLectures(inorganicCourses, debouncedSearchQuery),
    [debouncedSearchQuery]
  );

  const filteredPhysicalCourses = useMemo(
    () => filterLectures(physicalCourses, debouncedSearchQuery),
    [debouncedSearchQuery]
  );

  const filteredOrganicCourses = useMemo(
    () => filterLectures(organicCourses, debouncedSearchQuery),
    [debouncedSearchQuery]
  );

  const totalInorganicLectures = inorganicCourses.reduce((acc, unit) => acc + unit.lectures.length, 0);
  const totalPhysicalLectures = physicalCourses.reduce((acc, unit) => acc + unit.lectures.length, 0);
  const totalOrganicLectures = organicCourses.reduce((acc, unit) => acc + unit.lectures.length, 0);
  const totalLectures = totalInorganicLectures + totalPhysicalLectures + totalOrganicLectures;

  const filteredInorganicTotal = filteredInorganicCourses.reduce((acc, unit) => acc + unit.lectures.length, 0);
  const filteredPhysicalTotal = filteredPhysicalCourses.reduce((acc, unit) => acc + unit.lectures.length, 0);
  const filteredOrganicTotal = filteredOrganicCourses.reduce((acc, unit) => acc + unit.lectures.length, 0);
  const filteredTotal = filteredInorganicTotal + filteredPhysicalTotal + filteredOrganicTotal;

  const hasResults = filteredTotal > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pb-safe">
      <Header />
      

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 -mt-8 sm:-mt-10 md:-mt-12 relative z-10">
        {/* Enhanced Search Bar */}
        <div className="mb-8  my-5 sm:mb-10 md:mb-12 animate-fade-in">
          <div className="relative max-w-3xl mx-auto">
            <Input
              type="text"
              placeholder="Search lectures, units, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 sm:pl-5 pr-10 sm:pr-12 h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg bg-card backdrop-blur-sm border-2 border-border/50 focus:border-primary hover:border-primary/30 shadow-card hover:shadow-card-hover rounded-xl sm:rounded-2xl transition-all duration-300 font-medium"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full hover:bg-muted/50 transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            )}
          </div>
          
          {/* Search Results Info */}
          {searchQuery && (
            <div className="text-center mt-4 sm:mt-5 md:mt-6 animate-fade-in">
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                Found <span className="font-bold text-primary">{filteredTotal}</span> lecture{filteredTotal !== 1 ? 's' : ''} matching 
                <span className="font-semibold text-foreground"> "{searchQuery}"</span>
              </p>
            </div>
          )}
        </div>

        {!hasResults ? (
          <div className="text-center py-12 sm:py-16">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">No lectures found matching your search.</p>
          </div>
        ) : (
          <Tabs defaultValue="inorganic" className="w-full">
            <div className="mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-3 scrollbar-hide -mx-4 px-4">
              <TabsList className="inline-flex h-auto p-1.5 sm:p-2 bg-card backdrop-blur-sm shadow-card-hover border border-border/50 rounded-xl sm:rounded-2xl gap-1.5 sm:gap-2 min-w-max">
                <TabsTrigger 
                  value="inorganic" 
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-primary-dark data-[state=active]:text-primary-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-primary/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Inorganic</div>
                    <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredInorganicTotal} lectures</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="physical" 
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-secondary data-[state=active]:to-secondary/80 data-[state=active]:text-secondary-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-secondary/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Physical</div>
                    <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredPhysicalTotal} lectures</div>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="organic" 
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-accent data-[state=active]:to-accent/80 data-[state=active]:text-accent-foreground data-[state=active]:shadow-xl data-[state=active]:shadow-accent/30 data-[state=active]:scale-105 transition-all duration-300 hover:bg-muted/50"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-bold text-xs sm:text-sm md:text-base whitespace-nowrap">Organic</div>
                    <div className="text-[10px] sm:text-xs font-medium opacity-90 whitespace-nowrap">{filteredOrganicTotal} lectures</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="inorganic" className="space-y-6 sm:space-y-8 animate-fade-in">
              {filteredInorganicCourses.map((unit, idx) => (
                <Collapsible key={idx} defaultOpen={debouncedSearchQuery.length > 0}>
                  <CollapsibleTrigger className="w-full group touch-manipulation">
                    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 hover:shadow-card-hover hover:border-primary/40 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                          </div>
                          <div className="text-left min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1 truncate group-hover:text-primary-glow transition-colors duration-300">
                              {unit.name}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                              {unit.lectures.length} Lectures Available
                            </p>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                      {unit.lectures.map((lecture, lectureIdx) => (
                        <div key={lecture.number} className="animate-scale-in" style={{ animationDelay: `${lectureIdx * 50}ms` }}>
                          <CourseCard
                            unitName={unit.name}
                            lectureNumber={lecture.number}
                            lectureTitle={lecture.title}
                            url={lecture.url}
                            category="inorganic"
                          />
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </TabsContent>

            <TabsContent value="physical" className="space-y-6 sm:space-y-8 animate-fade-in">
              {filteredPhysicalCourses.map((unit, idx) => (
                <Collapsible key={idx} defaultOpen={debouncedSearchQuery.length > 0}>
                  <CollapsibleTrigger className="w-full group touch-manipulation">
                    <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent border border-secondary/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 hover:shadow-card-hover hover:border-secondary/40 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-secondary" />
                          </div>
                          <div className="text-left min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary mb-1 truncate group-hover:text-secondary-glow transition-colors duration-300">
                              {unit.name}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                              {unit.lectures.length} Lectures Available
                            </p>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-secondary transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                      {unit.lectures.map((lecture, lectureIdx) => (
                        <div key={lecture.number} className="animate-scale-in" style={{ animationDelay: `${lectureIdx * 50}ms` }}>
                          <CourseCard
                            unitName={unit.name}
                            lectureNumber={lecture.number}
                            lectureTitle={lecture.title}
                            url={lecture.url}
                            category="physical"
                          />
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </TabsContent>

            <TabsContent value="organic" className="space-y-6 sm:space-y-8 animate-fade-in">
              {filteredOrganicCourses.map((unit, idx) => (
                <Collapsible key={idx} defaultOpen={debouncedSearchQuery.length > 0}>
                  <CollapsibleTrigger className="w-full group touch-manipulation">
                    <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-6 hover:shadow-card-hover hover:border-accent/40 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl sm:rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-accent" />
                          </div>
                          <div className="text-left min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-accent mb-1 truncate group-hover:text-accent-glow transition-colors duration-300">
                              {unit.name}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                              {unit.lectures.length} Lectures Available
                            </p>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-accent transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
                      {unit.lectures.map((lecture, lectureIdx) => (
                        <div key={lecture.number} className="animate-scale-in" style={{ animationDelay: `${lectureIdx * 50}ms` }}>
                          <CourseCard
                            unitName={unit.name}
                            lectureNumber={lecture.number}
                            lectureTitle={lecture.title}
                            url={lecture.url}
                            category="organic"
                          />
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </TabsContent>
          </Tabs>
        )}
      </section>
    </div>
  );
};

export default Courses;
