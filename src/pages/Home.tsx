import AboutSection from '../components/AboutSection';
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Trust from '../components/Trust'
import ServicesSection from '../components/ServicesSection';
import Carousel from '../components/Carousel';
import TeamSection from '../components/TeamSection';

const Home = () => {
  return (
    <div>
       <Hero/>
       <AboutSection/>
       <Stats/>
       <ServicesSection/>
       <Trust/>
       <Carousel/>
       <TeamSection/>
    </div>
  )
}

export default Home
