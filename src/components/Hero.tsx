import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import herovideo from '../assets/herovideo.mp4';
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const WHATSAPP_LINK = "https://wa.me/966563203251";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // GSAP Timeline for entrance animations
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate background elements
    if (backgroundRef.current && !isMobile) {
      gsap.set(".bg-blur", { scale: 0, opacity: 0 });
      tl.to(".bg-blur", {
        scale: 1,
        opacity: 0.1,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out"
      });
    }

    // Animate text elements with GSAP
    if (titleRef.current) {
      gsap.set(titleRef.current.children, { y: 100, opacity: 0 });
      tl.to(titleRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=1.5");
    }

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { y: 50, opacity: 0 });
      tl.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8");
    }

    if (buttonRef.current) {
      gsap.set(buttonRef.current, { y: 30, opacity: 0, scale: 0.8 });
      tl.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.5");
    }

    // Continuous floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  return (
    <div ref={heroRef} className="relative h-[80vh] md:min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern for Desktop */}
      {!isMobile && (
        <div ref={backgroundRef}>
          <div className="absolute inset-0 opacity-10">
            <div className="bg-blur floating-element absolute top-20 left-10 w-72 h-72 bg-[#9D0A0A] rounded-full blur-3xl"></div>
            <div className="bg-blur floating-element absolute bottom-20 right-10 w-96 h-96 bg-[#9D0A0A] rounded-full blur-3xl"></div>
            <div className="bg-blur floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl opacity-5"></div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,25,33,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,25,33,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
      )}

      {/* Video Background for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={herovideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent"></div>
        </div>
      )}

      <div className="relative z-10 flex items-center justify-center min-h-[80vh] md:min-h-screen px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Heading with Enhanced Shadows */}
          <h1
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-logo font-bold text-white mb-6 leading-tight"
          >
            <span className="block text-shadow-xl hover:text-shadow-red transition-all duration-500">
              Transform Your
            </span>
            <span className="block text-[#9D0A0A] text-shadow-red gradient-text">
              Brand Vision
            </span>
          </h1>

          {/* Subtitle with Shadow */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 font-nav max-w-3xl mx-auto mb-12 leading-relaxed text-shadow-md !my-3 !px-3"
          >
            Create stunning, professional signage that captures attention and drives results. 
            From concept to installation, we bring your brand to life with cutting-edge design and premium materials.
          </p>

          {/* CTA Buttons with Enhanced Hover Effects */}
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#9D0A0A] text-white !px-8 !py-4 rounded-full font-button text-base hover:bg-black hover:border hover:border-[#9D0A0A] hover:text-[#9D0A0A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 !mt-3 hover-lift animate-pulse-glow"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              Get Free Quote
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;