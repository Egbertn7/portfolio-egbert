import { Routes, Route } from "react-router-dom";

// bagian components (commponents)
// import FaqComponent from "./components/FaqComponent";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from './components/FooterComponent';

// bagian halaman website (pages)
import HomePage from './pages/HomePage';
import PortofolioPage from './pages/PortofolioPage';
import TestimonialPage from './pages/TestimonialPage';
import SyaratPage from './pages/SyaratPage';
import FaqPage from './pages/FaqPage';



function App() {
  return (
    <div>
    <NavbarComponent /> 

      <Routes>
      <Route path="/portfolio-egbert" Component={HomePage}/>
        <Route path="/home" Component={HomePage}/>
        <Route path="/portofolio" Component={PortofolioPage}/>
        <Route path="/testimonial" Component={TestimonialPage}/>
        <Route path="/faq" Component={FaqPage}/>
        <Route path="/about" Component={SyaratPage}/>
      </Routes>

      <FooterComponent />
      
    </div>
  )
}

export default App
