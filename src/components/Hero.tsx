import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import collegeHero from "@/assets/college-hero.jpg";

const Hero = () => {
  const stats = [
    { label: "Colleges", value: "500+", icon: TrendingUp },
    { label: "Students Helped", value: "10K+", icon: Users },
    { label: "Success Rate", value: "95%", icon: Award },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={collegeHero}
          alt="College Campus"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              College Match
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover colleges that match your dreams, goals, and preferences with our AI-powered recommendation system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6">
              <Link to="/search">
                <Search className="mr-2 h-5 w-5" />
                Start Your Search
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default Hero;