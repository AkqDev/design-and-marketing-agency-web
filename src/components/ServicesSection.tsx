import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import ads from '../assets/ads.png';
import marketing from '../assets/marketing.png';
import seo from '../assets/seo.png';
import social from '../assets/social.png';
import web from '../assets/web.png';

const services = [
  { id: 1, title: 'SEO', fullName: 'SEARCH ENGINE OPTIMIZATION', img: seo },
  { id: 2, title: 'ADS', fullName: 'ADVERTISING & PPC', img: ads },
  { id: 3, title: 'WEB', fullName: 'WEB DEVELOPMENT', img: web },
  { id: 4, title: 'SOCIAL', fullName: 'SOCIAL MEDIA MARKETING', img: social },
  { id: 5, title: 'MARKETING', fullName: 'DIGITAL MARKETING', img: marketing },
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-black text-white !py-20  h-screen">
      <div className="h-full max-w-8xl mx-auto !px-4 flex flex-col">
        {/* Fixed Header */}
        <div className="!pt-8 !pb-4 md:!pt-12 md:!pb-10">
          <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
            Our <span className="text-red-600">Services</span>
          </h2>
        </div>

        {/* Full Screen Swiper Container */}
        <div className="flex-1 w-full !pb-8">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect={'fade'}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-full rounded-3xl overflow-hidden"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between !p-8 md:!p-16 lg:!p-24 bg-[#0a0a0a] border border-white/5 shadow-2xl">
                  
                  {/* 1. Background "Smoke/Glow" Effect */}
                  <div className="absolute inset-0 bg-radial-gradient from-red-900/10 via-transparent to-transparent opacity-50" />
                  
                  {/* 2. Floating Icon Cluster (Decorative) */}
                  <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block select-none">
                     <div className="grid grid-cols-3 gap-3 -rotate-12">
                        {[...Array(9)].map((_, i) => (
                           <div key={i} className="w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br from-red-600 to-transparent rounded-xl rotate-45" />
                        ))}
                     </div>
                  </div>

                  {/* Left Content: The BIG Title */}
                  <div className="z-20 w-full md:w-1/2 flex flex-col items-start">
                    <p className="text-red-600 font-bold tracking-[0.3em] !mb-4 text-sm md:text-base">
                      {service.fullName}
                    </p>
                    <h3 className="text-[40px] md:text-[50px] font-black text-red-600 italic leading-[0.8] tracking-tighter drop-shadow-2xl">
                      {service.title}
                    </h3>
                  </div>

                  {/* Center: Main Image (Floating Target) */}
                  <div className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] flex justify-center pointer-events-none">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-[60%] md:w-full object-cover animate-pulse-slow drop-shadow-[0_0_50px_rgba(220,38,38,0.4)]"
                    />
                  </div>

                  {/* Right Content: Catchy Tagline */}
                  <div className="z-20 w-full md:w-1/3 text-left md:text-right flex flex-col items-start md:items-end !mt-12 md:!mt-0 !mb-10 md:!mb-0">
                    <h4 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase leading-tight">
                      Improve Your <br /> Visibility
                    </h4>
                    <p className="text-4xl md:text-5xl lg:text-7xl font-black text-red-600 uppercase italic my-2 drop-shadow-md">
                      Boost
                    </p>
                    <h4 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase leading-tight">
                      Your Authority
                    </h4>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet { 
          width: 12px; 
          height: 12px; 
          background: #333 !important; 
          opacity: 1; 
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active { 
          background: #dc2626 !important; 
          width: 40px; 
          border-radius: 6px; 
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;