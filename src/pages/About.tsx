import VisionMission from '../components/VisionMission'
import AboutServicesSection from '../components/AboutServicesSection'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="w-full h-auto !mx-auto text-white">
      {/* Added flex and items-center here to center the content block */}
      <div className="!mx-auto !p-6 md:!p-12 space-y-8 flex flex-col items-center text-center font-[poppins]">

         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#3d0a0a_0%,transparent_60%)] opacity-30 pointer-events-none" />
        
        {/* Header Section */}
        <div className="flex flex-col items-center !mb-8 md:!mb-12 z-10 !px-4 !pt-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white/80 max-w-4xl shadow-[#9d0a0a]/20 shadow-xl">
            {t.about.ourStory} <span className="text-[#9D0A0A] !ml-2">{t.about.story}</span>
          </h2>
        </div>

        {/* Text Section - Now centered via the parent flex container */}
        <div className="max-w-7xl text-xl md:text-2xl ">
          <p className="!py-4">
            {t.about.paragraph1}
          </p>
          <p className="!py-4">
            {t.about.paragraph2}
          </p>
          <p className="!py-4">
            {t.about.paragraph3}
          </p>
        </div>

         <div className="!mt-16 flex flex-col items-center gap-4 font-[poppins] font-bold">
              <h3 className="text-[#9D0A0A] text-2xl md:text-4xl italic opacity-80 ">
                  {t.about.buildBrand}
              </h3>
              <p className="text-zinc-500 text-base md:text-lg tracking-widest">
                  {t.about.location}
              </p>
          </div>
      </div>

      <div>
        <VisionMission/>
      </div>

      <div>
        <AboutServicesSection/>
      </div>


    </div>
  )
}

export default About