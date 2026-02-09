import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useLanguage } from "../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/ayyan.signage/",
    },
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/ayyansignage",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/adnan-malickx/",
    },
  ];

  const contactLinks = [
    {
      icon: <FiMail size={18} />,
      text: "ayyan.signtech.sa@gmail.com",
      link: "mailto:ayyan.signtech.sa@gmail.com",
    },
    {
      icon: <FiPhone size={18} />,
      text: "+966 56 320 3251",
      link: "tel:+966563203251",
    },
    {
      icon: <FaWhatsapp size={18} />,
      text: "+966 56 320 3251",
      link: "https://wa.me/966563203251", // ✅ FIXED
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="md:bg-[#000] bg-[#0B0A0A] border-t border-[#9D0A0A] rounded-2xl md:border-0 text-white w-full h-auto !py-10 !px-2 md:!px-4 md:!px-10 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]"
    >
      {/* TOP FOOTER */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start bg-[#0B0A0A] rounded-3xl !p-2 md:!p-8 gap-10">
        {/* LEFT */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-start"
        >
          <div className="text-left space-y-4">
            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="logo"
                className="w-16 h-auto transition-transform duration-300 group-hover:scale-105 !my-3"
              />
              <div className="flex flex-col leading-none !ml-3">
                <h1 className="text-[#9D0A0A] text-xl font-logo font-black tracking-tighter text-shadow-md uppercase">
                  Ayyan SignAge
                </h1>
                <span className="text-white text-base font-logo font-bold tracking-wider text-shadow-sm">
                  Printing And Advertising
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed opacity-90 md:!pl-5 !mt-3">
              We are a professional printing and advertising company, delivering
              creative, precise, and durable signage and branding solutions.
              From indoor and outdoor signage to promotional materials, we
              combine modern technology with expert craftsmanship to help
              brands stand out.
            </p>
          </div>
        </motion.div>

        {/* MIDDLE */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-center md:!mt-14"
        >
          <div className="space-y-4">
            <h3 className="font-bold text-lg !mb-3 text-center">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 md:text-center">
              {[
                { name: t.footer.home, path: "/" },
                { name: t.footer.about, path: "/about" },
                { name: t.footer.services, path: "/services" },
                { name: t.footer.contactUs, path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="inline-block transition-all duration-300 hover:text-[#9D0A0A] hover:translate-x-2 !py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex justify-end"
        >
          <div className="space-y-4 w-full md:max-w-sm">
            <h1 className="font-bold text-lg !mb-3 md:hidden">
              Contact Us
            </h1>

            {contactLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 text-sm font-medium md:bg-[#222222] md:!p-6 rounded-2xl w-full md:w-auto md:justify-center hover:opacity-80 transition !my-3"
              >
                {item.icon}
                {item.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-[1400px] flex-col md:flex-row mx-auto flex justify-between items-center !mt-4 !px-4 md:!px-10 bg-[#0B0A0A] rounded-3xl !py-4"
      >
        <div className="text-sm text-white opacity-80 text-center md:text-left">
          &copy; {new Date().getFullYear()} Ayyan SignAge | Designed & Developed
          by Akbar Qureshi
        </div>

        <div className="flex space-x-4 !mt-4 md:!mx-2 md:!mt-0">
          {socialLinks.map(({ icon: Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-white bg-[#202020] !p-3 rounded-full shadow-lg cursor-pointer !mx-2"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* WHATSAPP FLOATING BUTTON */}
      <motion.a
        href="https://wa.me/966563203251"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-5 right-10 z-50 bg-[#9D0A0A] !p-4 rounded-full shadow-lg"
      >
        <FaWhatsapp size={18} className="text-white" />
      </motion.a>
    </motion.div>
  );
};

export default Footer;
