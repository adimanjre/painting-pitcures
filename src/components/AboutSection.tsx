
import SectionContent from "./SectionContent"
import useInterSectionObserver from "../hooks/use-intersection-observer";


const AboutSection = () => {

  const options = {
    root:null,
    rootMargin:"0px",
    threshold:0.15,
  }
  const [target, isVisible, ready, handleBlur] = useInterSectionObserver(options);


  return (
    <section className="section2 p-10 mt-10 flex gap-20 flex-wrap md:flex-nowrap ">
        <div ref={target} >
            <img className={!ready ? 'filterBlur' :'lazyLoading'} onLoad={handleBlur} src={isVisible ? 'about_us.png' : 'about_us_lazy.jpg' } />
        </div>
        <SectionContent 
        title="About Us" 
        heading="Discover the power of creativity &
        dexterity combined."
        description="Our team of designers, video editors, marketers, and creators collaborate to shape dynamic strategies. Witness innovation as we elevate your brand with captivating content and seamless campaigns, transforming the digital landscape."
        >

        </SectionContent>
    </section>
  )
}

export default AboutSection