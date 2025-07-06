import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { MessageCircle, Star, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your feedback. We'll review it soon.",
      });
      
      // Reset form
      setRating(0);
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  const StarRating = () => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="focus:outline-none transition-colors"
          >
            <Star
              className={`h-8 w-8 ${
                star <= (hoveredRating || rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Share Your Feedback</h1>
            <p className="text-lg text-gray-600">Help us improve CollegeFind with your suggestions and comments</p>
          </div>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>We'd Love to Hear From You</CardTitle>
              <CardDescription>
                Your feedback helps us make CollegeFind better for everyone. Please share your experience with us.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-base font-medium">How would you rate your experience?</Label>
                  <div className="mt-2">
                    <StarRating />
                  </div>
                  {rating > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      {rating === 1 && "Poor - We'll work hard to improve"}
                      {rating === 2 && "Fair - We have room for improvement"}
                      {rating === 3 && "Good - Thanks for your feedback"}
                      {rating === 4 && "Very Good - We're glad you had a positive experience"}
                      {rating === 5 && "Excellent - Thank you for the amazing feedback!"}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Your Feedback</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your experience, suggestions for improvement, or any issues you encountered..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || rating === 0}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Support Info */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-blue-900 mb-2">Need More Help?</h3>
              <p className="text-blue-700 text-sm mb-3">
                If you have specific questions or need immediate assistance, you can also reach out to us through:
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Email: support@collegefind.com</li>
                <li>• Phone: +91-XXX-XXX-XXXX</li>
                <li>• Live Chat: Available 9 AM - 6 PM IST</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Feedback;