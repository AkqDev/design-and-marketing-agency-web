import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Asset Imports
import ayyan from "../assets/ayyan.png";
import ashraf from "../assets/ashraf.png";
import khalid from "../assets/khalid.png";
import Amina from "../assets/Amina.png";
import akbar from "../assets/akbar.png";
import aman from "../assets/aman.png";
import shamsa from "../assets/shamsa.png";
import arslan from "../assets/arslan.png";
import zulqarnain from "../assets/zulqarnain.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Malik M. Ashraf", role: "Brand Ambassador", image: ashraf },
  { name: "M Khalid Farid", role: "Business Strategist", image: khalid },
  { name: "Aman Ullah Takhleeq", role: "Digital Marketing Manager", image: aman },
  { name: "Ms Amina Gulzar", role: "Branding Specialist", image: Amina },
  { name: "Zulqarnain Bashir", role: "Graphic Designer", image: zulqarnain },
  { name: "Mohammad Akbar Qureshi", role: "Full-Stack Developer", image: akbar },
  { name: "Arslan Tahir", role: "Operational Manager", image: arslan },
  { name: "Shamsa Andaleeb", role: "Graphic Designer", image: shamsa },
];

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-white font-[poppins] rounded-[30px] !my-10 relative overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center !mb-8 md:!mb-12 z-10 !px-4 !pt-8 relative">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-black max-w-4xl">
          Meet<span className="text-[#9D0A0A] !ml-2">Our Team</span>
        </h2>
      </div>

      {/* Top Section: Main Leader */}
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 !px-10 !pb-10 relative">
        <div className="w-64 h-80 border-4 border-gray-800 rounded-xl overflow-hidden shadow-[#9D0A0A] shadow-xl">
          <img src={ayyan} alt="Adnan Tahir Malick" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left pb-4">
          <h1 className="text-5xl md:text-6xl font-black text-gray-800 tracking-tight">
            Adnan Tahir Malick
          </h1>
          <div className="bg-[#9D0A0A] text-white text-xl md:text-2xl font-bold !py-2 !px-6 !mt-2 inline-block rounded-sm">
            Founder | CEO | Managing Director
          </div>
        </div>
      </div>

      {/* Grid Section: Team Members */}
      <div className="w-full bg-white !py-16 !px-4 rounded-[30px] relative">
        <div className="max-w-7xl !mx-auto">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 justify-center items-center gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Oval Image Container */}
                <div className="w-60 h-85 rounded-full border-2 border-black overflow-hidden bg-[#9D0A0A] shadow-black/80 shadow-lg">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-400" /> 
                  )}
                </div>
                
                {/* Text after Image */}
                <div className="!my-4 text-center">
                  <h3 className="text-[#9D0A0A] font-bold text-lg leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-black text-xs mt-1 font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col items-center"
              >
                {/* Oval Image Container */}
                <div className="w-80 h-100 rounded-full border-2 border-black overflow-hidden bg-[#9D0A0A] shadow-black/80 shadow-lg">
                  {teamMembers[currentIndex].image ? (
                    <img 
                      src={teamMembers[currentIndex].image} 
                      alt={teamMembers[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-400" /> 
                  )}
                </div>
                
                {/* Text after Image */}
                <div className="!my-4 text-center">
                  <h3 className="text-[#9D0A0A] font-bold text-lg leading-tight">
                    {teamMembers[currentIndex].name}
                  </h3>
                  <p className="text-black text-xs mt-1 font-medium">
                    {teamMembers[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons with Lucide Icons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#9D0A0A] text-white flex items-center justify-center shadow-lg hover:bg-[#7a0808] transition-colors"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-[#9D0A0A] w-6' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#9D0A0A] text-white flex items-center justify-center shadow-lg hover:bg-[#7a0808] transition-colors"
                aria-label="Next team member"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;