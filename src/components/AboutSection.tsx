import SectionContent from "./SectionContent"


const AboutSection = () => {
  return (
    <section className="section2 p-10 mt-10 flex gap-20">
        <div>
            <img src="about_us.png" />
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