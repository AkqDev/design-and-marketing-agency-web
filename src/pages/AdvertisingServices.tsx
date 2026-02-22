import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import marketing from '../assets/marketing.png';
import web from '../assets/web.png';
import seo from '../assets/seo.png';
import smhandling from '../assets/smhandling.png';
import videoediting from '../assets/videoediting.png';
import onlinebranding from '../assets/onlinebranding.png';

const AdvertisingServices = () => {
  const { t } = useLanguage();
  const whatsappNumber = "966563203251";

  const services = [
    {
      title: t.aboutServices.metaAds,
      description: t.aboutServices.metaAdsDescription,
      img: marketing,
      color: "bg-white",
    },
    {
      title: t.aboutServices.socialMediaHandling,
      description: t.aboutServices.socialMediaDescription,
      img: smhandling,
      color: "bg-gray-50",
    },
    {
      title: t.aboutServices.onlineBranding,
      description: t.aboutServices.onlineBrandingDescription,
      img: onlinebranding,
      color: "bg-gray-100",
    },
    {
      title: t.aboutServices.webDevelopment,
      description: t.aboutServices.webDescription,
      img: web,
      color: "bg-gray-200",
    },
    {
      title: t.aboutServices.seoServices,
      description: t.aboutServices.seoDescription,
      img: seo,
      color: "bg-slate-100",
    },
    {
      title: t.aboutServices.videoEditing,
      description: t.aboutServices.videoEditingDescription,
      img: videoediting,
      color: "bg-zinc-100",
    },
  ];

  return (
    <section className="bg-black !py-20 !px-4 md:!px-10 min-h-screen flex flex-col items-center justify-center">
      
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
          {t.aboutServices.ourAdvertising} <span className="text-[#9D0A0A] !ml-2">{t.aboutServices.services}</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`sticky top-24 w-full !mb-5 ${
              index === services.length - 1 ? '!mb-15' : ''
            }`}
            style={{ paddingTop: `${index * 20}px` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${service.color} rounded-2xl !p-8 md:!p-12 min-h-[400px] shadow-2xl flex flex-col md:flex-row gap-10 items-center overflow-hidden`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-[poppins] text-[#9D0A0A] !mb-6 text-center md:text-left font-bold">
                  {service.title}
                </h2>

                <div className="h-[1px] bg-white/20 w-full !mb-4" />

                <p className="text-black text-lg leading-relaxed text-center md:text-left">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <div className="!mt-6 flex justify-center md:justify-start">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `${t.aboutServices.whatsappMessage} ${service.title}. What can you help me with?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9D0A0A] text-white !px-6 !py-3 rounded-full w-full md:w-auto font-semibold hover:opacity-90 transition-all duration-300 text-center"
                  >
                    {t.aboutServices.getMoreInfo}
                  </a>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full h-full">
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-2xl w-full h-[300px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvertisingServices;
