import VisionMission from '../components/VisionMission'

const About = () => {
  return (
    <div className="w-full h-auto !mx-auto text-white">
      {/* Added flex and items-center here to center the content block */}
      <div className="!mx-auto !p-6 md:!p-12 space-y-8 flex flex-col items-center text-center font-[poppins]">

         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#3d0a0a_0%,transparent_60%)] opacity-30 pointer-events-none" />
        
        {/* Header Section */}
        <div className="flex flex-col items-center !mb-8 md:!mb-12 z-10 !px-4 !pt-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white/80 max-w-4xl shadow-[#9d0a0a]/20 shadow-xl">
            Our <span className="text-[#9D0A0A] !ml-2">Story</span>
          </h2>
        </div>

        {/* Text Section - Now centered via the parent flex container */}
        <div className="max-w-7xl text-xl md:text-2xl ">
          <p className="!py-4">
            I am Adnan Tahir, an entrepreneur passionate about creativity, branding, and professional printing solutions. My journey began in 2016 in collaboration with Mr. M. Ashraf Nawaz (Founder, Barani Science College Talagang), whose mentorship played a key role in shaping my professional direction. We started with Ayyan Media Center, providing digital documentation, design, and printing services to students, schools, and local businesses.
          </p>
          <p className="!py-4">
            Through consistent effort and dedication, I expanded the business in 2018 by installing a Panaflex printing setup in Talagang, transforming the company into Ayyan Printings. With a strong focus on quality signage, panaflex printing, and professional design services, we built a trusted reputation and developed a skilled operational team to serve a growing client base.
          </p>
          <p className="!py-4">
            In 2024, I moved to Saudi Arabia and launched Ayyan Signage Printing & Advertising, expanding our services into digital marketing, SEO, website development, and complete branding solutions. Today, my vision is to provide businesses with all-in-one advertising and printing services under one platform while maintaining creativity, quality, and customer satisfaction.
          </p>
        </div>

         <div className="!mt-16 flex flex-col items-center gap-4 font-[poppins] font-bold">
              <h3 className="text-[#9D0A0A] text-2xl md:text-4xl italic opacity-80 ">
                  Let's build your brand.
              </h3>
              <p className="text-zinc-500 text-base md:text-lg tracking-widest">
                  Ayyan Signage Printing & Advertising — Saudi Arabia
              </p>
          </div>
      </div>

      <div>
        <VisionMission/>
      </div>

    </div>
  )
}

export default About