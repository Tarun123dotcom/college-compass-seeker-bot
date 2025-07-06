import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search as SearchIcon, Filter, MapPin, Star, Users, DollarSign, ExternalLink } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStream, setSelectedStream] = useState("");
  const [ratingRange, setRatingRange] = useState([3.0]);
  const [showFilters, setShowFilters] = useState(false);

  // Mock college data - this would come from your database
  const mockColleges = [
    {
      id: 1,
      name: "Indian Institute of Technology Bombay",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      placement: 95,
      fees: "₹2.5L/year",
      stream: "Engineering",
      description: "Premier engineering institute with excellent placement records",
      website: "https://www.iitb.ac.in"
    },
    {
      id: 2,
      name: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      rating: 4.2,
      placement: 88,
      fees: "₹1.8L/year",
      stream: "Engineering",
      description: "Top private engineering college with modern infrastructure",
      website: "https://vit.ac.in"
    },
    {
      id: 3,
      name: "Lady Shri Ram College",
      location: "New Delhi",
      rating: 4.6,
      placement: 92,
      fees: "₹45K/year",
      stream: "Arts",
      description: "Leading women's college for arts and humanities",
      website: "https://lsr.edu.in"
    }
  ];

  const states = [
    "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Gujarat", 
    "Haryana", "Karnataka", "Kerala", "Maharashtra", "Rajasthan", "Tamil Nadu", "Uttar Pradesh"
  ];

  const streams = ["Engineering", "Medical", "Management", "Arts", "Commerce", "Science"];

  const handleSearch = () => {
    // This would typically make an API call to your backend
    console.log("Searching with:", { searchQuery, selectedState, selectedStream, ratingRange });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect College</h1>
            <p className="text-lg text-gray-600">Search through thousands of colleges and find the one that's right for you</p>
          </div>

          {/* Search Bar */}
          <Card className="mb-8 shadow-elegant">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder="Search for colleges, courses, or locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <Button onClick={handleSearch} size="lg" className="h-12 px-8">
                  <SearchIcon className="mr-2 h-5 w-5" />
                  Search
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  size="lg"
                  className="h-12"
                >
                  <Filter className="mr-2 h-5 w-5" />
                  Filters
                </Button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Stream</label>
                    <Select value={selectedStream} onValueChange={setSelectedStream}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Stream" />
                      </SelectTrigger>
                      <SelectContent>
                        {streams.map((stream) => (
                          <SelectItem key={stream} value={stream}>{stream}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Minimum Rating: {ratingRange[0]}
                    </label>
                    <Slider
                      value={ratingRange}
                      onValueChange={setRatingRange}
                      max={5}
                      min={1}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <div className="grid gap-6">
            {mockColleges.map((college) => (
              <Card key={college.id} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{college.name}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {college.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {college.stream}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{college.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 mr-2" />
                      <span className="font-semibold">{college.rating}/5</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-semibold">{college.placement}% Placement</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="font-semibold">{college.fees}</span>
                    </div>
                    <div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={college.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;