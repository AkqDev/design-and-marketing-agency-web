import { motion } from 'framer-motion';

const PortaCabinChoose = () => {
  const features = [
    {
      title: "Fast Deployment",
      description: "Units ready in 2-4 weeks, not months",
      icon: (
        <svg className="!w-6 !h-6 text-[#9D0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Climate Optimized",
      description: "Insulated for extreme Saudi heat",
      icon: (
        <svg className="!w-6 !h-6 text-[#9D0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
    },
    {
      title: "Relocatable",
      description: "Move and reuse as projects evolve",
      icon: (
        <svg className="!w-6 !h-6 text-[#9D0A0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black !py-24 !px-6 md:!px-12 lg:!px-32">
      <div className="max-w-[1200px] !mx-auto flex flex-col lg:flex-row items-center !gap-16">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 !space-y-8"
        >
          <header className="!space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-100 font-bold !tracking-[0.2em] !text-xs uppercase"
            >
              Why Choose Us
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="!text-5xl font-serif font-medium text-[#9D0A0A] !leading-[1.15]"
            >
              Built for Saudi Arabia's <br className="hidden md:block" /> Climate & Standards
            </motion.h2>
          </header>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white !text-lg !leading-relaxed !max-w-xl"
          >
            Our modular construction approach delivers high-quality 
            portable buildings with unmatched speed and precision. 
            From design to delivery, every unit is manufactured in 
            controlled environments to ensure consistent quality across 
            Saudi Arabia.
          </motion.p>
        </motion.div>

        {/* Right Side: Feature List */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full !space-y-5"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white !p-7 !rounded-2xl !border !border-gray-200/60 shadow-2xl shadow-black/30 flex items-center !gap-6 transition-all hover:shadow-[#9D0A0A]/20"
            >
              <div className="bg-[#f2f6f3] !p-4 !rounded-xl flex-shrink-0 shadow-lg">
                {feature.icon}
              </div>
              <div className="!space-y-1">
                <h3 className="!text-xl font-bold text-[#1a1a1a]">{feature.title}</h3>
                <p className="text-gray-500 font-medium !text-[15px]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PortaCabinChoose;