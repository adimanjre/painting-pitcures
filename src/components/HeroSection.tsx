import Button from "./Button"
import styles from './HeroSection.module.css'
import ArrowIcon from "./svg/ArrowIcon"
import Globe from "./svg/Globe"
import YouTubeIcon from "./svg/YouTubeIcon"

const HeroSection = () => {
  return (
    <section className={`hero-section ${styles.bgImage} h-screen`}>
        <div className="hero-section__tagLine text-center text-white pt-44 text-sm md:text-lg font-medium flex gap-5 justify-center items-center">
            <span className="hero-section__tagline--text">Crafting narratives that</span>
            <span>
                <Globe/>
            </span>
            <span className="hero-section__tagline--text">make brands come alive</span>
        </div>

        <h1 className="hero-section__heading text-6xl md:text-8xl font-bold mt-10 text-white text-center font-[EB_Garamond]">
            <span className="text-[#DC1D13]">Your Story</span> 
            <br/> Our Canvas
        </h1>

        <p className="hero-section__description text-white text-center text-lg md:text-xl font-medium mt-10">We’re a video-first digital marketing agency that relies on the power of <br/> storytelling to create powerful brand campaigns
        </p>

        <div className="hero-section__btn-wrapper flex gap-5 justify-center mt-10 flex-wrap">
            <Button classes="bg-[#DC1D13] text-white flex gap-3 items-center"><span>Get in Touch</span>
                <ArrowIcon color="white"/>
            </Button>
            <Button classes="bg-white text-black flex gap-3 items-center">
                <span>Watch Showreel</span>
                <YouTubeIcon color="#343434"/>
            </Button>
        </div>
    </section>
  )
}

export default HeroSection