import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutLogo from '../assets/AboutLogo.png';
import VisionMission from '../components/Vision';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation - simple fade in
      gsap.fromTo(imageRef.current, 
        { 
          y: 50, 
          opacity: 0, 
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Title animation with stagger effect
      gsap.fromTo(titleRef.current, 
        { 
          y: 80, 
          opacity: 0,
          scale: 0.9
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content paragraphs animation
      const paragraphs = contentRef.current?.querySelectorAll('p');
      if (paragraphs) {
        gsap.fromTo(paragraphs, 
          { 
            y: 60, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            delay: 0.6,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Accent line animation
      gsap.fromTo(accentLineRef.current, 
        { 
          scaleX: 0, 
          opacity: 0 
        },
        { 
          scaleX: 1, 
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 1,
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: accentLineRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
  <div>
    <motion.section 
      ref={containerRef}
      className="bg-[#000] h-auto flex items-center justify-center !px-8 !py-16 md:!px-16 md:!py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        
        {/* Left Side: Image Container */}
        <motion.div 
          ref={imageRef}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="w-full max-w-[340px] aspect-[3/4] overflow-hidden shadow-2xl rounded-2xl">
            <img 
              src={AboutLogo} 
              alt="Designer working at desk" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col !space-y-12 lg:!pl-12">
          <motion.h1 
            ref={titleRef}
            className="text-6xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-[0.75] text-[#E7000B] font-sans antialiased"
            style={{ 
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              fontWeight: '900',
              letterSpacing: '-0.03em',
              textShadow: `
                0 0 10px rgba(231, 0, 11, 0.5),
                0 0 20px rgba(231, 0, 11, 0.3),
                0 0 30px rgba(231, 0, 11, 0.2),
                2px 2px 4px rgba(0, 0, 0, 0.8)
              `
            }}
            whileHover={{ 
              scale: 1.05,
              textShadow: `
                0 0 15px rgba(231, 0, 11, 0.8),
                0 0 25px rgba(231, 0, 11, 0.5),
                0 0 35px rgba(231, 0, 11, 0.3),
                3px 3px 6px rgba(0, 0, 0, 0.9)
              `
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            ABOUT US!
          </motion.h1>

          <motion.div 
            ref={contentRef}
            className="max-w-2xl !space-y-6 text-sm md:text-base leading-relaxed text-gray-100 font-light"
          >
            <motion.p
              whileHover={{ x: 10, color: "#f3f4f6" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >We are a professional Printing & Advertising company, providing
            innovative signage and advertising solutions that help brands stand out
             and create a strong visual impact.
            </motion.p>
            
            <motion.p
              whileHover={{ x: 10, color: "#f3f4f6" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >With a strong focus on creativity, precision, and durability, we deliver customized printing and advertising services tailored to each client’s needs. From indoor and outdoor signage to promotional materials and corporate branding, we combine modern technology with expert craftsmanship to ensure outstanding results.
            </motion.p>
          </motion.div>

          {/* Bottom Accent Line */}
          <motion.div 
            ref={accentLineRef}
            className="w-20 h-1 bg-[#E7000B] !mt-12 self-end rounded-full"
          />
        </div>
      </div>

    </motion.section>

    
      <div>
        <VisionMission />
      </div>
    </div>
  );
};

export default About;