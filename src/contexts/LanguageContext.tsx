import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface Translations {
  navbar: {
    home: string;
    about: string;
    services: string;
    contact: string;
    bookAppointment: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaButton: string;
  };
  about: {
    meet: string;
    companyName: string;
    subtitle1: string;
    subtitle2: string;
    promise: string;
    description: string;
    button: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      bookAppointment: "Book an Appointment",
    },
    hero: {
      titleLine1: "Transform Your",
      titleLine2: "Brand Vision",
      subtitle: "Create stunning, professional signage that captures attention and drives results. From concept to installation, we bring your brand to life with cutting-edge design and premium materials.",
      ctaButton: "Get Free Quote",
    },
    about: {
      meet: "Meet",
      companyName: "Ayyan SignAge",
      subtitle1: "A 360° Result-Oriented",
      subtitle2: "Digital Marketing Agency",
      promise: "At Ayyan SignAge, we promise results.",
      description: "We are a professional Printing & Advertising company, providing innovative signage and advertising solutions that help brands stand out and create a strong visual impact.",
      button: "More About Us",
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      contact: "اتصل بنا",
      bookAppointment: "احجز موعد",
    },
    hero: {
      titleLine1: "حول رؤية",
      titleLine2: "علامتك التجارية",
      subtitle: "أنشئ لافتات مذهلة واحترافية تجذب الانتباه وتحقق النتائج. من المفهوم إلى التركيب، نحيي علامتك التجارية بتصميم متطور ومواد عالية الجودة.",
      ctaButton: "احصل على عرض مجاني",
    },
    about: {
      meet: "تعرف على",
      companyName: "أيان سيجنيج",
      subtitle1: "وكالة تسويق رقمي",
      subtitle2: "شاملة وموجهة نحو النتائج",
      promise: "في أيان سيجنيج، نعدك بالنتائج.",
      description: "نحن شركة طباعة وإعلان محترفة، نقدم حلول لافتات وإعلانات مبتكرة تساعد العلامات التجارية على التميز وخلق تأثير بصري قوي.",
      button: "المزيد عنا",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
