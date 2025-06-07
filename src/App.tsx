
import './App.css'
import AboutSection from './components/AboutSection'
import CaseStudySection from './components/CaseStudySection'
import HeroSection from './components/HeroSection'
import MasterPieceSection from './components/MasterPieceSection'
import NavBar from './components/NavBar'
import ServiceSection from './components/ServiceSection'
import StatSection from './components/StatSection'
import WorkSection from './components/WorkSection'

function App() {
 
  return (
    <div className='container mx-auto px-14'>
      <NavBar/>
      <HeroSection/>
      <MasterPieceSection/>
      <AboutSection/>
      <StatSection/>
      <WorkSection/>
      <ServiceSection/>
      <CaseStudySection/>
    </div>
  )
}

export default App
