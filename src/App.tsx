import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WallCladding from "./pages/WallCladding";
import BannerDesigns from "./pages/BannerDesigns";
import NfcCards from "./pages/NfcCards";
import GiftBox from "./pages/GiftBox";
import Broucher from "./pages/Broucher";
import VisitingCards from "./pages/VisitingCards";
import Uniform from "./pages/Uniform";
import CompanyProfile from "./pages/CompanyProfile";
import MenuCards from "./pages/MenuCards";
import AdvertisingServices from './pages/AdvertisingServices';


const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
            {/* Services Categories of DropDown Menus */}
            <Route path="/services/banner-designs" element={<BannerDesigns />} />
            <Route path="/services/nfc-cards-designs" element={<NfcCards />} />
            <Route path="/services/gift-boxes-designs" element={<GiftBox />} />
            <Route path="/services/broucher-designs" element={<Broucher />} />
            <Route path="/services/visiting-cards-designs" element={<VisitingCards />} />
            <Route path="/services/wall-cladding" element={<WallCladding />} />
            <Route path="/services/uniform-designs" element={<Uniform/>} />
            <Route path="/services/company-profile" element={<CompanyProfile/>} />
            <Route path="/services/menu-cards-designs" element={<MenuCards/>} />
            <Route path="/services/advertising" element={<AdvertisingServices/>} />
        </Routes>
        <Footer/>
      </Router>
    </LanguageProvider>
  );
};

export default App;
