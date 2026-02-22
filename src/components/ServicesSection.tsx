import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import priting from '../assets/printing.png';
import designing from '../assets/designing.png';
import advertising from '../assets/advertising.png';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.servicesPage.designingServices,
      description: t.servicesPage.designingDescription,
      img: designing,
      color: "bg-white",
    },
    {
      title: t.servicesPage.printingServices,
      description: t.servicesPage.printingDescription,
      img: priting,
      color: "bg-gray-50",
    },
    {
      title: t.servicesPage.advertisingServices,
      description: t.servicesPage.advertisingDescription,
      img: advertising,
      color: "bg-gray-100",
    },
  ];

  return (
    <section className="bg-black !pt-20 !px-4 md:!px-10 min-h-screen flex flex-col items-center justify-center">
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
          {t.services.ourServices}
          <span className="text-[#9D0A0A] !ml-2">{t.services.services}</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky top-24 w-full !mb-5"
            style={{ paddingTop: `${index * 20}px` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${service.color} rounded-2xl !p-8 md:!p-12 min-h-[300px] shadow-2xl flex flex-col md:flex-row gap-10 items-center overflow-hidden`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-5xl text-[#9D0A0A] !mb-6 text-center md:text-left font-bold font-[poppins] font-bold">
                  {service.title}
                </h2>
                <div className="h-[1px] bg-black/20 w-full !mb-4" />
                <p className="text-black text-lg leading-relaxed text-center md:text-left">
                  {service.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full h-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[350px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
