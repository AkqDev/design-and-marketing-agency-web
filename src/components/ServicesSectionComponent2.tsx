import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import cladding1 from '../assets/cladding1.png';
import cladding2 from '../assets/cladding2.png';
import cladding3 from '../assets/cladding3.png';
import cladding4 from '../assets/cladding4.png';

const services = [
  { img: cladding1 },
  { img: cladding2 },
  { img: cladding3 },
  { img: cladding4 },
];

const ServicesSectionComponent2 = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center !p-4 md:!p-10">
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
          {t.servicesPage.wall}<span className="text-[#9D0A0A] !ml-2">{t.servicesPage.cladding}</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-20">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="sticky top-24 w-full" 
            style={{ paddingTop: `${index * 20}px` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-white/10 rounded-3xl h-[400px] shadow-2xl overflow-hidden w-full">
              {/* Image container with fixed height */}
              <div className="w-full h-full">
                <img 
                  src={service.img} 
                  alt={`Cladding ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionComponent2;