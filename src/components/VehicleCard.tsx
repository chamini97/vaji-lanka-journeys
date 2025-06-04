
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle } from "lucide-react";

interface VehicleCardProps {
  vehicle: {
    name: string;
    capacity: string;
    features: string[];
    image: string;
  };
  onContact: () => void;
}

const VehicleCard = ({ vehicle, onContact }: VehicleCardProps) => {
  const { name, capacity, features, image } = vehicle;
  
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
      <div className="relative h-48 overflow-hidden">
      <img
  src={image}
  alt={name}
  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
/>

        <div className="absolute top-4 right-4">
          <Badge className="bg-amber-600 text-white">
            <Users className="h-3 w-3 mr-1" />
            {capacity}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">{name}</CardTitle>
        <CardDescription className="text-emerald-600 font-semibold">{capacity}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Features:</p>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <CheckCircle className="h-3 w-3 mr-2 text-emerald-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          onClick={onContact}
          className="w-full bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-700 hover:to-emerald-700 text-white"
        >
          Check Availability
        </Button>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
