
import './App.css'
import AboutSection from './components/AboutSection'
import CaseStudySection from './components/CaseStudySection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MasterPieceSection from './components/MasterPieceSection'
import NavBar from './components/NavBar'
import PartnerSection from './components/PartnerSection'
import ReelSection from './components/ReelSection'
import ServiceSection from './components/ServiceSection'
import StatSection from './components/StatSection'
import TestimonialSection from './components/TestimonialSection'
import WorkSection from './components/WorkSection'

function App() {
 
  return (
    <div className='container mx-auto md:px-14 px-5'>
      <NavBar/>
      <HeroSection/>
      <MasterPieceSection/>
      <AboutSection/>
      <StatSection/>
      <WorkSection/>
      <ServiceSection/>
      <CaseStudySection/>
      <PartnerSection/>
      <ReelSection/>
      <TestimonialSection/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
