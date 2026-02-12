import React from 'react';
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from 'react-icons/hi2';
import mission from '../assets/mission.png';

const VisionMission: React.FC = () => {
  return (
    /* Wrapper: Relative positioning allows the absolute glow to sit behind the content */
    <div className="relative min-h-[600px] w-full flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Shadow / Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#3d0a0a_0%,transparent_70%)] opacity-40 pointer-events-none" 
        aria-hidden="true"
      />

      <section className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 font-sans">
        
        {/* LEFT SIDE (Desktop) | SECOND (Mobile): Mission & Vision */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-12 order-2 md:order-1">
          
          {/* Vision Item */}
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            
            {/* Icon */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative w-16 h-16 rounded-full bg-[#7D0808] flex items-center justify-center text-white shadow-lg shadow-[#7D0808]/40 transition-transform group-hover:scale-110 duration-300">
                <div className="w-1.5 h-1.5 bg-white/40 rounded-full absolute top-3 right-[15px]"></div>
                <HiOutlineLightBulb size={28} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-bold text-[#7D0808] tracking-tight font-[poppins] !mb-2">
                Our Vision
              </h2>
              <p className="text-gray-100 leading-relaxed text-base max-w-lg font-[poppins] !py-2 !px-4">
                To be a leading provider of innovative printing and advertising solutions, recognized for exceptional quality, creativity, and reliability in a competitive market.
              </p>
            </div>
          </div>

          {/* Mission Item */}
          <div className="group flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
            
            {/* Icon */}
            <div className="flex-shrink-0 flex justify-center !mt-5">
              <div className="relative w-16 h-16 rounded-full bg-[#7D0808] flex items-center justify-center text-white shadow-lg shadow-[#7D0808]/40 transition-transform group-hover:scale-110 duration-300">
                <HiOutlineRocketLaunch size={28} />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-bold text-[#7D0808] tracking-tight font-[poppins] !mb-2">
                Our Mission
              </h2>
              <p className="text-gray-100 leading-relaxed text-base max-w-lg font-[poppins] !px-4 !mb-5">
                We are committed to achieving outstanding results that meet our clients’ goals, exceed expectations, and build long-term partnerships through consistent quality and exceptional service.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (Desktop) | FIRST (Mobile): Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full md:max-w-[450px] max-w-[350px] !p-4">
            {/* Subtle glow behind the image specifically */}
            <div className="absolute inset-0 bg-[#7D0808]/5 blur-3xl rounded-full" />
            
            <div className="relative overflow-hidden rounded-2xl transition-transform hover:scale-[1.03] duration-500 ease-out">
              <img 
                src={mission}
                alt="Mission and Vision"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default VisionMission;