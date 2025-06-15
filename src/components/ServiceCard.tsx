
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { icon: Icon, title, description, features } = service;
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-emerald-100">
      <CardHeader className="text-center">
        <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <Icon className="h-8 w-8 text-emerald-600" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="mr-2 mb-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
