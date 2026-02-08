import { motion } from 'framer-motion';

const services = [
  {
    title: "UX/UI design",
    description: "UX/UI design focuses on enhancing user experiences and creating intuitive interfaces that connect people with digital products and services...",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#1a1a1a]"
  },
  {
    title: "Framer developer",
    description: "A Framer developer specializes in building interactive and visually stunning digital experiences using the power of Framer's no-code and code tools...",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#111111]"
  },
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites with clean code and modern frameworks to ensure your brand stands out online...",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#0a0a0a]"
  },
    {
    title: "UX/UI design",
    description: "UX/UI design focuses on enhancing user experiences and creating intuitive interfaces that connect people with digital products and services...",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop",
    color: "bg-[#1a1a1a]"
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black !pt-20 !px-4 md:!px-10 min-h-screen flex flex-col items-center justify-center">
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
          <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90">
            Our<span className="text-[#9D0A0A] !ml-2">Services</span>
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
              className={`${service.color} border border-white/10 rounded-3xl !p-8 md:!p-12 min-h-[450px] shadow-2xl flex flex-col md:flex-row gap-10 items-center overflow-hidden`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-white !mb-6">
                  {service.title}
                </h2>
                <div className="h-[1px] bg-white/20 w-full !mb-4" />
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full h-full">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="rounded-2xl w-full h-[300px] object-cover border border-white/5"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {/* Removed the extra h-screen div that was causing the bottom spacing */}
    </section>
  );
};

export default ServicesSection;