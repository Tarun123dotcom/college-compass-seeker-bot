import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Clock, Search, Trash2 } from "lucide-react";

const History = () => {
  // Mock search history data
  const searchHistory = [
    {
      id: 1,
      query: "Engineering colleges in Mumbai with good placement",
      timestamp: "2024-01-15 14:30",
      resultsCount: 25,
      filters: ["Engineering", "Mumbai", "Rating > 4.0"]
    },
    {
      id: 2,
      query: "Medical colleges in Delhi under 5 lakhs fee",
      timestamp: "2024-01-14 10:15",
      resultsCount: 12,
      filters: ["Medical", "Delhi", "Fee < 5L"]
    },
    {
      id: 3,
      query: "Top MBA colleges with international exposure",
      timestamp: "2024-01-13 16:45",
      resultsCount: 18,
      filters: ["Management", "International", "Rating > 4.5"]
    }
  ];

  const handleDeleteHistory = (id: number) => {
    console.log("Deleting history item:", id);
    // This would make an API call to delete the history item
  };

  const handleSearchAgain = (query: string) => {
    console.log("Searching again:", query);
    // This would redirect to search page with the query
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Search History</h1>
            <p className="text-lg text-gray-600">Review and rerun your previous college searches</p>
          </div>

          {searchHistory.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Search History</h3>
                <p className="text-gray-600 mb-4">Start searching for colleges to see your history here.</p>
                <Button asChild>
                  <a href="/search">Start Searching</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {searchHistory.map((item) => (
                <Card key={item.id} className="shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                          "{item.query}"
                        </CardTitle>
                        <CardDescription className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {item.timestamp} • {item.resultsCount} results found
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSearchAgain(item.query)}
                        >
                          <Search className="h-4 w-4 mr-2" />
                          Search Again
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteHistory(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.filters.map((filter, index) => (
                        <Badge key={index} variant="secondary">
                          {filter}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;