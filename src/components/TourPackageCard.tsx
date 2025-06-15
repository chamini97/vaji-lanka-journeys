
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

interface TourPackageCardProps {
  tour: {
    title: string;
    duration: string;
    highlights: string[];
    image: string;
  };
  onContact: () => void;
}

const TourPackageCard = ({ tour, onContact }: TourPackageCardProps) => {
  const { title, duration, highlights, image } = tour;
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
  src={image}
  alt={title}
  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
/>

        <div className="absolute top-4 right-4">
          <Badge className="bg-emerald-600 text-white">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <MapPin className="h-3 w-3 mr-2 text-emerald-600" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          onClick={onContact}
          className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white"
        >
          Get Custom Quote
        </Button>
      </CardContent>
    </Card>
  );
};

export default TourPackageCard;
