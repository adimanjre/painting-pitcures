
import './App.css'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import MasterPieceSection from './components/MasterPieceSection'
import NavBar from './components/NavBar'
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
    </div>
  )
}

export default App
