import React, { useState, useEffect } from 'react';

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
    const radius = 500; // Radius of the circle
    
    // Calculate position on circle
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius;
    
    // Calculate rotation for each image to face center
    const rotationY = -angle;
    
    // Scale based on distance from center (active item)
    const distanceFromCenter = Math.abs(index - activeIndex);
    const scale = distanceFromCenter > 3 ? 0.85 : 0.95;
    const opacity = distanceFromCenter > 4 ? 0.3 : 0.8;
    
    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotationY}deg) scale(${scale})`,
      zIndex: 100 - Math.abs(index - activeIndex),
      opacity: opacity,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans overflow-hidden !py-12 md:!py-22">
      {/* Header Section */}
      <div className="flex flex-col items-center !mb-16 z-10">
        <div className="flex items-center gap-2 bg-[#FFF1F1] text-[#E7000B] !px-6 !py-2 rounded-full border border-[#FFE4E4] !mb-8">
          <span className="text-sm font-bold tracking-[0.2em] font-[poppins]">Brand Development</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-center tracking-tighter uppercase italic text-white/90">
          Concept To<span className="text-red-600"> Reality.</span>
        </h2>
      </div>

    
      {/* Carousel Container */}
      <div 
        className="relative flex items-center justify-center w-full h-[700px]"
        style={{ 
          perspective: "2000px", 
          transformStyle: "preserve-3d" 
        }}
      >
        {/* Center Circle Glow Effect */}
        <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-red-600/20 to-blue-600/20 blur-3xl"></div>
        
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="absolute transition-all duration-1000 ease-out cursor-pointer group"
            style={{
              width: "280px",
              height: "420px",
              borderRadius: "24px", 
              overflow: "hidden",
              background: "#fff",
              boxShadow: index === activeIndex 
                ? "0 35px 80px -15px rgba(255,255,255,0.2), 0 0 40px rgba(255,0,0,0.3)" 
                : "0 15px 40px -10px rgba(0,0,0,0.4)",
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
              <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default Carousel;