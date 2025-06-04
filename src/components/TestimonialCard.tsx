
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    country: string;
    rating: number;
    comment: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, country, rating, comment } = testimonial;
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-amber-100">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, index) => (
            <Star key={index} className="h-4 w-4 text-amber-500 fill-current" />
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 italic">"{comment}"</p>
        
        <div className="border-t pt-4">
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{country}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
