import React, { useState, useEffect, useCallback } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import gift1 from '../assets/gift1.png';
import gift2 from '../assets/gift2.png';
import gift3 from '../assets/gift3.png';
import gift4 from '../assets/gift4.png';

const GiftBox: React.FC = () => {
  const images = [gift1, gift2, gift3, gift4];
  const [activeImage, setActiveImage] = useState<number>(0);
  
  const product = {
    title: "Corporate Gift Boxes",
    description: "Impress clients with beautifully packaged corporate gifts. Custom boxes that reflect your brand's quality and attention to detail. Our premium corporate gift boxes are designed to leave a lasting impression and strengthen business relationships through thoughtful, branded gifting solutions.",
    features: [
      "Luxury Packaging",
      "Custom Branding",
      "Eco-Friendly Options",
      "Multiple Size Variations",
      "Premium Finishes"
    ]
  };

  const nextSlide = useCallback(() => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleWhatsAppClick = (): void => {
    const message = `Hi! I'm interested in designing custom corporate gift boxes. Can you provide more information about: 
1. Available customization options
2. Pricing for bulk orders
3. Sample availability
4. Production timeline
5. Minimum order quantity`;
    
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
              alt="Corporate Gift Box"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              key={activeImage}
              loading="lazy"
            />
          </div>

          {/* Thumbnail Carousel */}
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
                aria-label={`View gift box image ${index + 1}`}
              >
                <img 
                  src={img} 
                  alt={`Gift Box ${index + 1}`} 
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
              <h3 className="text-lg md:text-xl font-semibold text-white !my-3 md:!my-4 font-[poppins] ">
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

          {/* Action Buttons */}
          <div className="space-y-4 !pt-4 md:!pt-6 font-[poppins]">
            <button 
              onClick={handleWhatsAppClick}
              className="w-full max-w-md !mx-auto md:!mx-0 bg-[#8E0808] hover:bg-[#7A0707] text-white !py-3 md:!py-4 rounded-full shadow-xl transform active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
            >
              <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg md:text-xl !ml-2">Add To Cart</span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default GiftBox;