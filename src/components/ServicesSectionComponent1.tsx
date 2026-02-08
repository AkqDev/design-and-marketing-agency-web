import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all your images (keeping your existing imports)
import visitingcard1 from '../assets/visitingcard1.png';
import visitingcard2 from '../assets/visitingcard2.png';
import visitingcard3 from '../assets/visitingcard3.png';
import visitingcard4 from '../assets/visitingcard4.png';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.png';
import menu4 from '../assets/menu4.png';
import uniform1 from '../assets/uniform1.png';
import uniform2 from '../assets/uniform2.png';
import uniform3 from '../assets/uniform3.png';
import uniform4 from '../assets/uniform4.png';
import company1 from '../assets/company1.png';
import company2 from '../assets/company2.png';
import company3 from '../assets/company3.png';
import company4 from '../assets/company4.png';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import nfc1 from '../assets/nfc1.png';
import nfc2 from '../assets/nfc2.png';
import nfc3 from '../assets/nfc3.png';
import nfc4 from '../assets/nfc4.png';
import gift1 from '../assets/gift1.png';
import gift2 from '../assets/gift2.png';
import gift3 from '../assets/gift3.png';
import gift4 from '../assets/gift4.png';
import broucher1 from '../assets/broucher1.png';
import broucher2 from '../assets/broucher2.png';
import broucher3 from '../assets/broucher3.png';
import broucher4 from '../assets/broucher4.png';

const ServicesSectionComponent1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Company Profile Services",
      description: "Present your business professionally with our comprehensive company profile design services. Ideal for investor meetings and corporate presentations.",
      features: [
        "Professional Layout And Branding",
        "Print And Digital Versions",
        "Multi-language Support",
        "Interactive PDF Options",
        "Corporate Identity Integration"
      ],
      images: [company1, company2, company3, company4]
    },
    {
      id: 2,
      title: "Restaurant Menu Cards",
      description: "Enhance your dining experience with beautifully designed menus. From QR codes to luxurious hard covers, we create menus that complement your cuisine.",
      features: [
        "Dine-In Menus",
        "Takeaway Menus",
        "Laminated / Hard Cover Menus",
        "QR And NFC Menu Options",
        "Waterproof & Tear-Resistant"
      ],
      images: [menu1, menu2, menu3, menu4]
    },
    {
      id: 3,
      title: "T-Shirts & Uniforms",
      description: "Brand your team with custom apparel that speaks quality. Perfect for corporate identity, events, and promotional campaigns.",
      features: [
        "Custom T-Shirt Printing",
        "Corporate Uniforms",
        "Embroidery Services",
        "Premium Fabric Options",
        "Bulk Order Discounts"
      ],
      images: [uniform1, uniform2, uniform3, uniform4]
    },
    {
      id: 4,
      title: "Visiting Cards",
      description: "Make a lasting impression with our premium visiting cards. We offer a range of finishes and materials to match your professional identity.",
      features: [
        "Simple Cards (Matte And Gloss Finish)",
        "UV Spot Cards",
        "Embossed Cards",
        "Premium Paper Quality For Sharp Prints",
        "Foil Stamping Options"
      ],
      images: [visitingcard1, visitingcard2, visitingcard3, visitingcard4]
    },
    {
      id: 5,
      title: "Premium Banners",
      description: "Stand out with high-quality banners for any occasion. From trade shows to outdoor advertising, we deliver durable and eye-catching displays.",
      features: [
        "Premium Flex Banners (High GSM)",
        "Vinyl Banners (Indoor & Outdoor)",
        "One Way Vision (Perforated)",
        "Retractable Banner Stands",
        "Weather-Resistant Materials"
      ],
      images: [banner1, banner2, banner3, banner4]
    },
    {
      id: 6,
      title: "NFC Cards",
      description: "Step into the future with smart NFC cards. Combine traditional business cards with modern technology for interactive experiences.",
      features: [
        "PVC NFC Cards",
        "Metal NFC Cards (Premium Look)",
        "Custom Design And Branding",
        "High-Quality Materials",
        "Compatible With All NFC Devices"
      ],
      images: [nfc1, nfc2, nfc3, nfc4]
    },
    {
      id: 7,
      title: "Corporate Gift Boxes",
      description: "Impress clients with beautifully packaged corporate gifts. Custom boxes that reflect your brand's quality and attention to detail.",
      features: [
        "Luxury Packaging",
        "Custom Branding",
        "Eco-Friendly Options",
        "Multiple Size Variations",
        "Premium Finishes"
      ],
      images: [gift1, gift2, gift3, gift4]
    },
    {
      id: 8,
      title: "Brochures & Pamphlets",
      description: "Communicate your message effectively with professionally designed marketing materials that capture attention and convey information clearly.",
      features: [
        "Multi-Page Brochures",
        "Single-Sheet Flyers",
        "Gate-Fold Designs",
        "Spot UV Coating",
        "Various Paper Stocks"
      ],
      images: [broucher1, broucher2, broucher3, broucher4]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = window.setInterval(() => { // Use window.setInterval
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current !== null) {
        window.clearInterval(autoPlayRef.current); // Use window.clearInterval
      }
    };
  }, [isAutoPlaying, currentSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current !== null) {
      window.clearInterval(autoPlayRef.current); // Use window.clearInterval
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black !py-12 !px-4 flex justify-center items-center">
      <div className="w-full">
        {/* Heading Section */}
        <div className="text-center !mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic !mb-4">
            <span className="text-white">
              Our
            </span>
            <span className="text-[#9D0A0A] !ml-2 drop-shadow-[0_2px_4px_rgba(157,10,10,0.5)]">
              Services
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl !mx-auto text-center">
            Professional advertising and printing solutions for businesses of all sizes. 
            From concept to completion, we deliver exceptional quality and innovative designs.
          </p>
        </div>

        {/* Main Carousel Container */}
        <div 
          className="max-w-[1150px] !mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-[#9D0A0A]/90 hover:bg-[#9D0A0A] text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(157,10,10,0.6)]"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-[#9D0A0A]/90 hover:bg-[#9D0A0A] text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(157,10,10,0.6)]"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel Slide */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500">
            <div className="!p-6 md:!p-10">
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-[#9D0A0A] !mb-5 drop-shadow-[0_2px_4px_rgba(157,10,10,0.3)] font-[poppins] italic">
                      {services[currentSlide].title}
                    </h3>
                    <div className="h-1 w-full bg-gradient-to-r from-[#9D0A0A] to-red-600 rounded-full !mb-4"></div>
                  </div>
                  
                  <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
                    {services[currentSlide].description}
                  </p>
                  
                  <ul className="space-y-3 !mt-7">
                    {services[currentSlide].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#9D0A0A] !mr-3 !mt-1">✓</span>
                        <span className="text-gray-300 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Grid - All images equal size */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {services[currentSlide].images.map((img, index) => (
                      <div 
                        key={index}
                        className="relative overflow-hidden rounded-2xl transition-all duration-500 h-48 md:h-65"
                      >
                        <img
                          src={img}
                          alt={`${services[currentSlide].title} ${index + 1}`}
                          className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicator */}
            <div className="!px-6 !pb-6">
              <div className="flex items-center justify-end text-gray-300">
                <div className="text-sm">
                  <span className="text-[#9D0A0A] font-bold">{currentSlide + 1}</span>
                  <span className="!mx-2">/</span>
                  <span>{services.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 !mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#9D0A0A] w-8'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionComponent1;