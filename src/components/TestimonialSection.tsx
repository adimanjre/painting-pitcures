import SectionContent2 from "./SectionContent2"
import Slider from "./Slider"

const TestimonialSection = () => {
  return (
    <section className="section1 mt-10 p-10">
        <SectionContent2
         title="Testimonials"
         heading="Our success, echoed by our clients"
         description="We’re your one stop solution for all your digital marketing needs. Whether it’s bespoke social media campaigns or expertly crafted digital ads, we handle it all from inception to delivery. Just share your goals, and we’ll bring them to fruition."
        >
            <Slider/>
        </SectionContent2>
    </section>
  )
}

export default TestimonialSection