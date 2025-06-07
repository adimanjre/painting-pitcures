import Carousel from "./Carousel"
import SectionContent from "./SectionContent"

const WorkSection = () => {
  return (
   <section className="section1 p-10 mt-10 grid grid-cols-2 gap-20">
    <SectionContent 
    title="Our Work" 
    heading="At Painting Pictures  powerful ideas meet
    slick execution."
    description="We’re your one stop solution for all your digital marketing needs. Whether it’s bespoke social media campaigns or expertly crafted digital ads, we handle it all from inception to delivery. Just share your goals, and we’ll bring them to fruition."
    >
    </SectionContent>
    <Carousel/>
   </section>
  )
}

export default WorkSection