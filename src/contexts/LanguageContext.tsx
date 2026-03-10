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
    ourStory: string;
    story: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    buildBrand: string;
    location: string;
  };
  visionMission: {
    ourVision: string;
    vision: string;
    visionDescription: string;
    ourMission: string;
    mission: string;
    missionDescription: string;
  };
  aboutServices: {
    ourAdvertising: string;
    services: string;
    metaAds: string;
    metaAdsDescription: string;
    socialMediaHandling: string;
    socialMediaDescription: string;
    onlineBranding: string;
    onlineBrandingDescription: string;
    webDevelopment: string;
    webDescription: string;
    seoServices: string;
    seoDescription: string;
    videoEditing: string;
    videoEditingDescription: string;
    getMoreInfo: string;
    whatsappMessage: string;
  };
  productPages: {
    keyFeatures: string;
    serviceFeatures: string;
    selectDesignStyle: string;
    selectPreferredService: string;
    selectPrimaryRequirement: string;
    addToCart: string;
    canIGetMoreInfo: string;
    menuOptionsAvailable: string;
    selectMenuType: string;
    availableOptions: string;
    selectPrimarySignageType: string;
    serviceOptions: string;
    premiumOptions: string;
    selectPrimaryCardType: string;
    claddingBenefits: string;
    selectCladdingInterest: string;
    bannerTitle: string;
    bannerDescription: string;
    bannerFeature1: string;
    bannerFeature2: string;
    bannerFeature3: string;
    bannerFeature4: string;
    bannerFeature5: string;
    brochureTitle: string;
    brochureDescription: string;
    brochureFeature1: string;
    brochureFeature2: string;
    brochureFeature3: string;
    brochureFeature4: string;
    brochureFeature5: string;
    companyProfileTitle: string;
    companyProfileDescription: string;
    companyProfileFeature1: string;
    companyProfileFeature2: string;
    companyProfileFeature3: string;
    companyProfileFeature4: string;
    companyProfileFeature5: string;
    giftBoxTitle: string;
    giftBoxDescription: string;
    giftBoxFeature1: string;
    giftBoxFeature2: string;
    giftBoxFeature3: string;
    giftBoxFeature4: string;
    giftBoxFeature5: string;
    menuCardsTitle: string;
    menuCardsDescription: string;
    menuCardsFeature1: string;
    menuCardsFeature2: string;
    menuCardsFeature3: string;
    menuCardsFeature4: string;
    menuCardsFeature5: string;
    nfcCardsTitle: string;
    nfcCardsDescription: string;
    nfcCardsFeature1: string;
    nfcCardsFeature2: string;
    nfcCardsFeature3: string;
    nfcCardsFeature4: string;
    nfcCardsFeature5: string;
    signBoardTitle: string;
    signBoardDescription: string;
    signBoardFeature1: string;
    signBoardFeature2: string;
    signBoardFeature3: string;
    signBoardFeature4: string;
    signBoardFeature5: string;
    uniformTitle: string;
    uniformDescription: string;
    uniformFeature1: string;
    uniformFeature2: string;
    uniformFeature3: string;
    uniformFeature4: string;
    uniformFeature5: string;
    visitingCardsTitle: string;
    visitingCardsDescription: string;
    visitingCardsFeature1: string;
    visitingCardsFeature2: string;
    visitingCardsFeature3: string;
    visitingCardsFeature4: string;
    visitingCardsFeature5: string;
    wallCladdingTitle: string;
    wallCladdingDescription: string;
    wallCladdingFeature1: string;
    wallCladdingFeature2: string;
    wallCladdingFeature3: string;
    wallCladdingFeature4: string;
    wallCladdingFeature5: string;
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
    designingServices: string;
    designingDescription: string;
    printingServices: string;
    printingDescription: string;
    advertisingServices: string;
    advertisingDescription: string;
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
    meet: string;
    description: string;
  };
  footer: {
    quickLinks: string;
    home: string;
    about: string;
    services: string;
    contactUs: string;
    copyright: string;
    description: string;
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
  categories: {
    ourProfessional: string;
    servicePackages: string;
    package: string;
    package01Title: string;
    package01Description: string;
    package02Title: string;
    package02Description: string;
    package03Title: string;
    package03Description: string;
    package04Title: string;
    package04Description: string;
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
      companyName: "Ayyan Signage",
      subtitle1: "A 360° Result-Oriented",
      subtitle2: "Digital Marketing Agency",
      promise: "At Ayyan Signage, we promise results.",
      description: "We are a professional Printing & Advertising company, providing innovative signage and advertising solutions that help brands stand out and create a strong visual impact.",
      button: "More About Us",
      ourStory: "Our",
      story: "Story",
      paragraph1: "I am Adnan Tahir, an entrepreneur passionate about creativity, branding, and professional printing solutions. My journey began in 2016 in collaboration with Mr. M. Ashraf Nawaz (Founder, Barani Science College Talagang), whose mentorship played a key role in shaping my professional direction. We started with Ayyan Media Center, providing digital documentation, design, and printing services to students, schools, and local businesses.",
      paragraph2: "Through consistent effort and dedication, I expanded the business in 2018 by installing a Panaflex printing setup in Talagang, transforming the company into Ayyan Printings. With a strong focus on quality signage, panaflex printing, and professional design services, we built a trusted reputation and developed a skilled operational team to serve a growing client base.",
      paragraph3: "In 2024, I moved to Saudi Arabia and launched Ayyan Signage Printing & Advertising, expanding our services into digital marketing, SEO, website development, and complete branding solutions. Today, my vision is to provide businesses with all-in-one advertising and printing services under one platform while maintaining creativity, quality, and customer satisfaction.",
      buildBrand: "Let's build your brand.",
      location: "Ayyan Signage Printing & Advertising — Saudi Arabia",
    },
    visionMission: {
      ourVision: "Our",
      vision: "Vision",
      visionDescription: "To be a leading provider of innovative printing and advertising solutions, recognized for exceptional quality, creativity, and reliability in a competitive market.",
      ourMission: "Our",
      mission: "Mission",
      missionDescription: "We are committed to achieving outstanding results that meet our clients' goals, exceed expectations, and build long-term partnerships through consistent quality and exceptional service.",
    },
    aboutServices: {
      ourAdvertising: "Our Advertising",
      services: "Services",
      metaAds: "Meta Ads",
      metaAdsDescription: "Strategic Facebook and Instagram advertising campaigns that target your ideal audience with precision. We optimize ad spend, create compelling visuals, and continuously A/B test to maximize ROAS and conversion rates for your business.",
      socialMediaHandling: "Social Media Handling",
      socialMediaDescription: "Comprehensive social media management across all major platforms. We create engaging content calendars, interact with your community, analyze performance metrics, and build authentic brand presence that drives engagement and customer loyalty.",
      onlineBranding: "Online Branding",
      onlineBrandingDescription: "Holistic brand identity development that resonates with your target market. From logo design and brand guidelines to voice and messaging strategy, we create cohesive brand experiences that build trust, recognition, and long-term customer relationships.",
      webDevelopment: "Web Development",
      webDescription: "Custom website development with cutting-edge technologies including React, Next.js, and Tailwind CSS. We build lightning-fast, fully responsive, SEO-optimized websites with intuitive user experiences that convert visitors into customers.",
      seoServices: "SEO Services",
      seoDescription: "Data-driven search engine optimization that increases your organic visibility. We perform comprehensive keyword research, technical SEO audits, on-page optimization, and quality link building to rank higher on Google and drive sustainable traffic.",
      videoEditing: "Video Editing",
      videoEditingDescription: "Professional video production and post-production services for brands and businesses. We create cinematic promotional videos, engaging social media clips, product demonstrations, and corporate presentations that capture attention and tell your story.",
      getMoreInfo: "Get More Info",
      whatsappMessage: "Hi, I want more information about",
    },
    productPages: {
      keyFeatures: "Key Features:",
      serviceFeatures: "Service Features:",
      selectDesignStyle: "Select Design Style:",
      selectPreferredService: "Select Preferred Service:",
      selectPrimaryRequirement: "Select Primary Requirement:",
      addToCart: "Add To Cart",
      canIGetMoreInfo: "Can I get more info about the",
      menuOptionsAvailable: "Menu Options Available:",
      selectMenuType: "Select Menu Type:",
      availableOptions: "Available Options:",
      selectPrimarySignageType: "Select Primary Signage Type:",
      bannerTitle: "Premium Banners",
      bannerDescription: "Stand out with high-quality banners for any occasion. From trade shows to outdoor advertising, we deliver durable and eye-catching displays that capture attention and communicate your message effectively.",
      bannerFeature1: "Premium Flex Banners (High GSM)",
      bannerFeature2: "Vinyl Banners (Indoor & Outdoor)",
      bannerFeature3: "One Way Vision (Perforated)",
      bannerFeature4: "Retractable Banner Stands",
      bannerFeature5: "Weather-Resistant Materials",
      brochureTitle: "Brochures & Pamphlets",
      brochureDescription: "Communicate your message effectively with professionally designed marketing materials that capture attention and convey information clearly. Perfect for product showcases, service details, event promotions, and corporate information distribution.",
      brochureFeature1: "Multi-Page Brochures",
      brochureFeature2: "Single-Sheet Flyers",
      brochureFeature3: "Gate-Fold Designs",
      brochureFeature4: "Spot UV Coating",
      brochureFeature5: "Various Paper Stocks",
      companyProfileTitle: "Company Profile Services",
      companyProfileDescription: "Present your business professionally with our comprehensive company profile design services. Ideal for investor meetings, corporate presentations, client pitches, and business development initiatives.",
      companyProfileFeature1: "Professional Layout And Branding",
      companyProfileFeature2: "Print And Digital Versions",
      companyProfileFeature3: "Multi-language Support",
      companyProfileFeature4: "Interactive PDF Options",
      companyProfileFeature5: "Corporate Identity Integration",
      giftBoxTitle: "Corporate Gift Boxes",
      giftBoxDescription: "Impress clients with beautifully packaged corporate gifts. Custom boxes that reflect your brand's quality and attention to detail. Our premium corporate gift boxes are designed to leave a lasting impression and strengthen business relationships through thoughtful, branded gifting solutions.",
      giftBoxFeature1: "Luxury Packaging",
      giftBoxFeature2: "Custom Branding",
      giftBoxFeature3: "Eco-Friendly Options",
      giftBoxFeature4: "Multiple Size Variations",
      giftBoxFeature5: "Premium Finishes",
      menuCardsTitle: "Restaurant Menu Cards",
      menuCardsDescription: "Elevate your dining experience with beautifully designed menus. From QR codes to luxurious hard covers, we create menus that complement your cuisine and enhance customer engagement. Perfect for fine dining, casual bistros, and takeaway services.",
      menuCardsFeature1: "Dine-In Menus",
      menuCardsFeature2: "Takeaway Menus",
      menuCardsFeature3: "Laminated / Hard Cover Menus",
      menuCardsFeature4: "QR And NFC Menu Options",
      menuCardsFeature5: "Waterproof & Tear-Resistant",
      nfcCardsTitle: "NFC Cards",
      nfcCardsDescription: "Step into the future with smart NFC cards. Combine traditional business cards with modern technology for interactive experiences. Instantly share contact details, websites, and social media with a simple tap.",
      nfcCardsFeature1: "PVC NFC Cards",
      nfcCardsFeature2: "Metal NFC Cards (Premium Look)",
      nfcCardsFeature3: "Custom Design And Branding",
      nfcCardsFeature4: "High-Quality Materials",
      nfcCardsFeature5: "Compatible With All NFC Devices",
      signBoardTitle: "3D SignBoards & Raised Letters",
      signBoardDescription: "Premium 3D signboards and raised letters designed to enhance your brand visibility. We offer acrylic, stainless steel, and illuminated options with precision cutting and custom finishing for shops, offices, malls, and commercial buildings.",
      signBoardFeature1: "Acrylic 3D Letters",
      signBoardFeature2: "Stainless Steel / Metal Letters",
      signBoardFeature3: "Front-lit and Non-Lit Options",
      signBoardFeature4: "Precision-Cut Lettering & Signage",
      signBoardFeature5: "Custom Tailored Design & Installation",
      uniformTitle: "T-Shirts & Uniforms",
      uniformDescription: "Brand your team with custom apparel that speaks quality. Perfect for corporate identity, events, and promotional campaigns. We create durable, comfortable uniforms that represent your brand professionally while ensuring team comfort and functionality.",
      uniformFeature1: "Custom T-Shirt Printing",
      uniformFeature2: "Corporate Uniforms",
      uniformFeature3: "Embroidery Services",
      uniformFeature4: "Premium Fabric Options",
      uniformFeature5: "Bulk Order Discounts",
      visitingCardsTitle: "Visiting Cards",
      visitingCardsDescription: "Make a lasting impression with our premium visiting cards. We offer a range of finishes and materials to match your professional identity. Perfect for networking events, client meetings, and business interactions that require professional representation.",
      visitingCardsFeature1: "Simple Cards (Matte & Gloss)",
      visitingCardsFeature2: "UV Spot Cards",
      visitingCardsFeature3: "Embossed Cards",
      visitingCardsFeature4: "Premium Paper Quality",
      visitingCardsFeature5: "Foil Stamping Options",
      wallCladdingTitle: "Wall Cladding Services",
      wallCladdingDescription: "Transform your spaces with premium wall cladding solutions. We provide durable, stylish, and weather-resistant cladding materials perfect for interior and exterior applications. Enhance aesthetics and protection for residential, commercial, and industrial properties.",
      wallCladdingFeature1: "Interior & Exterior Cladding",
      wallCladdingFeature2: "Weather-Resistant Materials",
      wallCladdingFeature3: "Custom Design Options",
      wallCladdingFeature4: "Easy Installation Systems",
      wallCladdingFeature5: "Fire-Retardant Options",
      serviceOptions: "Service Options:",
      premiumOptions: "Premium Options:",
      selectPrimaryCardType: "Select Primary Card Type:",
      claddingBenefits: "Cladding Benefits:",
      selectCladdingInterest: "Select Cladding Interest:",
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
      designingServices: "Designing Services",
      designingDescription: "We create visually compelling and user-focused designs that strengthen your brand identity. Our team delivers modern UI/UX solutions that enhance usability and engagement. Every project is crafted to ensure consistency, creativity, and measurable impact.",
      printingServices: "Printing Services",
      printingDescription: "We provide high-quality printing solutions that elevate your brand's physical presence. From business cards to large-format materials, every print is produced with precision and clarity. Our focus is on durability, color accuracy, and professional finishing.",
      advertisingServices: "Advertising Services",
      advertisingDescription: "We develop strategic advertising campaigns that connect your brand with the right audience. Our data-driven approach maximizes visibility, engagement, and return on investment. From digital to traditional media, we deliver results that drive growth.",
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
      meet: "Meet",
      description: "We are a professional printing and advertising company, delivering creative, precise, and durable signage and branding solutions. From indoor and outdoor signage to promotional materials, we combine modern technology with expert craftsmanship to help brands stand out",
    },
    footer: {
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      services: "Services",
      contactUs: "Contact Us",
      copyright: "Ayyan Signage | Designed & Developed by StackFlow Development Company",
      description: "We are a professional printing and advertising company, delivering creative, precise, and durable signage and branding solutions. From indoor and outdoor signage to promotional materials, we combine modern technology with expert craftsmanship to help brands stand out",
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
    categories: {
      ourProfessional: "Our Professional",
      servicePackages: "Service Packages",
      package: "Package",
      package01Title: "Web Development & SEO",
      package01Description: "Custom web solutions optimized for search engines to drive organic traffic.",
      package02Title: "Digital Marketing",
      package02Description: "Comprehensive social growth across Facebook, Instagram, Snapchat, TikTok, YouTube, Twitter, and LinkedIn.",
      package03Title: "Branding & Signage",
      package03Description: "End-to-end design, high-quality printing, and professional fitting services.",
      package04Title: "Company Profile",
      package04Description: "Essential corporate identity including professional Logo, Letterhead, and Visiting Cards.",
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
      companyName: "أيان سيجناج",
      subtitle1: "وكالة تسويق رقمي",
      subtitle2: "شاملة وموجهة نحو النتائج",
      promise: "في أيان سيجناج، نعدك بالنتائج.",
      description: "نحن شركة طباعة وإعلان محترفة، نقدم حلول لافتات وإعلانات مبتكرة تساعد العلامات التجارية على التميز وخلق تأثير بصري قوي.",
      button: "المزيد عنا",
      ourStory: "قصتنا",
      story: "",
      paragraph1: "أنا عدنان طاهر، رائد أعمال شغوف بالإبداع والعلامات التجارية وحلول الطباعة الاحترافية. بدأت رحلتي في عام 2016 بالتعاون مع السيد م. أشرف نواز (مؤسس كلية باراني للعلوم تلاغانغ)، الذي لعب إرشاده دوراً رئيسياً في تشكيل مساري المهني. بدأنا بمركز أيان للإعلام، حيث قدمنا خدمات التوثيق الرقمي والتصميم والطباعة للطلاب والمدارس والشركات المحلية.",
      paragraph2: "من خلال الجهد المستمر والتفاني، قمت بتوسيع العمل في عام 2018 من خلال تركيب معدات طباعة بانافلكس في تلاغانغ، وتحويل الشركة إلى أيان للطباعة. مع التركيز القوي على اللافتات عالية الجودة وطباعة البانافلكس وخدمات التصميم الاحترافية، بنينا سمعة موثوقة وطورنا فريق عمل ماهر لخدمة قاعدة عملاء متنامية.",
      paragraph3: "في عام 2024، انتقلت إلى المملكة العربية السعودية وأطلقت أيان سيجناج للطباعة والإعلان، موسعاً خدماتنا لتشمل التسويق الرقمي وتحسين محركات البحث وتطوير المواقع الإلكترونية وحلول العلامات التجارية الكاملة. اليوم، رؤيتي هي تزويد الشركات بخدمات إعلانية وطباعة شاملة تحت منصة واحدة مع الحفاظ على الإبداع والجودة ورضا العملاء.",
      buildBrand: "لنبني علامتك التجارية.",
      location: "أيان سيجناج للطباعة والإعلان — المملكة العربية السعودية",
    },
    visionMission: {
      ourVision: "رؤيتنا",
      vision: "",
      visionDescription: "أن نكون مزوداً رائداً لحلول الطباعة والإعلان المبتكرة، معترف بها لجودتها الاستثنائية والإبداع والموثوقية في سوق تنافسي.",
      ourMission: "مهمتنا",
      mission: "",
      missionDescription: "نحن ملتزمون بتحقيق نتائج متميزة تلبي أهداف عملائنا، وتتجاوز التوقعات، وتبني شراكات طويلة الأمد من خلال الجودة المستمرة والخدمة الاستثنائية.",
    },
    aboutServices: {
      ourAdvertising: "خدماتنا الإعلانية",
      services: "",
      metaAds: "إعلانات ميتا",
      metaAdsDescription: "حملات إعلانية استراتيجية على فيسبوك وإنستغرام تستهدف جمهورك المثالي بدقة. نقوم بتحسين الإنفاق الإعلاني، وإنشاء صور مرئية مقنعة، واختبار A/B المستمر لتعظيم العائد على الإنفاق الإعلاني ومعدلات التحويل لعملك.",
      socialMediaHandling: "إدارة وسائل التواصل الاجتماعي",
      socialMediaDescription: "إدارة شاملة لوسائل التواصل الاجتماعي عبر جميع المنصات الرئيسية. نقوم بإنشاء تقويمات محتوى جذابة، والتفاعل مع مجتمعك، وتحليل مقاييس الأداء، وبناء حضور أصيل للعلامة التجارية يدفع التفاعل وولاء العملاء.",
      onlineBranding: "العلامة التجارية الإلكترونية",
      onlineBrandingDescription: "تطوير شامل لهوية العلامة التجارية يتناسب مع السوق المستهدف. من تصميم الشعار وإرشادات العلامة التجارية إلى استراتيجية الصوت والرسائل، نقوم بإنشاء تجارب علامة تجارية متماسكة تبني الثقة والاعتراف والعلاقات طويلة الأمد مع العملاء.",
      webDevelopment: "تطوير المواقع الإلكترونية",
      webDescription: "تطوير مواقع ويب مخصصة بتقنيات متطورة تشمل React و Next.js و Tailwind CSS. نبني مواقع سريعة للغاية، متجاوبة بالكامل، ومحسنة لمحركات البحث مع تجارب مستخدم بديهية تحول الزوار إلى عملاء.",
      seoServices: "خدمات تحسين محركات البحث",
      seoDescription: "تحسين محركات البحث القائم على البيانات الذي يزيد من ظهورك العضوي. نقوم بإجراء بحث شامل عن الكلمات المفتاحية، وتدقيق SEO التقني، والتحسين على الصفحة، وبناء روابط عالية الجودة للحصول على ترتيب أعلى في جوجل وجذب حركة مرور مستدامة.",
      videoEditing: "تحرير الفيديو",
      videoEditingDescription: "خدمات إنتاج الفيديو وما بعد الإنتاج الاحترافية للعلامات التجارية والشركات. نقوم بإنشاء مقاطع فيديو ترويجية سينمائية، ومقاطع وسائل التواصل الاجتماعي الجذابة، وعروض المنتجات، والعروض التقديمية للشركات التي تجذب الانتباه وتروي قصتك.",
      getMoreInfo: "احصل على المزيد من المعلومات",
      whatsappMessage: "مرحباً، أريد المزيد من المعلومات حول",
    },
    productPages: {
      keyFeatures: "الميزات الرئيسية:",
      serviceFeatures: "ميزات الخدمة:",
      selectDesignStyle: "اختر نمط التصميم:",
      selectPreferredService: "اختر الخدمة المفضلة:",
      selectPrimaryRequirement: "اختر المتطلب الأساسي:",
      addToCart: "أضف إلى السلة",
      canIGetMoreInfo: "هل يمكنني الحصول على مزيد من المعلومات حول",
      menuOptionsAvailable: "خيارات القائمة المتاحة:",
      selectMenuType: "اختر نوع القائمة:",
      availableOptions: "الخيارات المتاحة:",
      selectPrimarySignageType: "اختر نوع اللافتة الأساسي:",
      bannerTitle: "لافتات مميزة",
      bannerDescription: "تميز بلافتات عالية الجودة لأي مناسبة. من المعارض التجارية إلى الإعلانات الخارجية، نقدم عروضاً متينة وجذابة تجذب الانتباه وتوصل رسالتك بفعالية.",
      bannerFeature1: "لافتات فليكس مميزة (GSM عالي)",
      bannerFeature2: "لافتات فينيل (داخلية وخارجية)",
      bannerFeature3: "رؤية أحادية الاتجاه (مثقبة)",
      bannerFeature4: "حوامل لافتات قابلة للسحب",
      bannerFeature5: "مواد مقاومة للطقس",
      brochureTitle: "بروشورات ومنشورات",
      brochureDescription: "قم بتوصيل رسالتك بفعالية من خلال مواد تسويقية مصممة بشكل احترافي تجذب الانتباه وتنقل المعلومات بوضوح. مثالية لعرض المنتجات وتفاصيل الخدمات والترويج للفعاليات وتوزيع المعلومات المؤسسية.",
      brochureFeature1: "بروشورات متعددة الصفحات",
      brochureFeature2: "منشورات ورقة واحدة",
      brochureFeature3: "تصاميم قابلة للطي",
      brochureFeature4: "طلاء UV نقطي",
      brochureFeature5: "أنواع ورق متنوعة",
      companyProfileTitle: "خدمات ملف الشركة",
      companyProfileDescription: "قدم عملك بشكل احترافي من خلال خدمات تصميم ملف الشركة الشاملة. مثالي لاجتماعات المستثمرين والعروض التقديمية المؤسسية وعروض العملاء ومبادرات تطوير الأعمال.",
      companyProfileFeature1: "تخطيط وعلامة تجارية احترافية",
      companyProfileFeature2: "نسخ مطبوعة ورقمية",
      companyProfileFeature3: "دعم متعدد اللغات",
      companyProfileFeature4: "خيارات PDF تفاعلية",
      companyProfileFeature5: "تكامل الهوية المؤسسية",
      giftBoxTitle: "صناديق هدايا الشركات",
      giftBoxDescription: "أبهر العملاء بهدايا الشركات المعبأة بشكل جميل. صناديق مخصصة تعكس جودة علامتك التجارية واهتمامك بالتفاصيل. تم تصميم صناديق هدايا الشركات المميزة لدينا لترك انطباع دائم وتعزيز العلاقات التجارية من خلال حلول هدايا مدروسة وذات علامة تجارية.",
      giftBoxFeature1: "تغليف فاخر",
      giftBoxFeature2: "علامة تجارية مخصصة",
      giftBoxFeature3: "خيارات صديقة للبيئة",
      giftBoxFeature4: "أحجام متعددة",
      giftBoxFeature5: "تشطيبات مميزة",
      menuCardsTitle: "بطاقات قوائم المطاعم",
      menuCardsDescription: "ارتقِ بتجربة تناول الطعام من خلال قوائم مصممة بشكل جميل. من رموز QR إلى الأغلفة الفاخرة، نقوم بإنشاء قوائم تكمل مطبخك وتعزز تفاعل العملاء. مثالية للمطاعم الفاخرة والمقاهي غير الرسمية وخدمات الوجبات الجاهزة.",
      menuCardsFeature1: "قوائم تناول الطعام",
      menuCardsFeature2: "قوائم الوجبات الجاهزة",
      menuCardsFeature3: "قوائم مغلفة / غلاف صلب",
      menuCardsFeature4: "خيارات قائمة QR و NFC",
      menuCardsFeature5: "مقاومة للماء ومقاومة للتمزق",
      nfcCardsTitle: "بطاقات NFC",
      nfcCardsDescription: "ادخل إلى المستقبل ببطاقات NFC الذكية. اجمع بين بطاقات العمل التقليدية والتكنولوجيا الحديثة للحصول على تجارب تفاعلية. شارك تفاصيل الاتصال والمواقع الإلكترونية ووسائل التواصل الاجتماعي بنقرة بسيطة.",
      nfcCardsFeature1: "بطاقات NFC من PVC",
      nfcCardsFeature2: "بطاقات NFC معدنية (مظهر مميز)",
      nfcCardsFeature3: "تصميم وعلامة تجارية مخصصة",
      nfcCardsFeature4: "مواد عالية الجودة",
      nfcCardsFeature5: "متوافقة مع جميع أجهزة NFC",
      signBoardTitle: "لوحات ثلاثية الأبعاد وحروف بارزة",
      signBoardDescription: "لوحات ثلاثية الأبعاد مميزة وحروف بارزة مصممة لتعزيز ظهور علامتك التجارية. نقدم خيارات أكريليك وفولاذ مقاوم للصدأ ومضيئة مع قطع دقيق وتشطيب مخصص للمحلات والمكاتب والمراكز التجارية والمباني التجارية.",
      signBoardFeature1: "حروف أكريليك ثلاثية الأبعاد",
      signBoardFeature2: "حروف فولاذ مقاوم للصدأ / معدنية",
      signBoardFeature3: "خيارات مضيئة من الأمام وغير مضيئة",
      signBoardFeature4: "حروف ولافتات مقطوعة بدقة",
      signBoardFeature5: "تصميم وتركيب مخصص",
      uniformTitle: "قمصان وزي موحد",
      uniformDescription: "ضع علامة تجارية على فريقك بملابس مخصصة تتحدث عن الجودة. مثالية للهوية المؤسسية والفعاليات والحملات الترويجية. نقوم بإنشاء زي موحد متين ومريح يمثل علامتك التجارية بشكل احترافي مع ضمان راحة الفريق ووظائفه.",
      uniformFeature1: "طباعة قمصان مخصصة",
      uniformFeature2: "زي موحد للشركات",
      uniformFeature3: "خدمات التطريز",
      uniformFeature4: "خيارات أقمشة مميزة",
      uniformFeature5: "خصومات الطلبات بالجملة",
      visitingCardsTitle: "بطاقات الزيارة",
      visitingCardsDescription: "اترك انطباعاً دائماً ببطاقات الزيارة المميزة لدينا. نقدم مجموعة من التشطيبات والمواد لتتناسب مع هويتك المهنية. مثالية لفعاليات التواصل واجتماعات العملاء والتفاعلات التجارية التي تتطلب تمثيلاً احترافياً.",
      visitingCardsFeature1: "بطاقات بسيطة (مطفي ولامع)",
      visitingCardsFeature2: "بطاقات UV نقطية",
      visitingCardsFeature3: "بطاقات منقوشة",
      visitingCardsFeature4: "جودة ورق مميزة",
      visitingCardsFeature5: "خيارات ختم الرقائق",
      wallCladdingTitle: "خدمات كسوة الجدران",
      wallCladdingDescription: "حول مساحاتك بحلول كسوة جدران مميزة. نقدم مواد كسوة متينة وأنيقة ومقاومة للطقس مثالية للتطبيقات الداخلية والخارجية. عزز الجماليات والحماية للعقارات السكنية والتجارية والصناعية.",
      wallCladdingFeature1: "كسوة داخلية وخارجية",
      wallCladdingFeature2: "مواد مقاومة للطقس",
      wallCladdingFeature3: "خيارات تصميم مخصصة",
      wallCladdingFeature4: "أنظمة تركيب سهلة",
      wallCladdingFeature5: "خيارات مقاومة للحريق",
      serviceOptions: "خيارات الخدمة:",
      premiumOptions: "الخيارات المميزة:",
      selectPrimaryCardType: "اختر نوع البطاقة الأساسي:",
      claddingBenefits: "فوائد الكسوة:",
      selectCladdingInterest: "اختر اهتمام الكسوة:",
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
      designingServices: "خدمات التصميم",
      designingDescription: "نقوم بإنشاء تصاميم جذابة بصرياً ومركزة على المستخدم تعزز هوية علامتك التجارية. يقدم فريقنا حلول UI/UX عصرية تعزز سهولة الاستخدام والتفاعل. يتم صياغة كل مشروع لضمان الاتساق والإبداع والتأثير القابل للقياس.",
      printingServices: "خدمات الطباعة",
      printingDescription: "نقدم حلول طباعة عالية الجودة ترفع من الحضور المادي لعلامتك التجارية. من بطاقات العمل إلى المواد كبيرة الحجم، يتم إنتاج كل طباعة بدقة ووضوح. نركز على المتانة ودقة الألوان والتشطيب الاحترافي.",
      advertisingServices: "خدمات الإعلان",
      advertisingDescription: "نطور حملات إعلانية استراتيجية تربط علامتك التجارية بالجمهور المناسب. نهجنا القائم على البيانات يزيد من الظهور والتفاعل والعائد على الاستثمار. من الوسائط الرقمية إلى التقليدية، نقدم نتائج تدفع النمو.",
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
      meet: "تعرف على",
      description: "نحن شركة طباعة وإعلان محترفة، نقدم حلول لافتات وعلامات تجارية إبداعية ودقيقة ومتينة. من اللافتات الداخلية والخارجية إلى المواد الترويجية، نجمع بين التكنولوجيا الحديثة والحرفية المتخصصة لمساعدة العلامات التجارية على التميز",
    },
    footer: {
      quickLinks: "روابط سريعة",
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      contactUs: "اتصل بنا",
      copyright: "أيان سيجناج | تصميم وتطوير شركة ستاك فلو للتطوير",
      description: "نحن شركة طباعة وإعلان محترفة، نقدم حلول لافتات وعلامات تجارية إبداعية ودقيقة ومتينة. من اللافتات الداخلية والخارجية إلى المواد الترويجية، نجمع بين التكنولوجيا الحديثة والحرفية المتخصصة لمساعدة العلامات التجارية على التميز",
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
    categories: {
      ourProfessional: "باقاتنا الاحترافية",
      servicePackages: "للخدمات",
      package: "الباقة",
      package01Title: "تطوير المواقع وتحسين محركات البحث",
      package01Description: "حلول ويب مخصصة محسّنة لمحركات البحث لجذب الزيارات العضوية.",
      package02Title: "التسويق الرقمي",
      package02Description: "نمو شامل عبر وسائل التواصل الاجتماعي: فيسبوك، إنستغرام، سناب شات، تيك توك، يوتيوب، تويتر، ولينكد إن.",
      package03Title: "العلامة التجارية واللافتات",
      package03Description: "تصميم شامل، طباعة عالية الجودة، وخدمات تركيب احترافية.",
      package04Title: "ملف الشركة",
      package04Description: "الهوية المؤسسية الأساسية تشمل الشعار الاحترافي، الترويسة، وبطاقات الزيارة.",
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
