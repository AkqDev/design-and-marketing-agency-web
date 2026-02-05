import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for heading entrance effect only
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, 
        { 
          y: 50, 
          opacity: 0,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // GSAP animations for form with stagger effect
    if (formRef.current) {
      gsap.fromTo(formRef.current.children,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // GSAP animations for map with scale effect
    if (mapRef.current) {
      gsap.fromTo(mapRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = () => {
    // Validate all fields are filled
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const phoneNumber = "966563203251"; 
    const text = `*New Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#000] min-h-screen !py-16 md:!py-24 !px-4 md:!px-8 font-sans flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <motion.div 
          className="text-center flex flex-col items-center justify-center !mb-16 md:!mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90 drop-shadow-2xl"
              style={{
                textShadow: `
                  0 0 20px rgba(157, 10, 10, 0.5),
                  0 0 40px rgba(157, 10, 10, 0.3),
                  0 0 60px rgba(157, 10, 10, 0.2),
                  0 4px 8px rgba(0, 0, 0, 0.8),
                  0 8px 16px rgba(0, 0, 0, 0.4)
                `
              }}
            >
              Contact <span className="text-[#9D0A0A]">Us</span>
            </h2>
          </div>
          <motion.p 
            className="text-gray-100 font-[poppins] text-lg max-w-3xl mx-auto !pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            We are a professional printing and advertising company, delivering creative, precise, and durable signage and branding solutions. 
            From indoor and outdoor signage to promotional materials, we help brands stand out through expert craftsmanship.
          </motion.p>
        </motion.div>

        {/* Main Content Form */}
        <div ref={formRef} className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start w-full">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Name Input */}
            <motion.div 
              className="flex flex-col gap-2"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.label 
                className="text-[#9D0A0A] font-[poppins] font-semibold !ml-2 !mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Full Name
              </motion.label>
              <motion.input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Your Name"
                className="w-full !p-5 rounded-3xl !bg-[#202020] text-white focus:ring-2 focus:ring-[#9D0A0A] focus:!bg-[#202020] hover:!bg-[#202020] active:!bg-[#202020] outline-none transition-all font-[poppins] shadow-lg hover:shadow-xl focus:shadow-2xl"
                style={{ 
                  backgroundColor: '#202020',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: '0 8px 25px rgba(157, 10, 10, 0.3), 0 4px 15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              />
            </motion.div>
            {/* Phone Input */}
            <motion.div 
              className="flex flex-col gap-2"
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.label 
                className="text-[#9D0A0A] font-[poppins] font-semibold !ml-2 !mt-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Phone Number
              </motion.label>
              <motion.input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone"
                className="w-full !p-5 rounded-3xl !bg-[#202020] text-white focus:ring-2 focus:ring-[#9D0A0A] focus:!bg-[#202020] hover:!bg-[#202020] active:!bg-[#202020] outline-none transition-all font-[poppins] shadow-lg hover:shadow-xl focus:shadow-2xl"
                style={{ 
                  backgroundColor: '#202020',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                whileFocus={{
                  scale: 1.02,
                  boxShadow: '0 8px 25px rgba(157, 10, 10, 0.3), 0 4px 15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Email Input */}
          <motion.div 
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <label className="text-[#9D0A0A] font-[poppins] font-semibold !ml-2 !mt-2">Email Address</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Your Email"
              className="w-full !p-5 rounded-3xl !bg-[#202020] text-white focus:ring-2 focus:ring-[#9D0A0A] focus:!bg-[#202020] hover:!bg-[#202020] active:!bg-[#202020] outline-none transition-all font-[poppins] shadow-lg hover:shadow-xl focus:shadow-2xl"
              style={{ 
                backgroundColor: '#202020',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            />
          </motion.div>

          {/* Message Input */}
          <motion.div 
            className="flex flex-col gap-2 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <label className="text-[#9D0A0A] font-[poppins] font-semibold !ml-2 !mt-2">Your Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="How can we help you?"
              className="w-full !p-5 text-white rounded-3xl !bg-[#202020] focus:ring-2 focus:ring-[#9D0A0A] focus:!bg-[#202020] hover:!bg-[#202020] active:!bg-[#202020] outline-none transition-all font-[poppins] resize-none shadow-lg hover:shadow-xl focus:shadow-2xl"
              style={{ 
                backgroundColor: '#202020',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            ></textarea>
          </motion.div>

          <motion.button 
            onClick={handleWhatsAppSubmit}
            className="bg-[#9D0A0A] hover:bg-[#7e0808] text-white !px-12 !py-4 w-full rounded-full font-bold font-[poppins] !my-4 transition-all duration-300"
            style={{
              boxShadow: `
                0 8px 25px rgba(157, 10, 10, 0.4),
                0 4px 15px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `
                0 12px 35px rgba(157, 10, 10, 0.6),
                0 6px 20px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `
            }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Message via WhatsApp
          </motion.button>
        </div>

        {/* Map */}
        <motion.div 
          ref={mapRef}
          className="w-full h-96 bg-slate-300 rounded-[3rem] overflow-hidden relative !mt-8 border-4 border-[#202020]"
          style={{
            boxShadow: `
              0 20px 60px rgba(0, 0, 0, 0.5),
              0 10px 30px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `
          }}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
         <iframe
  title="map"
  width="100%"
  height="100%"
  frameBorder="0"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ filter: "grayscale(0.2) contrast(1.1)" }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.524268063807!2d39.1640938!3d21.6093041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d0b86f1adb6b%3A0xcb746b9c053036fc!2sAr%20Rabwah%2C%20Jeddah%2023533%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1707240000000"
  className="gray"
></iframe>

        </motion.div>

      </div>
    </div>
  );
};

export default Contact;