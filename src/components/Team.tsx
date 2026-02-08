import { motion } from 'framer-motion';

// Asset Imports
import ayyan from '../assets/ayyan.png';
import ashraf from '../assets/ashraf.png';
import khalid from '../assets/khalid.png';
import Amina from '../assets/Amina.png';
import akbar from '../assets/akbar.png';
import aman from '../assets/aman.png';
import shamsa from '../assets/shamsa.png';
import arslan from '../assets/arslan.png';
import zulqarnain from '../assets/zulqarnain.png';

interface Instructor {
  img: string;
  name: string;
  role: string;
  featured?: boolean; // Added optional featured property
}

const Team = () => {
  const instructors: Instructor[] = [
    { img: ayyan, name: 'Adnan Malick', role: 'CEO | Managing Director' },
    { img: ashraf, name: 'Malik Ashraf Nawaz', role: 'Brand Ambassador' },
    { img: khalid, name: 'M. Khalid Fareed', role: 'Senior Business Strategy Planner' },
    { img: Amina, name: 'Amina Gulzar', role: 'Branding Specialist' },
    { img: akbar, name: 'Akbar Qureshi', role: 'Full-Stack Developer' },
    { img: arslan, name: 'Arslan Tahir', role: 'Operational Incharge' },
    { img: zulqarnain, name: 'Zulqarnain Bashir', role: 'Graphics Designer' },
    { img: aman, name: 'Aman Ullah Takhleeq', role: 'Business Manager' },
    { img: shamsa, name: 'Shamsa Andleeb Akhtar', role: 'Graphics Designer' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };

  return (
    <section className="w-full !py-20 bg-white/90 !my-10 rounded-2xl md:rounded-[40px]">
      <div className="mx-auto !px-6">
        
        {/* Section Heading */}
        <motion.div 
          className="!mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic text-gray-900">
            Our <span className="text-[#9D0A0A]">Team</span>
          </h2>
        </motion.div>

        {/* Grid Container centered */}
        <motion.div 
          className="w-full flex justify-center items-center flex-wrap gap-10 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {instructors.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="relative w-full max-w-[260px] pt-8 pb-14 px-6 
                flex flex-col items-center justify-center text-center transition-all duration-300
                mx-auto"
            >
              {/* Circular Profile Image */}
              <motion.div 
                className="relative w-80 h-80 mb-6 flex-shrink-0"
                variants={imageVariants}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#000] shadow-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Information - Centered Content */}
              <motion.div 
                className="flex flex-col items-center justify-center min-h-[80px]"
                variants={textVariants}
              >
                <h3 className="text-xl font-bold leading-tight tracking-tight mb-2">
                  {item.name}
                </h3>
                <p className={`text-sm font-medium leading-tight px-4 ${item.featured ? 'text-blue-100' : 'text-gray-500'}`}>
                  {item.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;