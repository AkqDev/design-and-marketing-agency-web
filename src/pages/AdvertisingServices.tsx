import { motion } from 'framer-motion';
import marketing from '../assets/marketing.png'
import web from '../assets/web.png'

const services = [
  {
    title: "Meta Ads",
    description: "A Framer developer specializes in building interactive and visually stunning digital experiences using the power of Framer's no-code and code tools...",
    img:marketing,
    color: "bg-[#111111]",
  },
  {
    title: "Social Media Handling",
    description: "Building responsive, high-performance websites with clean code and modern frameworks to ensure your brand stands out online...",
    img: "https://images.unsplash.com/photo-1498050108023-c4bafc8c8c84?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#0a0a0a]",
  },
  {
    title: "Online Branding",
    description: "Building responsive, high-performance websites with clean code and modern frameworks to ensure your brand stands out online...",
    img: "https://images.unsplash.com/photo-1498050108023-c4bafc8c8c84?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#0a0a0a]",
  },
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites with clean code and modern frameworks to ensure your brand stands out online...",
    img: web,
    color: "bg-[#0a0a0a]",
  },
  {
    title: "Seo Services",
    description: "Building responsive, high-performance websites with clean code and modern frameworks to ensure your brand stands out online...",
    img: "https://images.unsplash.com/photo-1498050108023-c4bafc8c8c84?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#0a0a0a]",
  },
  {
    title: "Video Editing",
    description: "Building responsive, high-performance websites with clean code and modern frameworks to ensure your brand stands out online...",
    img: "https://images.unsplash.com/photo-1498050108023-c4bafc8c8c84?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#0a0a0a]",
  },

  
];

const AdvertisingServices = () => {
 
  return (
    <section className="bg-black !pt-20 !px-4 md:!px-10 min-h-screen flex flex-col items-center justify-center">
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
            className="sticky top-24 w-full"
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
                <h2 className="text-4xl md:text-5xl font-serif text-[#9D0A0A] !mb-6 text-center md:text-left">
                  {service.title}
                </h2>
                <div className="h-[1px] bg-white/20 w-full !mb-4 "/>
                <p className="text-gray-400 text-lg leading-relaxed text-center md:text-left">
                  {service.description}
                </p>
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