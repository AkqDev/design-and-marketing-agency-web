import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import category1 from '../assets/category1.png'
import category2 from '../assets/category2.png'
import category3 from '../assets/category3.png'
import category4 from '../assets/category4.png'

interface Category {
  titleKey: 'package01Title' | 'package02Title' | 'package03Title' | 'package04Title';
  descriptionKey: 'package01Description' | 'package02Description' | 'package03Description' | 'package04Description';
  img: string;
  link: string;
}

const categories: Category[] = [
  { 
    titleKey: 'package01Title', 
    descriptionKey: 'package01Description',
    img: category1,
    link: '/services/advertising'
  },
  { 
    titleKey: 'package02Title', 
    descriptionKey: 'package02Description',
    img:category2,
    link: '/services/advertising'
  },
  { 
    titleKey: 'package03Title', 
    descriptionKey: 'package03Description',
    img: category3,
    link: '/services/signboard-designs'
  },
  { 
    titleKey: 'package04Title', 
    descriptionKey: 'package04Description',
    img: category4,
    link: '/services/company-profile'
  },
];

const OurCategories: React.FC = () => {
  const { t, language } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.7,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };
  
  return (
    <div className="max-w-[1400px] mx-auto !px-4 !py-16 md:!pb-45">
      {/* Heading Section */}
      <motion.div 
        className="!pb-8 md:!pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headingVariants}
      >
        <h2 className={`font-logo text-3xl md:text-4xl font-black text-center tracking-tighter uppercase italic text-white/90 ${language === 'ar' ? 'rtl' : ''}`}>
          {t.categories.ourProfessional}
          <span className="text-[#9D0A0A] !ml-2">{t.categories.servicePackages}</span>
        </h2>
      </motion.div>
      
      <motion.div 
        className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center gap-8 md:overflow-x-auto pb-8 scrollbar-hide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {categories.map((item, index) => (
          <motion.div 
            key={index} 
            className="group flex flex-col items-center flex-shrink-0 w-full md:w-auto"
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Package Label (Optional badge) */}
            <motion.span 
              className={`font-logo !mb-4 text-xs font-bold uppercase tracking-widest text-[#9D0A0A] opacity-70 ${language === 'ar' ? 'rtl' : ''}`}
              variants={badgeVariants}
            >
              {t.categories.package} 0{index + 1}
            </motion.span>

            {/* Image Container with Link */}
            <Link to={item.link}>
              <motion.div 
                className="w-[250px] h-[250px] rounded-full shadow-[#9D0A0A]/55 overflow-hidden shadow-lg transition-all duration-500 cursor-pointer relative"
                variants={imageVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(157, 10, 10, 0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={item.img} 
                  alt={t.categories[item.titleKey]} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                {/* Arrow Icon Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ArrowRight className="w-12 h-12 text-white" />
                </motion.div>
              </motion.div>
            </Link>
            
            {/* Content Section */}
            <motion.div 
              className="!mt-6 w-[250px]"
              variants={textVariants}
            >
              <motion.h3 
                className={`font-logo text-xl font-bold text-[#9D0A0A] text-center !p-1 leading-tight ${language === 'ar' ? 'rtl' : ''}`}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {t.categories[item.titleKey]}
              </motion.h3>
              <motion.p 
                className={`font-logo text-sm text-white text-center !mt-2 !px-2 italic ${language === 'ar' ? 'rtl' : ''}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {t.categories[item.descriptionKey]}
              </motion.p>
              
              {/* Arrow Link Button */}
              <Link to={item.link}>
                <motion.div 
                  className="flex items-center justify-center !mt-4 text-[#9D0A0A] hover:text-white transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-logo text-sm font-semibold mr-2">View Details</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurCategories;