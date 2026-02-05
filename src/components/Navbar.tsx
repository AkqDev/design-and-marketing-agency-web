import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/966563203251";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar animation
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.div
        ref={navRef}
        className="w-full relative top-0 left-0 z-50 transition-all duration-500 bg-transparent"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between md:justify-around items-center my-5 md:my-3 px-6 md:px-16">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 group"
          >
            <img
              src={logo}
              alt="logo"
              className="w-16 h-auto transition-transform duration-300 group-hover:scale-105 !m-3"
            />
            <div className="flex flex-col leading-none !ml-2">
              <h1 className="text-[#D61921] text-xl font-logo font-black tracking-tighter text-shadow-md">
                Ayyan
              </h1>
              <span className="text-white text-base font-logo font-bold tracking-wider uppercase -mt-1 text-shadow-sm">
                SignAge
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-between !p-5 !px-10 text-white">
            <nav>
              <ul className="flex !space-x-8">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`!px-4 !py-2 relative font-nav text-base transition-colors duration-300 text-shadow-sm ${
                        location.pathname === item.path
                          ? "text-[#D61921]"
                          : "hover:text-gray-200"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#D61921] transition-all duration-300 ${
                          location.pathname === item.path ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* DESKTOP WHATSAPP BUTTON */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="!ml-10 bg-[#D61921] text-white !py-4 !px-8 rounded-full inline-block font-button text-sm hover:bg-black hover:border hover:border-[#D61921] hover:text-[#D61921] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book an Appointment
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden !p-3 rounded-full bg-white/10 backdrop-blur-sm !m-3 shadow-lg text-white hover:bg-white/20 transition-all duration-300"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </motion.div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-md z-50 flex flex-col"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center !p-6">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 group"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="w-16 h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col leading-none !ml-3">
                  <h1 className="text-[#D61921] text-xl font-logo font-black tracking-tighter text-shadow-md">
                    Ayyan
                  </h1>
                  <span className="text-white text-base font-logo font-bold tracking-wider uppercase -mt-1 text-shadow-sm">
                    SignAge
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setIsOpen(false)}
                className="!p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <nav className="flex flex-col items-center justify-center gap-8 text-white flex-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-nav text-xl transition-colors duration-300 text-shadow-md hover:scale-110 transform ${
                      location.pathname === item.path
                        ? "text-[#D61921]"
                        : "hover:text-[#D61921]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* WHATSAPP BUTTON */}
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="!mt-8 bg-[#D61921] text-white !px-8 !py-4 rounded-full font-button hover:bg-black hover:border hover:border-[#D61921] hover:text-[#D61921] transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book an Appointment
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;