
import { useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

const translations: Translations = {
  contactUs: {
    en: 'Contact Us',
    ar: 'اتصل بنا'
  },
  heroTitle: {
    en: 'Discover Sri Lanka',
    ar: 'اكتشف سريلانكا'
  },
  heroSubtitle: {
    en: 'Your Gateway to the Pearl of the Indian Ocean',
    ar: 'بوابتك إلى لؤلؤة المحيط الهندي'
  },
  planJourney: {
    en: 'Plan Your Journey',
    ar: 'خطط لرحلتك'
  },
  viewGallery: {
    en: 'View Gallery',
    ar: 'عرض المعرض'
  },
  ourServices: {
    en: 'Our Services',
    ar: 'خدماتنا'
  },
  servicesDescription: {
    en: 'Comprehensive travel services to make your Sri Lankan adventure unforgettable',
    ar: 'خدمات سفر شاملة لجعل مغامرتك السريلانكية لا تُنسى'
  },
  popularTours: {
    en: 'Popular Tour Packages',
    ar: 'باقات الجولات الشائعة'
  },
  toursDescription: {
    en: 'Carefully crafted itineraries to showcase the best of Sri Lanka',
    ar: 'برامج سفر مصممة بعناية لتظهر أفضل ما في سريلانكا'
  },
  vehicleRentals: {
    en: 'Vehicle Rentals',
    ar: 'تأجير المركبات'
  },
  vehiclesDescription: {
    en: 'Choose from our fleet of well-maintained vehicles for your comfort',
    ar: 'اختر من أسطولنا من المركبات المُصانة جيداً لراحتك'
  },
  whyChooseUs: {
    en: 'Why Choose VajiSriLankaTours?',
    ar: 'لماذا تختار VajiSriLankaTours؟'
  },
  support24: {
    en: '24/7 Support',
    ar: 'دعم على مدار الساعة'
  },
  supportDescription: {
    en: 'Round the clock assistance for all your travel needs',
    ar: 'مساعدة على مدار الساعة لجميع احتياجات السفر'
  },
  safeSecure: {
    en: 'Safe & Secure',
    ar: 'آمن ومحمي'
  },
  safeDescription: {
    en: 'Licensed drivers and insured vehicles for your safety',
    ar: 'سائقون مرخصون ومركبات مؤمنة لسلامتك'
  },
  experienced: {
    en: 'Experienced',
    ar: 'ذو خبرة'
  },
  experiencedDescription: {
    en: 'Years of experience in Sri Lankan tourism industry',
    ar: 'سنوات من الخبرة في صناعة السياحة السريلانكية'
  },
  localExpertise: {
    en: 'Local Expertise',
    ar: 'خبرة محلية'
  },
  localDescription: {
    en: 'Deep knowledge of hidden gems and local culture',
    ar: 'معرفة عميقة بالكنوز المخفية والثقافة المحلية'
  },
  testimonials: {
    en: 'What Our Guests Say',
    ar: 'ما يقوله ضيوفنا'
  },
  services: {
    en: 'Services',
    ar: 'الخدمات'
  },
  airportTransfers: {
    en: 'Airport Transfers',
    ar: 'نقل المطار'
  },
  tourPackages: {
    en: 'Tour Packages',
    ar: 'باقات الجولات'
  },
  customTours: {
    en: 'Custom Tours',
    ar: 'جولات مخصصة'
  },
  popularDestinations: {
    en: 'Popular Destinations',
    ar: 'الوجهات الشائعة'
  },
  contactInfo: {
    en: 'Contact Info',
    ar: 'معلومات الاتصال'
  },
  footerDescription: {
    en: 'Your trusted partner for exploring the beautiful island of Sri Lanka.',
    ar: 'شريكك الموثوق لاستكشاف جزيرة سريلانكا الجميلة.'
  },
  allRightsReserved: {
    en: 'All rights reserved.',
    ar: 'جميع الحقوق محفوظة.'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
};
