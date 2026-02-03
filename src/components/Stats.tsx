import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DigitProps {
  digit: string;
}

const Digit: React.FC<DigitProps> = ({ digit }) => {
  // If it's not a number (like '+' or ','), just render it plain
  if (isNaN(parseInt(digit))) {
    return <span>{digit}</span>;
  }

  return (
    <div className="relative h-[1em] overflow-hidden leading-none">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: `-${digit}0%` }}
        transition={{ 
          duration: 2, 
          ease: [0.45, 0.05, 0.55, 0.95],
          delay: 0.2 
        }}
        className="flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num}>{num}</span>
        ))}
      </motion.div>
    </div>
  );
};

interface RollingNumberProps {
  number: string;
}

const RollingNumber: React.FC<RollingNumberProps> = ({ number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex overflow-hidden">
      {isInView &&
        number.split('').map((char, index) => (
          <Digit key={index} digit={char} />
        ))}
    </div>
  );
};

const Stats = () => {
  const statsData = [
    { number: '2016', label: 'Services Since' },
    { number: '2000+', label: 'Projects Completed' },
    { number: '150k+', label: 'Happy Clients' },
  ];

  return (
    /* The Fix: Added 'flex items-center' to vertically center the content */
    <div className="bg-black w-full md:min-h-[500px] flex items-center !py-12 md:!py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center justify-items-center w-full !px-4 md:!px-0">
        {statsData.map((stat, index) => (
          <div 
            key={index} 
            className="relative w-full flex flex-col md:flex-row items-center justify-center group"
          >
            <div className="relative flex flex-col md:flex-row items-center justify-center text-center">
              {/* Background Rolling Number */}
              <div className="text-[50px] sm:text-[70px] md:text-[120px] font-extrabold text-[#9d0a0a] leading-none select-none tracking-tighter flex !mb-2 md:!mb-0">
                <RollingNumber number={stat.number} />
              </div>
              
              {/* Label Text - Below on mobile, overlapping on desktop */}
              <span className="relative md:absolute text-white text-lg sm:text-xl md:text-3xl font-bold uppercase tracking-tight whitespace-nowrap pointer-events-none">
                {stat.label}
              </span>
            </div>

            {/* Vertical Divider - Only on desktop */}
            {index !== statsData.length - 1 && (
              <div className="hidden md:block absolute right-0 h-40 w-[1px] bg-gray-500" />
            )}
            
            {/* Horizontal Divider - Only on mobile */}
            {index !== statsData.length - 1 && (
              <div className="block md:hidden w-32 h-[1px] bg-gray-500 !mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;