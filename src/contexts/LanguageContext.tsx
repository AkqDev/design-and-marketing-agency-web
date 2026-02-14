import { createContext, useContext, useState, type ReactNode } from "react";

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
  services: {
    ourServices: string;
    services: string;
    bannerDesigns: string;
    nfcCardsDesigns: string;
    giftBoxesDesigns: string;
    broucherAndPamphaletsDesigns: string;
    visitingCardsDesigns: string;
    uniformAndTShirtsDesigns: string;
    companyProfile: string;
    menuCardsDesigns: string;
    wallCladding: string;
    signBoardDesigns: string;
    advertisingServices: string;
  };
  servicesPage: {
    our: string;
    services: string;
    description: string;
    wall: string;
    cladding: string;
  };
  trust: {
    brandsThat: string;
    trustUs: string;
  };
  carousel: {
    brandDevelopment: string;
    conceptTo: string;
    reality: string;
  };
  team: {
    our: string;
    team: string;
  };
  footer: {
    quickLinks: string;
    home: string;
    about: string;
    services: string;
    contactUs: string;
  };
  contact: {
    contactUs: string;
    description: string;
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    yourMessage: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitButton: string;
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
    services: {
      ourServices: "Our",
      services: "Services",
      bannerDesigns: "Banner Designs",
      nfcCardsDesigns: "NFC Cards Designs",
      giftBoxesDesigns: "Gift Boxes Designs",
      broucherAndPamphaletsDesigns: "Brochure And Pamphlets Designs",
      visitingCardsDesigns: "Visiting Cards Designs",
      uniformAndTShirtsDesigns: "Uniform & T-Shirts Designs",
      companyProfile: "Company Profile",
      menuCardsDesigns: "Menu Cards Designs",
      wallCladding: "Wall Cladding",
      signBoardDesigns: "Signboard Designs",
      advertisingServices: "Advertising Services",
    },
    servicesPage: {
      our: "Our",
      services: "Services",
      description: "Professional advertising and printing solutions for businesses of all sizes. From concept to completion, we deliver exceptional quality and innovative designs.",
      wall: "Wall",
      cladding: "Cladding",
    },
    trust: {
      brandsThat: "Brands That",
      trustUs: "Trust Us",
    },
    carousel: {
      brandDevelopment: "Brand Development",
      conceptTo: "Concept To",
      reality: "Reality.",
    },
    team: {
      our: "Our",
      team: "Team",
    },
    footer: {
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      services: "Services",
      contactUs: "Contact Us",
    },
    contact: {
      contactUs: "Contact Us",
      description: "We are a professional printing and advertising company, delivering creative, precise, and durable signage and branding solutions. From indoor and outdoor signage to promotional materials, we help brands stand out through expert craftsmanship.",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      yourMessage: "Your Message",
      namePlaceholder: "Enter Your Name",
      phonePlaceholder: "Phone",
      emailPlaceholder: "Enter Your Email",
      messagePlaceholder: "How can we help you?",
      submitButton: "Submit Message via WhatsApp",
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
    services: {
      ourServices: "خدماتنا",
      services: "",
      bannerDesigns: "تصاميم البانر",
      nfcCardsDesigns: "تصاميم بطاقات NFC",
      giftBoxesDesigns: "تصاميم صناديق الهدايا",
      broucherAndPamphaletsDesigns: "تصاميم البروشور والمنشورات",
      visitingCardsDesigns: "تصاميم بطاقات الزيارة",
      uniformAndTShirtsDesigns: "تصاميم الزي الموحد والقمصان",
      companyProfile: "ملف الشركة",
      menuCardsDesigns: "تصاميم بطاقات القائمة",
      wallCladding: "كسوة الجدران",
      signBoardDesigns: "تصاميم اللوحات الإعلانية",
      advertisingServices: "خدمات الإعلان",
    },
    servicesPage: {
      our: "خدماتنا",
      services: "",
      description: "حلول إعلانية وطباعة احترافية للشركات من جميع الأحجام. من المفهوم إلى الإنجاز، نقدم جودة استثنائية وتصاميم مبتكرة.",
      wall: "كسوة",
      cladding: "الجدران",
    },
    trust: {
      brandsThat: "العلامات التجارية التي",
      trustUs: "تثق بنا",
    },
    carousel: {
      brandDevelopment: "تطوير العلامة التجارية",
      conceptTo: "من المفهوم إلى",
      reality: "الواقع.",
    },
    team: {
      our: "فريقنا",
      team: "",
    },
    footer: {
      quickLinks: "روابط سريعة",
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      contactUs: "اتصل بنا",
    },
    contact: {
      contactUs: "اتصل بنا",
      description: "نحن شركة طباعة وإعلان محترفة، نقدم حلول لافتات وعلامات تجارية إبداعية ودقيقة ومتينة. من اللافتات الداخلية والخارجية إلى المواد الترويجية، نساعد العلامات التجارية على التميز من خلال الحرفية المتخصصة.",
      fullName: "الاسم الكامل",
      phoneNumber: "رقم الهاتف",
      emailAddress: "عنوان البريد الإلكتروني",
      yourMessage: "رسالتك",
      namePlaceholder: "أدخل اسمك",
      phonePlaceholder: "الهاتف",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      messagePlaceholder: "كيف يمكننا مساعدتك؟",
      submitButton: "إرسال الرسالة عبر واتساب",
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
