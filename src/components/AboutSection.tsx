import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLogo from "../assets/AboutLogo.png";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate title with stagger effect
    if (titleRef.current) {
      gsap.set(titleRef.current, { y: 50, opacity: 0 });
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      });
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.set(subtitleRef.current.children, { y: 30, opacity: 0 });
      tl.to(subtitleRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.5");
    }

    // Animate text content
    if (textRef.current) {
      gsap.set(textRef.current.children, { y: 20, opacity: 0 });
      tl.to(textRef.current.children, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4");
    }

    // Animate button
    if (buttonRef.current) {
      gsap.set(buttonRef.current, { scale: 0.8, opacity: 0 });
      tl.to(buttonRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.2");
    }

    // Animate image with rotation and scale
    if (imageRef.current) {
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0, rotation: -10 });
      tl.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=0.8");

      // Continuous floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full !py-20 bg-black text-white !px-6 md:!px-20 h-auto relative overflow-hidden"
      style={{
        fontFamily: 'Ginto - 400FamilyGinto, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        fontWeight: 400,
        color: 'rgb(229, 235, 250)',
        fontSize: '12px',
        lineHeight: '15px'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#D61921] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Top Header Section */}
      <div className="text-center !mb-5 md:!mb-20 relative z-10">
        <h1 
          ref={titleRef}
          className="text-3xl md:text-5xl text-[#D5171C] font-bold text-shadow-red gradient-text hover:scale-105 transition-transform duration-300 cursor-default"
        >
          Meet Ayyan SignAge
        </h1>
      </div>

      {/* Main Content Wrapper - Centered Flex Container */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row !items-center !justify-center gap-16 md:gap-24 md:!mt-15 relative z-10">
        
        {/* Left: Text Content */}
        <div className="text-center md:text-left !space-y-8">
          <h2 
            ref={subtitleRef}
            className="text-3xl md:text-4xl font-bold leading-[1.3] text-shadow-lg"
          >
            <span className="block">A 360° Result-Oriented</span>
            <span className="block text-[#D5171C] opacity-80 gradient-text">Digital Marketing Agency</span>
          </h2>

          <div ref={textRef} className="!space-y-4 text-gray-300 max-w-xl">
            <p className="text-xl font-medium hidden md:block text-shadow-sm">
              At Ayyan SignAge, we promise results.
            </p>
            <p className="leading-relaxed text-lg text-shadow-sm">
              We are a professional Printing & Advertising company, providing
              innovative signage and advertising solutions that help brands stand out
              and create a strong visual impact.
            </p>
          </div>

          <motion.button 
            ref={buttonRef}
            className="!mt-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold !px-12 !py-4 rounded-full shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover-lift"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          >
            More About Us
          </motion.button>
        </div>

        {/* Right: Image/Logo */}
        <div ref={imageRef} className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D61921]/20 to-transparent rounded-full blur-2xl"></div>
          <img
            src={AboutLogo}
            alt="Ayyan SignAge Logo"
            className="w-full w-auto h-auto object-contain relative z-10 hover:scale-110 transition-transform duration-500 cursor-pointer"
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                rotation: 5,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;