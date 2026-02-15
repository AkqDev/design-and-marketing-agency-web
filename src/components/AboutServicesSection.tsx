import { motion } from 'framer-motion';
import marketing from '../assets/marketing.png';
import web from '../assets/web.png';
import seo from '../assets/seo.png';
import smhandling from '../assets/smhandling.png';
import videoediting from '../assets/videoediting.png';
import onlinebranding from '../assets/onlinebranding.png';

const services = [
  {
  title: "Meta Ads",
  description:
    "Strategic Facebook and Instagram advertising campaigns that target your ideal audience with precision. We optimize ad spend, create compelling visuals, and continuously A/B test to maximize ROAS and conversion rates for your business.",
  img: marketing,
  color: "bg-white",
},
{
  title: "Social Media Handling",
  description:
    "Comprehensive social media management across all major platforms. We create engaging content calendars, interact with your community, analyze performance metrics, and build authentic brand presence that drives engagement and customer loyalty.",
  img: smhandling,
  color: "bg-gray-50",
},
{
  title: "Online Branding",
  description:
    "Holistic brand identity development that resonates with your target market. From logo design and brand guidelines to voice and messaging strategy, we create cohesive brand experiences that build trust, recognition, and long-term customer relationships.",
  img: onlinebranding,
  color: "bg-gray-100",
},
{
  title: "Web Development",
  description:
    "Custom website development with cutting-edge technologies including React, Next.js, and Tailwind CSS. We build lightning-fast, fully responsive, SEO-optimized websites with intuitive user experiences that convert visitors into customers.",
  img: web,
  color: "bg-gray-200",
},
{
  title: "SEO Services",
  description:
    "Data-driven search engine optimization that increases your organic visibility. We perform comprehensive keyword research, technical SEO audits, on-page optimization, and quality link building to rank higher on Google and drive sustainable traffic.",
  img: seo,
  color: "bg-slate-100",
},
{
  title: "Video Editing",
  description:
    "Professional video production and post-production services for brands and businesses. We create cinematic promotional videos, engaging social media clips, product demonstrations, and corporate presentations that capture attention and tell your story.",
  img: videoediting,
  color: "bg-zinc-100",
},
]

const AdvertisingServices = () => {
  const whatsappNumber = "966563203251";

  return (
    <section className="bg-black !py-20 !px-4 md:!px-10 min-h-screen flex flex-col items-center justify-center">
      
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
          Our Advertising <span className="text-[#9D0A0A] !ml-2">Services</span>
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
                      `Hi, I want more information about ${service.title}. What can you help me with?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9D0A0A] text-white !px-6 !py-3 rounded-full w-full md:w-auto font-semibold hover:opacity-90 transition-all duration-300 text-center"
                  >
                    Get More Info
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