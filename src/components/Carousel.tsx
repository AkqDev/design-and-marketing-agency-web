import { useState, useEffect } from 'react';

const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1526170315873-3a9d66ee7a94", 
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1526170315873-3a9d66ee7a94",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(7);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getStyles = (index: number) => {
    const total = images.length;
    const angle = ((index - activeIndex) * 360) / total;
    
    // Responsive radius based on screen size
    const isMobile = windowWidth < 768;
    const radius = isMobile ? 200 : 350; // Smaller radius for mobile
    
    // Calculate position on circle
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    
    // Calculate rotation for each image to face center
    const rotationY = -angle;
    
    // Scale based on distance from center (active item)
    const distanceFromCenter = Math.abs(index - activeIndex);
    const scale = distanceFromCenter > 3 ? (isMobile ? 0.7 : 0.85) : (isMobile ? 0.8 : 0.95);
    const opacity = distanceFromCenter > 4 ? 0.3 : 0.8;
    
    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotationY}deg) scale(${scale})`,
      zIndex: 100 - Math.abs(index - activeIndex),
      opacity: opacity,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden py-8 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-8 md:mb-12 z-10 px-4">
        <div className="flex items-center gap-2 bg-[#FFF1F1] text-[#E7000B] px-4 md:px-6 py-2 rounded-full border border-[#FFE4E4] mb-6 md:mb-8">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] font-[poppins]">Brand Development</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-center tracking-tighter uppercase italic text-white/90 max-w-4xl">
          Concept To<span className="text-red-600"> Reality.</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative flex items-center justify-center w-full h-[400px] md:h-[500px] lg:h-[600px]"
        style={{ 
          perspective: "1500px", 
          transformStyle: "preserve-3d" 
        }}
      >
        {/* Center Circle Glow Effect */}
        <div className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-red-600/20 to-blue-600/20 blur-3xl"></div>
        
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="absolute transition-all duration-1000 ease-out cursor-pointer group"
            style={{
              width: windowWidth < 768 ? "180px" : "240px",
              height: windowWidth < 768 ? "270px" : "360px",
              borderRadius: "16px", 
              overflow: "hidden",
              background: "#fff",
              boxShadow: index === activeIndex 
                ? "0 20px 60px -10px rgba(255,255,255,0.2), 0 0 30px rgba(255,0,0,0.3)" 
                : "0 10px 30px -5px rgba(0,0,0,0.4)",
              border: index === activeIndex 
                ? "2px solid rgba(255,255,255,0.3)" 
                : "1px solid rgba(255,255,255,0.1)",
              ...getStyles(index),
            }}
          >
            <img 
              src={src} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none"
              draggable="false"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Active indicator */}
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