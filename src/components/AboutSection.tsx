import AboutLogo from "../assets/AboutLogo.png";

const AboutSection = () => {
  return (
    <section 
      className="w-full !py-20 bg-black text-white !px-6 md:!px-20 h-auto"
      style={{
        fontFamily: 'Ginto - 400FamilyGinto, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        fontWeight: 400,
        color: 'rgb(229, 235, 250)',
        fontSize: '12px',
        lineHeight: '15px'
      }}
    >
      {/* Top Header Section */}
      <div className="text-center !mb-5 md:!mb-20 ">
        <h1 className="text-3xl md:text-5xl text-[#D5171C] drop-shadow-2xl font-bold">
          Meet Ayyan SignAge
        </h1>
      </div>

      {/* Main Content Wrapper - Centered Flex Container */}
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row !items-center !justify-center gap-16 md:gap-24 md:!mt-15">
        
        {/* Left: Text Content */}
        <div className=" text-center md:text-left !space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.3]">
            A 360° Result-Oriented <br />
            <span className="text-[#D5171C] opacity-80">Digital Marketing Agency</span>
          </h2>

          <div className="!space-y-4 text-gray-300 max-w-xl">
            <p className="text-xl font-medium hidden md:block">At Ayyan SignAge, we promise results.</p>
            <p className="leading-relaxed text-lg">
             We are a professional Printing & Advertising company, providing
             innovative signage and advertising solutions that help brands stand out
             and create a strong visual impact.</p>
          </div>

          <button className="!mt-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-bold !px-12 !py-4 rounded-full shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
            More About Us
          </button>
        </div>

        {/* Right: Image/Logo */}
        <div>
          <img
            src={AboutLogo}
            alt="Velocity Digital Marketing Logo"
            className="w-full w-auto h-auto object-contain animate-pulse-slow"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;