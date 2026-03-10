import AboutSection from '../components/AboutSection';
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Trust from '../components/Trust'
import ServicesSection from '../components/ServicesSection';
import Carousel from '../components/Carousel';
import TeamSection from '../components/TeamSection';
import Testimonials from '../components/Testimonials'
import OurCategories from '../components/OurCategories';

const Home = () => {
  return (
    <div>
       <Hero/>
       <AboutSection/>
       <Stats/>
       <OurCategories/>
       <ServicesSection/>
       <Trust/>
       <Carousel/>
       <TeamSection/>
       <Testimonials/>
    </div>
  )
}

export default Home
