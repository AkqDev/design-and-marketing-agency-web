import React from 'react';
import { HiOutlineLightBulb, HiOutlineRocketLaunch } from 'react-icons/hi2';

const VisionMission: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 font-sans">
      
      {/* Left Side: Image Container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border border-gray-100">
          {/* Placeholder for your 3D/Crypto Illustration */}
          <img 
            src="https://via.placeholder.com/600x600/e0f2fe/0ea5e9?text=Crypto+Illustration" 
            alt="Mission and Vision Illustration"
            className="w-4/5 h-4/5 object-contain"
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 space-y-12">
        
        {/* Vision Item */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-200">
              <HiOutlineLightBulb size={24} />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become the global standard for integrating digital assets into everyday life, 
              creating a seamless bridge between traditional finance and the future.
            </p>
          </div>
        </div>

        {/* Mission Item */}
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shadow-lg shadow-cyan-200">
              <HiOutlineRocketLaunch size={24} />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To eliminate the complexity of interacting with today's digital assets, 
              providing a simple and secure experience accessible to everyone, everywhere.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;