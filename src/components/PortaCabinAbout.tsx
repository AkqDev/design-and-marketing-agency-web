import React from 'react';
import { motion } from 'framer-motion';
import portaAbout from '../assets/portaAbout.png';

const PortaCabinAbout: React.FC = () => {
  return (
    <section className="!py-[24px] !px-4 md:!px-8 md:!py-[80px] !max-w-[1200px] !mx-auto !h-auto">
      <div className="flex flex-col lg:flex-row !items-center !justify-center !gap-12">
        
        {/* Left Side: Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex !justify-center !items-center"
        >
          <div className="!rounded-3xl overflow-hidden shadow-2xl shadow-black/50 transition-transform duration-500 hover:scale-[1.02] hover:shadow-[#9D0A0A]/30">
            <img 
              src={portaAbout} 
              alt="Dream Portacabins variety of portable cabin solutions" 
              className="w-full !h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col !justify-center !items-center lg:!items-start text-center lg:text-left"
        >
         {/* Header Section */}
      <div className="flex flex-col items-center !mb-8 z-10 !px-4 !pt-8 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white max-w-4xl"
        >
          About<span className="text-[#9D0A0A] !ml-2">Us</span>
        </motion.h2>
      </div>
      
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="!space-y-6 !text-white !leading-relaxed !text-sm md:!text-base"
          >
            <p>
              We are a trusted manufacturer and supplier of high-quality portable cabin solutions designed to meet 
              the diverse needs of residential, commercial, and industrial clients. We specialize 
              in providing durable, cost-effective, and customizable portable cabins that offer 
              comfort, functionality, and long-term value.
            </p>

            <p>
              From security cabins and portable office cabins to farmhouse cabins and customized 
              structures, our solutions are built to suit every requirement.
            </p>

            <p>
              With a strong focus on quality and customer satisfaction, we use premium materials 
              and modern construction techniques to ensure each cabin is weather-resistant, safe, 
              and easy to maintain.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default PortaCabinAbout;