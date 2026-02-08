import AboutSection from '../components/AboutSection';
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Trust from '../components/Trust'
import ServicesSection from '../components/ServicesSection';
import Carousel from '../components/Carousel';
import Team from '../components/Team';

const Home = () => {
  return (
    <div>
       <Hero/>
       <AboutSection/>
       <Stats/>
       <ServicesSection/>
       <Trust/>
       <Carousel/>
       <Team/>
    </div>
  )
}

export default Home
