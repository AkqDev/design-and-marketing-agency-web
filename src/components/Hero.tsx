import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import herovideo from '../assets/herovideo.mp4';
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/966563203251";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern for Desktop */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D61921] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D61921] rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl opacity-5"></div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(214,25,33,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(214,25,33,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </>
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

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-logo font-bold text-white mb-6 leading-tight"
          >
            Transform Your
            <span className="block text-[#D5171C]">
              Brand Vision
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 font-nav max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Create stunning, professional signage that captures attention and drives results. 
            From concept to installation, we bring your brand to life with cutting-edge design and premium materials.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#D61921] text-white !px-8 !py-4 rounded-full font-button text-base hover:bg-black hover:border hover:border-[#D61921] hover:text-[#D61921] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 !mt-3"
            >
              Get Free Quote
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </a>
            
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;