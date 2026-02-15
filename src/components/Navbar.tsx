import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
const WHATSAPP_LINK = "https://wa.me/966563203251";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isLangOpen || isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen, isServicesOpen]);

  // Navbar animation
  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const menuItems = [
    { path: "/", label: t.navbar.home },
    { path: "/about", label: t.navbar.about },
    { path: "", label: t.navbar.services, hasDropdown: true },
    { path: "/contact", label: t.navbar.contact },
  ];

  const serviceItems = [
    { path: "/services/banner-designs", label: t.services.bannerDesigns },
    { path: "/services/nfc-cards-designs", label: t.services.nfcCardsDesigns },
    { path: "/services/gift-boxes-designs", label: t.services.giftBoxesDesigns },
    { path: "/services/broucher-designs", label: t.services.broucherAndPamphaletsDesigns },
    { path: "/services/visiting-cards-designs", label: t.services.visitingCardsDesigns },
    { path: "/services/uniform-designs", label: t.services.uniformAndTShirtsDesigns },
    { path: "/services/company-profile", label: t.services.companyProfile },
    { path: "/services/menu-cards-designs", label: t.services.menuCardsDesigns },
    { path: "/services/wall-cladding", label: t.services.wallCladding },
    {path:"/services/signboard-designs", label: t.services.signBoardDesigns },
    { path: "/services/advertising", label: t.services.advertisingServices },
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
        <div className="flex justify-between md:justify-around items-center !my-5 md:!my-3 !px-6 md:!px-16">
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-3 group"
          >
            <img
              src={logo}
              alt="logo"
              className="bg-white/90 backdrop-blur-lg rounded-full !p-1 w-18 h-auto transition-transform duration-300 group-hover:scale-105 !m-3"
            />
            <div className="flex flex-col leading-none !ml-2">
              <h1 className="text-[#9D0A0A] text-xl font-logo font-black tracking-tighter text-shadow-md uppercase">
                Ayyan SignAge
              </h1>
              <span className="text-white text-base font-logo font-bold tracking-wider !-mt-1 text-shadow-sm">
                Printing And Advertising 
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-between !p-5 !px-10 text-white">
            <nav>
              <ul className="flex !space-x-8">
                {menuItems.map((item) => (
                  <li key={item.path} className="relative">
                    {item.hasDropdown ? (
                      <div ref={servicesRef} className="relative">
                        <button
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className={` relative font-nav text-base transition-colors duration-300 text-shadow-sm flex items-center gap-1 ${
                            location.pathname.startsWith('/services')
                              ? "text-[#9D0A0A]"
                              : "hover:text-gray-200"
                          }`}
                        >
                          {item.label}
                          <FiChevronDown className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 bg-[#9D0A0A] transition-all duration-300 ${
                              location.pathname.startsWith('/services') ? "w-full" : "w-0"
                            }`}
                          ></span>
                        </button>
                        
                        {/* Services Dropdown */}
                        <AnimatePresence>
                          {isServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              onMouseEnter={() => setIsServicesOpen(true)}
                              onMouseLeave={() => setIsServicesOpen(false)}
                              className="absolute top-full left-0 !mt-2 w-80 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-white/20 overflow-hidden z-50"
                            >
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.path}
                                  to={service.path}
                                  className="block !px-5 !py-3 text-gray-800 hover:bg-[#9D0A0A] hover:text-white transition-all duration-200 font-nav text-sm border-b border-gray-100 last:border-b-0 whitespace-nowrap"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`!px-4 !py-2 relative font-nav text-base transition-colors duration-300 text-shadow-sm ${
                          location.pathname === item.path
                            ? "text-[#9D0A0A]"
                            : "hover:text-gray-200"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-[#9D0A0A] transition-all duration-300 ${
                            location.pathname === item.path ? "w-full" : "w-0"
                          }`}
                        ></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* LANGUAGE DROPDOWN */}
            <div ref={dropdownRef}>
              <DropdownMenu>
                <DropdownMenuTrigger
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="!ml-6 bg-white/10 backdrop-blur-sm text-white !py-2.5 !px-5 rounded-full inline-flex items-center gap-2 font-nav text-sm hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <span className="text-lg">{language === "en" ? "🇬🇧" : "🇸🇦"}</span>
                  <span className="font-medium">{language === "en" ? "English" : "العربية"}</span>
                  <FiChevronDown className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent isOpen={isLangOpen}>
                  <DropdownMenuItem
                    active={language === "en"}
                    onClick={() => {
                      setLanguage("en");
                      setIsLangOpen(false);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">🇬🇧</span>
                      <span className="font-medium">English</span>
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    active={language === "ar"}
                    onClick={() => {
                      setLanguage("ar");
                      setIsLangOpen(false);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">🇸🇦</span>
                      <span className="font-medium">العربية</span>
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* DESKTOP WHATSAPP BUTTON */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="!ml-4 bg-[#9D0A0A] text-white !py-4 !px-8 rounded-full inline-block font-button text-sm hover:bg-black hover:border hover:border-[#9D0A0A] hover:text-[#9D0A0A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaWhatsapp className="!mr-2 inline-block" size={22}/>
              {t.navbar.bookAppointment}
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
                  className="bg-white/90 backdrop-blur-lg rounded-full !p-1 w-18 h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col leading-none !ml-3">
                  <h1 className="text-[#9D0A0A] text-xl font-logo font-black tracking-tighter uppercase text-shadow-md">
                    Ayyan SignAge
                  </h1>
                  <span className="text-white text-base font-logo font-bold tracking-wider !-mt-1 text-shadow-sm">
                    Printing And Advertising
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
            <nav className="flex flex-col items-center justify-center gap-6 text-white flex-1">
              {menuItems.map((item, itemIndex) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: itemIndex * 0.1 + 0.2 }}
                  className="w-full flex flex-col items-center"
                >
                  {item.hasDropdown ? (
                    <div className="w-full flex flex-col items-center">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`font-nav text-xl transition-colors duration-300 text-shadow-md hover:scale-110 transform flex items-center justify-center gap-2 ${
                          location.pathname.startsWith('/services')
                            ? "text-[#9D0A0A]"
                            : "hover:text-[#9D0A0A]"
                        }`}
                      >
                        {item.label}
                        <FiChevronDown className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {/* Mobile Services Dropdown */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="!mt-4 space-y-3 overflow-hidden w-full max-w-xs"
                          >
                            {serviceItems.map((service) => (
                              <motion.div
                                key={service.path}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 }}
                                className="flex justify-center"
                              >
                                <Link
                                  to={service.path}
                                  onClick={() => setIsOpen(false)}
                                  className="block text-center !py-2 !px-4 bg-white/10 rounded-lg text-white hover:bg-[#9D0A0A] transition-all duration-200 font-nav text-sm w-full"
                                >
                                  {service.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-nav text-xl transition-colors duration-300 text-shadow-md hover:scale-110 transform text-center ${
                        location.pathname === item.path
                          ? "text-[#9D0A0A]"
                          : "hover:text-[#9D0A0A]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* MOBILE LANGUAGE SELECTOR */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 !mt-4 justify-center"
              >
                <button
                  onClick={() => {
                    setLanguage("en");
                  }}
                  className={`!px-6 !py-3 rounded-full font-nav text-sm transition-all duration-300 ${
                    language === "en"
                      ? "bg-[#9D0A0A] text-white shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <span className="!mr-2">🇬🇧</span>
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("ar");
                  }}
                  className={`!px-6 !py-3 rounded-full font-nav text-sm transition-all duration-300 ${
                    language === "ar"
                      ? "bg-[#9D0A0A] text-white shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <span className="!mr-2">🇸🇦</span>
                  العربية
                </button>
              </motion.div>

              {/* WHATSAPP BUTTON */}
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="!mt-4 bg-[#9D0A0A] text-white !px-8 !py-4 rounded-full font-button hover:bg-black hover:border hover:border-[#9D0A0A] hover:text-[#9D0A0A] transition-all duration-300 shadow-lg flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="!mr-2 inline-block" size={22} />
                {t.navbar.bookAppointment}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;