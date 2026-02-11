import React, { useState, useEffect, useCallback } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa';
import company1 from '../assets/company1.png';
import company2 from '../assets/company2.png';
import company3 from '../assets/company3.png';
import company4 from '../assets/company4.png';

const CompanyProfile: React.FC = () => {
  const images = [company1, company2, company3, company4];
  const [activeImage, setActiveImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  
  const product = {
    title: "Company Profile Services",
    description: "Present your business professionally with our comprehensive company profile design services. Ideal for investor meetings, corporate presentations, client pitches, and business development initiatives. We create compelling profiles that showcase your company's strengths and achievements.",
    features: [
      "Professional Layout And Branding",
      "Print And Digital Versions",
      "Multi-language Support",
      "Interactive PDF Options",
      "Corporate Identity Integration"
    ]
  };

  const nextSlide = useCallback(() => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleWhatsAppClick = (): void => {
    const message = `Hi! I'm interested in company profile design services. Can you provide more information about:

1. Type Required: [Print/Digital/Both]
2. Number of Pages:
3. Languages Needed:
4. Timeline Requirements:
5. Corporate Identity Guidelines: [Have Existing/Need Development]
6. Interactive Features Required:
7. Budget Range:

Please provide details about your company profile design process, pricing, sample portfolios, timeline for ${quantity} profile(s), and any customization options available.`;

    const phoneNumber = "966563203251";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
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
          {/* Main Image Container - Responsive */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center group w-full max-w-[500px] mx-auto">
            
            {/* Navigation Arrows - Always Visible */}
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
              alt="Company Profile Design"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              key={activeImage}
              loading="lazy"
            />
          </div>

          {/* Thumbnail Carousel */}
          <div className="flex gap-3 md:gap-4 justify-center overflow-x-auto !py-2 !px-4 md:hidden">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden transition-all ${
                  activeImage === index 
                    ? 'border-[#8E0808] ring-2 ring-[#8E0808]/20' 
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                aria-label={`View company profile design ${index + 1}`}
              >
                <img 
                  src={img} 
                  alt={`Company Profile Design ${index + 1}`} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info Container */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 !py-4 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#7A0707] leading-tight font-[poppins]">
                {product.title}
              </h1>
            </div>

            <p className="text-sm md:text-base lg:text-md text-gray-100 leading-relaxed max-w-2xl !mx-auto md:!mx-0 !my-2 font-[poppins]">
              {product.description}
            </p>

            {/* Features List */}
            <div className="!pt-2 hidden md:block">
              <h3 className="text-lg md:text-xl font-semibold text-white !my-3 md:!my-4 font-[poppins]">
                Key Features:
              </h3>
              <ul className="space-y-2 md:space-y-3 max-w-md !mx-auto md:!mx-0">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center !space-x-3">
                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#8E0808] rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-100 font-[poppins]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-4 !pt-4 font-[poppins]">
            <div className="flex items-center justify-center md:justify-start space-x-6">
              <div className="flex flex-col items-center">
                <span className="text-gray-300 !mb-2 text-sm md:text-base">Select Quantity</span>
                <div className="flex items-center space-x-4 bg-[#2A2A2A] rounded-full !p-2">
                  <button 
                    onClick={decreaseQuantity}
                    className="!p-2 rounded-full bg-[#8E0808] hover:bg-[#7A0707] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-xl font-bold text-white min-w-[80px] text-center">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="!p-2 rounded-full bg-[#8E0808] hover:bg-[#7A0707] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="space-y-4 !pt-6">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full max-w-md !mx-auto md:!mx-0 bg-[#8E0808] hover:bg-[#7A0707] text-white !py-3 md:!py-4 rounded-full shadow-xl transform active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
              >
                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                <span className="text-lg md:text-xl !ml-2">Design {quantity} Company Profile{quantity > 1 ? 's' : ''}</span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CompanyProfile;