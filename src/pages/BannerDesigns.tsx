import React, { useState, useEffect, useCallback } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';

const BannerDesigns: React.FC = () => {
  const images = [banner2, banner1, banner3, banner4];
  const [activeImage, setActiveImage] = useState<number>(0);
  
  const product = {
    title: "Premium Banners",
    description: "Stand out with high-quality banners for any occasion. From trade shows to outdoor advertising, we deliver durable and eye-catching displays that capture attention and communicate your message effectively.",
    features: [
      "Premium Flex Banners (High GSM)",
      "Vinyl Banners (Indoor & Outdoor)",
      "One Way Vision (Perforated)",
      "Retractable Banner Stands",
      "Weather-Resistant Materials"
    ]
  };

  // State for the selected feature from the dropdown
  const [selectedFeature, setSelectedFeature] = useState<string>(product.features[0]);

  const nextSlide = useCallback(() => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleWhatsAppClick = (): void => {
    // Clean message containing only the selected feature
    const message = `Can I get more info about the premium banner: ${selectedFeature}?`;
    
    const phoneNumber = "966563203251";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center !p-4 md:!p-6 font-sans text-gray-900 !my-12">
      
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-[#1A1A1A] rounded-3xl !p-6 md:!p-8 shadow-xl">
        
        {/* Left Side: Image Gallery */}
        <div className="space-y-6">
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center group w-full max-w-[500px] mx-auto">
            
            <button 
              onClick={prevSlide} 
              className="absolute left-2 md:left-4 !p-2 md:!p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all z-20 opacity-100"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute right-2 md:right-4 !p-2 md:!p-3 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all z-20 opacity-100"
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <img 
              src={images[activeImage]} 
              alt="Premium Banner Design"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              key={activeImage}
              loading="lazy"
            />
          </div>

          <div className="flex gap-3 md:gap-4 justify-center overflow-x-auto !py-2 !px-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden transition-all ${
                  activeImage === index 
                    ? 'border-[#8E0808] ring-2 ring-[#8E0808]/20' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 !py-4 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#7A0707] font-[poppins]">
              {product.title}
            </h1>

            <p className="text-sm md:text-base text-gray-100 leading-relaxed font-[poppins]">
              {product.description}
            </p>

            {/* RESTORED FEATURES LIST DISPLAY */}
            <div className="!pt-2 hidden md:block">
              <h3 className="text-lg md:text-xl font-semibold text-white !my-3 font-[poppins]">
                Key Features:
              </h3>
              <ul className="space-y-2 max-w-md !mx-auto md:!mx-0">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center !space-x-3">
                    <div className="w-1.5 h-1.5 bg-[#8E0808] rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-100 font-[poppins]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SELECTION DROPDOWN */}
            <div className="space-y-3 !pt-4">
              <label htmlFor="feature-select" className="block text-gray-300 text-sm md:text-base font-[poppins]">
                Select Preferred Service:
              </label>
              <select 
                id="feature-select"
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
                className="w-full max-w-md bg-[#2A2A2A] text-white border border-gray-700 rounded-lg !p-3 focus:ring-2 focus:ring-[#8E0808] focus:outline-none font-[poppins] cursor-pointer"
              >
                {product.features.map((feature, index) => (
                  <option key={index} value={feature}>
                    {feature}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="!pt-6">
            <button 
              onClick={handleWhatsAppClick}
              className="w-full max-w-md !mx-auto md:!mx-0 bg-[#8E0808] hover:bg-[#7A0707] text-white !py-3 md:!py-4 rounded-full shadow-xl transform active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl font-semibold !ml-2 font-[poppins]">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDesigns;