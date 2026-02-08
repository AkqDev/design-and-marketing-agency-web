import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import alAman from "../assets/alAman.png";
import bias from "../assets/bias.png";
import stitch from "../assets/stitch.png";
import alEmaar from "../assets/alEmaar.png";
import fine from "../assets/fine.png";
import burger from "../assets/burger.png";
import digital from "../assets/digital.png";
import rkan from "../assets/rkan.png";

gsap.registerPlugin(ScrollTrigger);

const Trust = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const brandRefs = useRef<(HTMLDivElement | null)[]>([]);

  const brands = [
    { img: alAman },
    { img: bias },
    { img: stitch },
    { img: alEmaar },
    { img: fine },
    { img: burger },
    { img: digital },
    { img: rkan },
  ];

  const duplicatedBrands = [...brands, ...brands];

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---------- Title Animation ---------- */
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      /* ---------- Infinite Brand Scroll ---------- */
      if (scrollContainerRef.current) {
        const scrollWidth =
          scrollContainerRef.current.scrollWidth / 2;

        gsap.to(scrollContainerRef.current, {
          x: -scrollWidth,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(
              (x) => parseFloat(x) % scrollWidth
            ),
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full !py-12 md:!py-24 overflow-hidden md:min-h-[500px] flex flex-col justify-center relative"
    >
      {/* Heading Section */}
      <div className="!pb-8 md:!pb-16">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-black text-center tracking-tighter uppercase italic text-white/90"
        >
          Brands That <span className="text-[#9D0A0A]">Trust Us</span>
        </h2>
      </div>

      {/* Brands Scrolling Section */}
      <div className="relative overflow-hidden w-full">
        {/* Shadow Overlays */}
        <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none blur-xl"></div>
        <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none blur-xl"></div>

        {/* Scrolling Brands Container */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-16 md:gap-24 !py-4 bg-white h-65"
          style={{ width: "max-content" }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              ref={(el) => (brandRefs.current[index] = el)}
              className="flex items-center justify-center min-w-[150px] md:min-w-[180px] h-32 px-12 cursor-pointer transition-all duration-300"
            >
              <span className="flex items-center justify-center w-full h-full">
                <img
                  src={brand.img}
                  alt={`Brand ${index + 1}`}
                  className="max-h-35 object-contain transform transition-transform duration-300 hover:scale-105"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
