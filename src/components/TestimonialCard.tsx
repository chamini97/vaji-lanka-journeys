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
    <Card className="min-w-[280px] hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-amber-100 rounded-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
          {[...Array(rating)].map((_, index) => (
            <Star key={index} className="h-5 w-5 text-amber-500 fill-current" aria-hidden="true" />
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
