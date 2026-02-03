import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Trust = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const brandRefs = useRef<(HTMLDivElement | null)[]>([]);

  const brands = [
    { name: "Stars Smiles", font: "'Planet Kosmos', Impact, sans-serif" },
    { name: "Marten king", font: "'Vermin Vibes', sans-serif" },
    { name: "Green Future", font: "'Anarchy', serif" },
    { name: "Almarai", font: "'Iron Maiden', sans-serif" },
    { name: "RTCO", font: "'BN Machine', monospace" },
    { name: "Ashraf HVAC", font: "'Goth Chic', cursive" },
    { name: "Al Shaheq", font: "'Y2K Neophyte', sans-serif" },
    { name: "DCP", font: "'Metal Lord', fantasy" }
  ];

  const duplicatedBrands = [...brands, ...brands];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, 
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Continuous Scroll
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth / 2;
        gsap.to(scrollContainerRef.current, {
          x: -scrollWidth,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % scrollWidth)
          }
        });
      }

      // Hover Listeners
      brandRefs.current.forEach((brandRef) => {
        if (brandRef) {
          const brandSpan = brandRef.querySelector('span');
          brandRef.addEventListener('mouseenter', () => {
            gsap.to(brandSpan, { scale: 1.1, y: -5, duration: 0.3 });
            gsap.to(brandRef, { backgroundColor: "rgba(157, 10, 10, 0.1)", duration: 0.3 });
          });
          brandRef.addEventListener('mouseleave', () => {
            gsap.to(brandSpan, { scale: 1, y: 0, duration: 0.3 });
            gsap.to(brandRef, { backgroundColor: "transparent", duration: 0.3 });
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    /* The Fix: Added 'flex flex-col justify-center' to vertically center all content within 500px */
    <div ref={containerRef} className="w-full !py-12 md:!py-24 overflow-hidden md:min-h-[500px] flex flex-col justify-center relative bg-black">
      
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
            Brands That <span className="text-red-600">Trust Us</span>
          </h2>
      </div>
      
      <div className="relative overflow-hidden w-full">
        {/* --- SHADOW OVERLAYS (Fading into Black) --- */}
        <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#E7000B] via-[#E7000B]/80 to-transparent z-20 pointer-events-none blur-xl"></div>
        <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#E7000B] via-[#E7000B]/80 to-transparent z-20 pointer-events-none blur-xl"></div>
        
        {/* Subtle Red Inner Glow */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-red-900/20 blur-xl to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-red-900/20 blur-xl to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollContainerRef}
          className="flex items-center gap-16 md:gap-24 will-change-transform py-4" 
          style={{ width: 'max-content' }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              ref={el => brandRefs.current[index] = el}
              className="flex items-center justify-center min-w-[220px] md:min-w-[280px] h-32 px-12 cursor-pointer rounded-lg transition-all duration-300"
            >
              <span 
                className="text-gray-400 font-bold text-2xl md:text-4xl tracking-tighter uppercase hover:text-white hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-500 relative block text-center whitespace-nowrap"
                style={{ fontFamily: brand.font }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-600/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Trust; 