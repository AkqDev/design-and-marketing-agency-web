import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLogo from "../assets/AboutLogo.png";
import { Link } from "react-router-dom";
import { FlipWords } from "./ui/flip-words";
import { useLanguage } from "../contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);


  const flipWords = [t.about.companyName, t.about.companyName, t.about.companyName];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    if (titleRef.current) {
      gsap.set(titleRef.current, { y: 50, opacity: 0 });
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current.children, { y: 30, opacity: 0 });
      tl.to(
        subtitleRef.current.children,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }

    if (textRef.current) {
      gsap.set(textRef.current.children, { y: 20, opacity: 0 });
      tl.to(
        textRef.current.children,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }

    if (buttonRef.current) {
      gsap.set(buttonRef.current, { scale: 0.8, opacity: 0 });
      tl.to(
        buttonRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }


    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full !py-20 bg-black text-white !px-6 md:!px-20 h-auto relative overflow-hidden"
      style={{
        fontFamily: 'Ginto, ui-sans-serif, system-ui, sans-serif',
        fontWeight: 400,
        color: "rgb(229, 235, 250)",
      }}
    >
      <div className="text-center !mb-5 md:!mb-20 relative z-10">
      {/* Header Section */}
        <div className="text-center mb-20">
          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none"
          >
            {t.about.meet}{" "}
            <span className="inline-block text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <FlipWords words={flipWords} duration={2000} />
            </span>
          </h1>

        </div>
      </div>

      {/* FIXED CONTAINER: Image top on mobile, Text left on desktop */}
      <div className="max-w-8xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-evenly gap-16 md:gap-24 md:!mt-15 relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-8">
          <h2
            ref={subtitleRef}
            className="text-3xl font-bold leading-[1.3]"
          >
            <span className="block font-[poppins]">{t.about.subtitle1}</span>
            <span className="block text-[#D5171C] opacity-80 md:text-5xl font-[poppins] !my-3">
              {t.about.subtitle2}
            </span>
          </h2>

          <div ref={textRef} className="space-y-4 text-gray-200 max-w-3xl font-[poppins]">
            <p className="text-xl font-medium hidden md:block">
              {t.about.promise}
            </p>
            <p className="leading-relaxed text-xl !pt-4 text-white">
              {t.about.description}
            </p>
          </div>

          <Link to="/about">
            <motion.button
              ref={buttonRef}
              className="w-100 !mt-6 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold !px-12 !py-4 rounded-full font-[poppins]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.about.button}
            </motion.button>
          </Link>
        </div>

        {/* Image Content - Displays first on mobile due to flex-col-reverse */}
        <div  className="relative !mt-10 md:mt-0 h-100 md:h-130 ">
          <img
            src={AboutLogo}
            alt="Ayyan SignAge img"
            className="w-full h-full object-contain relative z-10 transition-transform duration-500 cursor-pointer rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;