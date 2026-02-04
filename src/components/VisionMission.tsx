import React from 'react';
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from 'react-icons/hi2';
import mission from '../assets/mission.png';

const VisionMission: React.FC = () => {
  return (
    /* Wrapper to center the entire section on the screen */
    <div className="min-h-[500px] w-full flex items-center justify-center !p-4">
      
      <section className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 font-sans">
        
        {/* Left Side: Styled Image Card */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-sm !p-6 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]  transition-transform hover:scale-[1.02] duration-500">
            <div className="w-full  overflow-hidden rounded-2xl">
              <img 
                src={mission}
                alt="Mission and Vision Img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-12">
          
          {/* Vision Item */}
          <div className="group flex items-start gap-5">
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 rounded-full bg-[#9D0A0A] flex items-center justify-center text-white shadow-lg shadow-[#9D0A0A]/20">
                 {/* The small inner dot detail from the image */}
                 <div className="w-1.5 h-1.5 bg-white/40 rounded-full absolute top-3 right-[15px]"></div>
                 <HiOutlineLightBulb size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#9D0A0A] tracking-tight font-[poppins] !mb-2">Our Vision</h2>
              <p className="!mb-6 text-gray-100 leading-relaxed text-base max-w-lg font-[poppins]">
                To be a leading provider of innovative printing and advertising solutions, recognized for exceptional quality, creativity, and reliability high-quality printing and advertising services in a competitive market.
              </p>
            </div>
          </div>

          {/* Mission Item */}
          <div className="group flex items-start gap-5">
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 rounded-full bg-[#9D0A0A] flex items-center justify-center text-white shadow-lg shadow-[#9D0A0A]/20">
                 <HiOutlineRocketLaunch size={24} />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#9D0A0A] tracking-tight font-[poppins] !mb-2">Our Mission</h2>
              <p className="!mb-6 text-gray-100 leading-relaxed text-base max-w-lg font-[poppins]">
                We are committed to achieving outstanding results that meet our clients’ goals, exceed expectations, and build long-term partnerships through consistent quality and exceptional service.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VisionMission;