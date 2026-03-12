import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import PortaHero1 from '../assets/PortaHero1.png'
import PortaHero2 from '../assets/PortaHero2.png'
import PortaHero3 from '../assets/PortaHero3.png'

const PortaCabinHero: React.FC = () => {
  // Using the imported local assets
  const backgroundImages = [PortaHero1, PortaHero2, PortaHero3];

  return (
    <section className="relative w-full h-[95vh] min-h-[500px] overflow-hidden bg-black">
      {/* Background Carousel Layer */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {backgroundImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-[7000ms] scale-110"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${img})`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Layer - Centered vertically and horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center !px-4 mx-auto text-white font-poppins">    
        
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm font-bold tracking-[0.3em] !mb-4 opacity-90 uppercase"
        >
          Modular Construction Experts
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight !mb-6"
        >
          Build Smart with <br /> 
          <span className="text-white">Modular Cabins</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl max-w-2xl !mb-10 opacity-80 font-light leading-relaxed"
        >
          Portable Offices, Accommodation Units, and Custom Modular Buildings 
          Across Saudi Arabia
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <button className="bg-[#9D0A0A] text-white !px-10 !py-4 rounded-full font-bold transition-all flex items-center group shadow-2xl shadow-[#9D0A0A]/50 hover:shadow-[#9D0A0A]/70 hover:scale-105">
            Get Quote 
            <span className="!ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default PortaCabinHero;