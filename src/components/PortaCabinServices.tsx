import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import porta1 from '../assets/PortaCabinsServicesImgs/porta1.png';
import porta2 from '../assets/PortaCabinsServicesImgs/porta2.png';
import porta3 from '../assets/PortaCabinsServicesImgs/porta3.png';
import porta4 from '../assets/PortaCabinsServicesImgs/porta4.png';
import porta5 from '../assets/PortaCabinsServicesImgs/porta5.png';
import porta6 from '../assets/PortaCabinsServicesImgs/porta6.png';
import porta7 from '../assets/PortaCabinsServicesImgs/porta7.png';
import porta8 from '../assets/PortaCabinsServicesImgs/porta8.png';

const services = [
  {
    title: "Gi Portable Site Office Cabin",
    image: porta1,
  },
  {
    title: "Portable Shop Cabin",
    image: porta2,
  },
  {
    title: "Portable Office Cabin",
    image: porta3,
  },
  {
    title: "Portable Toilet Cabin",
    image: porta4,
  },
  {
    title: "Portable Conference Cabin",
    image: porta5,
  },
  {
    title: "Shipping Container",
    image: porta6,
  },
  {
    title: "Portable Stay Cabin",
    image: porta7,
  },
  {
    title: "Portable Security Cabin",
    image: porta8,
  },
];

const PortaCabinServices = () => {
  const phoneNumber = "966563203251"; 

  const handleWhatsAppClick = (productName: string) => {
    const message = `Hi! I'm interested in the *${productName}*. Could you please provide more details regarding pricing and availability?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-zinc-950 !py-16 !px-4 sm:!px-8">
      <div className="max-w-[1200px] !mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center !mb-12 z-10 !px-4 !pt-8 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white max-w-4xl"
          >
            Our Portable<span className="text-[#9D0A0A] !ml-3">Solutions</span>
          </motion.h2>
        </div>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900 transition-all duration-300 border border-white/5 shadow-2xl shadow-black/50 hover:shadow-[#9D0A0A]/30 hover:scale-[1.02]"
            >
              {/* Image Wrapper */}
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent !p-6 flex flex-col items-center text-center">
                <h3 className="text-white font-bold text-lg !mb-5 leading-tight uppercase tracking-tight">
                  {service.title}
                </h3>
                
                {/* WhatsApp "Add to Cart" Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full flex items-center justify-center gap-2 bg-[#9D0A0A] hover:bg-black text-white !px-6 !py-3 rounded-xl text-sm font-black uppercase tracking-tighter transition-all shadow-xl shadow-black/80 border border-white/10"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortaCabinServices;