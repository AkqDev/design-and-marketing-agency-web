import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/966563203251";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full absolute top-0 left-0 z-40 bg-transparent">
        <div className="flex justify-between md:justify-around items-center my-5 md:my-3 px-6 md:px-16">

<Link to="/" className="flex items-center space-x-3 group">
  {/* Logo Image */}
  <img src={logo} alt="logo" className="w-16 h-auto transition-transform duration-300 group-hover:scale-105" />

  {/* Logo Text */}
  <div className="flex flex-col leading-none !ml-4">
    <h1 className="text-[#D61921] text-2xl md:text-3xl font-logo font-black tracking-tighter transform transition-all duration-300 group-hover:text-red-400">
      Ayyan
    </h1>
    <span className="text-white text-lg md:text-xl font-logo font-bold tracking-wider uppercase transform transition-all duration-300 group-hover:text-gray-200 -mt-1">
      SignAge
    </span>
  </div>
</Link>


{/* DESKTOP MENU */}
<div className="hidden md:flex items-center justify-between !p-5 !px-10 text-white">
  <nav>
    <ul className="flex !space-x-8">
      <li>
        <Link
          to="/"
          className="!px-4 !py-2 relative group font-nav text-base hover:text-gray-200 transition-colors duration-300"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D61921] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      
      <li>
        <Link
          to="/about"
          className="!px-4 !py-2 relative group font-nav text-base hover:text-gray-200 transition-colors duration-300"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D61921] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      
      <li>
        <Link
          to="/services"
          className="!px-4 !py-2 relative group font-nav text-base hover:text-gray-200 transition-colors duration-300"
        >
          Services
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D61921] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
      
      <li>
        <Link
          to="/contact"
          className="!px-4 !py-2 relative group font-nav text-base hover:text-gray-200 transition-colors duration-300"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D61921] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </li>
    </ul>
  </nav>
  
  {/* DESKTOP WHATSAPP */}
  <div>
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="!ml-10 bg-[#D61921] text-white !py-4 !px-8 rounded-full inline-block font-button text-sm hover:bg-black hover:border hover:border-[#D61921] hover:text-[#D61921] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Book an Appointment
    </a>
  </div>
</div>         

          {/* MOBILE MENU ICON */}
          <button onClick={() => setIsOpen(true)}
            className="md:hidden !p-3 rounded-full bg-white/10 backdrop-blur-sm !mr-2 shadow-lg text-white hover:bg-white/20 transition-all duration-300"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-black z-50 flex flex-col"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center !p-6">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 group">
                <img src={logo} alt="logo" className="w-16 h-auto transition-transform duration-300 group-hover:scale-105" />
                <div className="flex flex-col leading-none !ml-3">
                  <h1 className="text-[#D61921] text-xl font-logo font-black tracking-tighter">
                    Ayyan
                  </h1>
                  <span className="text-white text-base font-logo font-bold tracking-wider uppercase -mt-1">
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

              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="font-nav text-xl hover:text-[#D61921] transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="font-nav text-xl hover:text-[#D61921] transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)}
                className="font-nav text-xl hover:text-[#D61921] transition-colors duration-300"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="font-nav text-xl hover:text-[#D61921] transition-colors duration-300"
              >
                Contact
              </Link>

              {/* WHATSAPP BUTTON */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 bg-[#D61921] text-white !px-8 !py-4 rounded-full font-button hover:bg-black hover:border hover:border-[#D61921] hover:text-[#D61921] transition-all duration-300 shadow-lg"
              >
                Book an Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;