import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plane, 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Star,
  Mountain,
  Camera,
  Compass,
  Shield,
  Award,
  MessageCircle,
  Globe
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ContactModal from "@/components/ContactModal";
import ServiceCard from "@/components/ServiceCard";
import TourPackageCard from "@/components/TourPackageCard";
import VehicleCard from "@/components/VehicleCard";
import TestimonialCard from "@/components/TestimonialCard";
import GalleryModal from "@/components/GalleryModal";
import ReviewModal from "@/components/ReviewModal";
import { useLanguage } from "@/hooks/useLanguage";
import { Helmet } from "react-helmet-async";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const services = [
    {
      icon: Plane,
      title: "Airport Pickup & Drop",
      description: "Professional airport transfer services with comfortable vehicles and experienced drivers.",
      features: ["24/7 Available", "Flight Tracking", "Meet & Greet", "Comfortable Vehicles"]
    },
    {
      icon: MapPin,
      title: "Tour Packages",
      description: "Customized tour packages to explore the beautiful island of Sri Lanka.",
      features: ["Custom Itineraries", "Local Guides", "Cultural Sites", "Nature Tours"]
    },
    {
      icon: Car,
      title: "Vehicle Rentals",
      description: "Wide range of vehicles available for rent with or without driver.",
      features: ["Various Models", "With/Without Driver", "Flexible Duration", "Insurance Included"]
    }
  ];

  const tourPackages = [
     {
      title: "Wildlife Safari",
      duration: "2 Days",
      highlights: ["Yala National Park", "Elephant Orphanage", "Safari Experience"],
      image: "/images/tours/yala.jpg"
    },
    {
      title: "Cultural Triangle Tour",
      duration: "3 Days",
      highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Kandy Temple"],
      image: "/images/tours/sigiriya.jpg"
    },
    {
      title: "Hill Country Explorer",
      duration: "4 Days",
      highlights: ["Tea Plantations", "Ella Nine Arch Bridge", "Little Adam's Peak"],
      image: "/images/tours/ella.jpg"
    },
    {
      title: "Coastal Paradise",
      duration: "5 Days",
      highlights: ["Galle Fort", "Mirissa Beach", "Whale Watching"],
      image: "/images/tours/galle.jpg"
    },
   
  ];

  const vehicles = [
   
   
    
    {
      name: "Toyota Corolla",
      capacity: "2 Passengers",
      features: ["Very popular sedan", "Reliable, fuel-efficient", "Common for city travel and airport transfers"],
      image: "/images/vehical/toyota corolla.jpg"
    },
    {
    name: "Suzuki Swift",
    capacity: "2 Passengers",
    features: [
      "Compact hatchback",
      "Easy to maneuver in city traffic",
      "Affordable and efficient"
    ],
    image: "/images/vehical/Suzuki Swift.jpg"
  },
    {
    name: "Toyota Prius",
    capacity: "2 Passengers",
    features: [
      "Hybrid sedan",
      "Eco-friendly with great mileage",
      "Ideal for urban and long-distance trips"
    ],
    image: "/images/vehical/toyota Prius.jpg"
  },
  {
      name: "Wagon R",
      capacity: "2 Passengers",
      features: ["AC", "GPS", "Fuel Efficient"],
      image: "/images/vehical/wagon r.jpg"
    },
  {
    name: "Toyota Land Cruiser",
    capacity: "5 Passengers",
    features: [
      "Robust SUV",
      "Suitable for rough terrain and long tours",
      "Popular for family trips and safaris"
    ],
    image: "/images/vehical/Toyota Land Cruiser.jpg"
  },
  {
    name: "Nissan X-Trail",
    capacity: "5 Passengers",
    features: [
      "Comfortable SUV",
      "Good for family and group travels",
      "Spacious and reliable"
    ],
    image: "/images/vehical/Nissan X-Trail.jpg"
  },
    {
    name: "Mitsubishi Outlander",
    capacity: "5 Passengers",
    features: [
      "Mid-size SUV",
      "Fuel-efficient with modern features",
      "Great for city and highway driving"
    ],
    image: "/images/vehical/Mitsubishi Outlander.jpg"
  },
  
    {
    name: "Honda Civic",
    capacity: "2 Passengers",
    features: [
      "Popular sedan",
      "Smooth ride and fuel-efficient",
      "Commonly used for personal and business travel"
    ],
    image: "/images/vehical/Honda Civic.jpg"
  },
  {
    name: "Mahindra Scorpio",
    capacity: "5 Passengers",
    features: [
      "Tough SUV",
      "Well-suited for rough terrains",
      "Spacious interior for groups"
    ],
    image: "/images/vehical/Mahindra Scorpio.jpg"
  },
   {
      name: "Suzuki Every Van",
      capacity: "5 Passengers",
      features: ["AC", "Music System"],
      image: "/images/vehical/every.jpg"
    },
   {
    name: "Nissan Caravan",
    capacity: "10 Passengers",
    features: [
      "Spacious van",
      "Perfect for group transport",
      "Comfortable seating and luggage space"
    ],
    image: "/images/vehical/Nissan Caravan.jpg"
  },
  
  {
    name: "Hyundai H-1",
    capacity: "8 Passengers",
    features: [
      "Mini van",
      "Ideal for family or corporate travel",
      "Modern and comfortable"
    ],
    image: "/images/vehical/Hyundai H-1.jpg"
  },
  {
    name: "Toyota Noah",
    capacity: "5 Passengers",
    features: [
      "Mini van",
      "Good for city and suburban travel",
      "Spacious and easy to drive"
    ],
    image: "/images/vehical/Toyota Noah.jpg"
  },
   {
    name: "Ashok Leyland Bus",
    capacity: "50 Passengers",
    features: [
      "Large bus",
      "Used for large group tours and intercity travel",
      "Comfortable seating and luggage space"
    ],
    image: "/images/vehical/bus.jpg"
  },
  {
    name: "Tata Winger",
    capacity: "12 Passengers",
    features: [
      "Mini bus",
      "Ideal for small group tours",
      "Comfortable and reliable"
    ],
    image: "/images/vehical/Tata Winger.jpg"
  },
  {
    name: "Toyota Hiace Flat Roof",
    capacity: "10 Passengers",
    features: [
      "Flat roof van",
      "Ideal for small groups",
      "Commonly used for city tours and airport drops"
    ],
    image: "/images/vehical/Toyota Hiace Flat Roof.jpg"
  },
   {
      name: "Toyota Hiace High Roof",
      capacity: "12 Passengers",
      features: ["AC", "Comfortable Seating", "Luggage Space"],
      image: "/images/vehical/kdh.jpg"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "Australia",
      rating: 5,
      comment: "Amazing service! The driver was punctual and very knowledgeable about Sri Lankan culture."
    },
    {
      name: "David Chen",
      country: "Canada",
      rating: 5,
      comment: "Perfect tour package. Everything was well organized and the guide was fantastic."
    },
    {
      name: "Maria Garcia",
      country: "Spain",
      rating: 5,
      comment: "Excellent vehicle rental service. The van was clean and comfortable for our family trip."
    },
    {
    name: "John Smith",
    country: "USA",
    rating: 5,
    comment: "The van we rented was perfect for our family trip. Spacious, clean, and the service was excellent!"
  },
  {
    name: "Emily Davis",
    country: "UK",
    rating: 4,
    comment: "Great experience with the vehicle rental company. The driver was punctual and the vehicle comfortable."
  },
  {
    name: "Hans Müller",
    country: "Germany",
    rating: 5,
    comment: "Exploring Sri Lanka was easy with the SUV we rented. Reliable vehicle and friendly staff."
  },
  {
    name: "Aisha Khan",
    country: "UAE",
    rating: 5,
    comment: "Smooth booking process and excellent customer support. The mini-van was ideal for our group."
  }
  
  ];

  return (
    <>
      <Helmet>
        <title>VajiSriLankaTours - Best Sri Lanka Tours, Airport Transfers & Vehicle Rentals</title>
        <link rel="icon" href="/lovable-uploads/15625011-f0dc-40cb-ab60-fdd07896d026.png" type="image/png" />
        <meta name="description" content="Discover Sri Lanka with VajiSriLankaTours. Professional airport transfers, customized tour packages, and reliable vehicle rentals. Experience authentic Sri Lankan hospitality with 24/7 support." />
        <meta name="keywords" content="Sri Lanka tours, airport transfer, vehicle rental, Colombo tours, Kandy tours, Sigiriya, Ella, Galle, Sri Lanka travel, tour packages" />
        <meta name="author" content="VajiSriLankaTours" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vajisrilankatours.com" />
        
        <meta property="og:title" content="VajiSriLankaTours - Best Sri Lanka Tours & Travel Services" />
        <meta property="og:description" content="Discover Sri Lanka with professional tours, airport transfers, and vehicle rentals. Experience authentic Sri Lankan hospitality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vajisrilankatours.com" />
        <meta property="og:image" content="/sri_lanka_991797e44f.jpg" />
        <meta property="og:site_name" content="VajiSriLankaTours" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VajiSriLankaTours - Best Sri Lanka Tours & Travel Services" />
        <meta name="twitter:description" content="Discover Sri Lanka with professional tours, airport transfers, and vehicle rentals." />
        <meta name="twitter:image" content="/sri_lanka_991797e44f.jpg" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#059669" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "VajiSriLankaTours",
            "url": "https://vajisrilankatours.com",
            "logo": "/lovable-uploads/15625011-f0dc-40cb-ab60-fdd07896d026.png",
            "description": "Professional Sri Lanka tours, airport transfers, and vehicle rentals",
            "telephone": "+971 55 319 6525",
            "email": "chaminikaushalya11@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "LK",
              "addressLocality": "Colombo"
            },
            "areaServed": "Sri Lanka",
            "serviceType": ["Tours", "Airport Transfer", "Vehicle Rental"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <header className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 sm:py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/15625011-f0dc-40cb-ab60-fdd07896d026.png" 
                  alt="VajiSriLankaTours Logo" 
                  className="h-8 sm:h-12 w-auto"
                />
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  VajiSriLankaTours
                </h1>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Select value={language} onValueChange={(value: string) => setLanguage(value as 'en' | 'ar')}>
                  <SelectTrigger className="w-20 sm:w-32">
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base px-3 sm:px-4"
                  size="sm"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{t('contactUs')}</span>
                  <span className="sm:hidden">Contact</span>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/hero-bg.jpeg')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-amber-900/50"></div>
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
              {t('heroTitle')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 animate-fade-in opacity-90">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                {t('planJourney')}
              </Button>
              <Button 
                size="lg" 
                onClick={() => setIsGalleryModalOpen(true)}
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <Camera className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                View Gallery
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">{t('ourServices')}</h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('servicesDescription')}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-emerald-50 to-amber-50">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">{t('popularTours')}</h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('toursDescription')}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {tourPackages.map((tour, index) => (
                <TourPackageCard key={index} tour={tour} onContact={() => setIsContactModalOpen(true)} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">{t('vehicleRentals')}</h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                {t('vehiclesDescription')}
              </p>
            </div>
            
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 px-2 py-4">
                {vehicles.map((vehicle, index) => (
                  <div key={index} className="min-w-[280px] flex-shrink-0">
                    <VehicleCard vehicle={vehicle} onContact={() => setIsContactModalOpen(true)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-amber-50 to-emerald-50">
          <div className="container mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">{t('whyChooseUs')}</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{t('support24')}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{t('supportDescription')}</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{t('safeSecure')}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{t('safeDescription')}</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{t('experienced')}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{t('experiencedDescription')}</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 rounded-full p-4 sm:p-6 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                  <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{t('localExpertise')}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{t('localDescription')}</p>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection 
          testimonials={testimonials} 
          onOpenReviewModal={() => setIsReviewModalOpen(true)} 
        />

        <footer className="bg-gradient-to-r from-emerald-800 to-amber-800 text-white py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img 
                    src="/lovable-uploads/15625011-f0dc-40cb-ab60-fdd07896d026.png" 
                    alt="VajiSriLankaTours Logo" 
                    className="h-6 w-auto"
                  />
                  <h4 className="text-xl sm:text-2xl font-bold">VajiSriLankaTours</h4>
                </div>
                <p className="text-emerald-100 text-sm sm:text-base">{t('footerDescription')}</p>
              </div>
              <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('services')}</h5>
                <ul className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <li>{t('airportTransfers')}</li>
                  <li>{t('tourPackages')}</li>
                  <li>{t('vehicleRentals')}</li>
                  <li>{t('customTours')}</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('Luxury Vehicles')}</h5>
                <ul className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <li>{t('toyota premio')}</li>
                  <li>{t('Toyota TRJ 120 Prado')}</li>
                  <li>{t('Toyota Avanza 2017')}</li>
                  <li>{t('Toyota Hilux Cab')}</li>
                  <li>{t('Toyota TRJ 150 Prado')}</li>
                </ul>
              </div>
               <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('Mini Cars')}</h5>
                <ul className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <li>{t('Nissan March')}</li>
                  <li>{t('Suzuki Japan Alto')}</li>
                </ul>
              </div>
               <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('Vans')}</h5>
                <ul className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <li>{t('Suzuki Every Buddy Van Auto')}</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('Standard Vehicles')}</h5>
                <ul className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <li>{t('Suzuki Swift')}</li>
                  <li>{t('Toyota Vitz')}</li>
                  <li>{t('Toyota Avanza')}</li>
                  <li>{t('Toyota Allion')}</li>
                  <li>{t('Toyota Premio')}</li>
                  <li>{t('Volvo AC 45 Seater Luxury Bus')}</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('popularDestinations')}</h5>
                <ul className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <li>Sigiriya</li>
                  <li>Kandy</li>
                  <li>Galle</li>
                  <li>Ella</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg sm:text-xl font-semibold mb-4">{t('contactInfo')}</h5>
                <div className="space-y-2 text-emerald-100 text-sm sm:text-base">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>+971 55 319 6525</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="break-all">vajisrilankatours1984@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-emerald-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-emerald-100 text-sm sm:text-base">
              <p>&copy; 2024 VajiSriLankaTours. {t('allRightsReserved')}</p>
            </div>
          </div>
        </footer>

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
        
        <GalleryModal 
          isOpen={isGalleryModalOpen} 
          onClose={() => setIsGalleryModalOpen(false)} 
        />
        
        <ReviewModal 
          isOpen={isReviewModalOpen} 
          onClose={() => setIsReviewModalOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
