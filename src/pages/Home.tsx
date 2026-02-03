import AboutSection from '../components/AboutSection';
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Trust from '../components/Trust'
import ServicesSection from '../components/ServicesSection';
import Carousel from '../components/Carousel';
const Home = () => {
  return (
    <div>
       <Hero/>
       <AboutSection/>
       <Stats/>
       <ServicesSection/>
       <Trust/>
       <Carousel/>
    </div>
  )
}

export default Home
