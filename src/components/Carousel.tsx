import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useLanguage } from '../contexts/LanguageContext';
import mockup1 from '../assets/mockup1.png'
import mockup2 from '../assets/mockup2.png'
import mockup3 from '../assets/mockup3.png'
import mockup4 from '../assets/mockup4.png'
import mockup5 from '../assets/mockup5.png'
import mockup6 from '../assets/mockup6.png'
import mockup7 from '../assets/mockup7.png'
import mockup8 from '../assets/mockup8.png'
import mockup9 from '../assets/mockup9.png'
import mockup10 from '../assets/mockup10.png'

const images = [
  { src: mockup1, title: "Brand Identity Design", path: "/brand-identity" },
  { src: mockup2, title: "Company Profile Designs", path: "/services/company-profile" },
  { src: mockup3, title: "Billboard Advertising", path: "/billboard" },
  { src: mockup4, title: "Social Media Campaign", path: "/social-media" },
  { src: mockup5, title: "T-shirts & Uniform designs", path: "/apparel" },
  { src: mockup6, title: "Product Branding", path: "/product-branding" },
  { src: mockup7, title: "Corporate Stationery", path: "/stationery" },
  { src: mockup8, title: "Gift Boxes Designs", path: "/services/gift-boxes-designs" },
  { src: mockup9, title: "Outdoor Signage", path: "/signage" },
  { src: mockup10, title: "Banner Design", path: "/services/banner-designs" },
];

const Carousel = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(7);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getStyles = (index: number) => {
    const total = images.length;
    const angle = ((index - activeIndex) * 360) / total;

    const isMobile = windowWidth < 768;
    const radius = isMobile ? 220 : 380;

    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;

    const rotationY = -angle;

    const distanceFromCenter = Math.abs(index - activeIndex);
    const normalizedDistance = Math.min(
      distanceFromCenter,
      total - distanceFromCenter
    );

    let scale = 1;
    if (normalizedDistance === 0) scale = isMobile ? 1 : 1.1;
    else if (normalizedDistance === 1) scale = isMobile ? 0.85 : 0.95;
    else if (normalizedDistance === 2) scale = isMobile ? 0.75 : 0.85;
    else scale = isMobile ? 0.65 : 0.75;

    let opacity = 1;
    if (normalizedDistance === 0) opacity = 1;
    else if (normalizedDistance === 1) opacity = 0.9;
    else if (normalizedDistance === 2) opacity = 0.7;
    else opacity = 0.4;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotationY}deg) scale(${scale})`,
      zIndex: 100 - normalizedDistance,
      opacity: opacity,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden !pb-8 md:!py-8 ">
      {/* Header Section */}
      <div className="flex flex-col items-center !mb-8 md:!mb-12 z-10 !px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90 max-w-4xl">
          {t.carousel.conceptTo}
          <span className="text-[#9D0A0A] !ml-2">
            {t.carousel.reality}
          </span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="relative flex items-center justify-center w-full h-[400px] md:h-[500px] lg:h-[600px]"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Center Glow */}
        <div className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-red-600/20 to-blue-600/20 blur-3xl"></div>

        {images.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="absolute transition-all duration-700 ease-in-out cursor-pointer group"
            style={{
              width: windowWidth < 768 ? "180px" : "240px",
              height: windowWidth < 768 ? "270px" : "360px",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#fff",
              boxShadow:
                index === activeIndex
                  ? "0 20px 60px -10px rgba(255,255,255,0.2), 0 0 30px rgba(255,0,0,0.3)"
                  : "0 10px 30px -5px rgba(0,0,0,0.4)",
              border:
                index === activeIndex
                  ? "2px solid rgba(255,255,255,0.3)"
                  : "1px solid rgba(255,255,255,0.1)",
              ...getStyles(index),
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none"
              draggable="false"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Title at Bottom with Link and Icon */}
            <Link 
              to={item.path}
              className="absolute bottom-2 left-0 w-full bg-black backdrop-blur-sm text-white text-sm md:text-md md:font-semibold text-center !p-2 shadow-md shadow-[#9D0A0A]/55 font-[poppins] hover:bg-[#9D0A0A]/40 transition-all flex items-center justify-center gap-2 group/title"
              onClick={(e) => e.stopPropagation()}
            >
              {item.title} 
              <HiOutlineArrowNarrowRight className="text-white text-lg md:text-xl font-bold transition-transform duration-300 group-hover/title:translate-x-1" />
            </Link>

            {/* Active Indicator */}
            {index === activeIndex && (
              <div className="absolute top-2 right-2 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default Carousel;