import SectionContent2 from "./SectionContent2"
import Marquee from "./Marquee"

const PartnerSection = () => {
  return (
    <section className="mt-10 p-10">
        <SectionContent2
         title="Our Partners"
         heading="At Painting Pictures powerful ideas meet slick execution."
         description="We’re your one stop solution for all your digital marketing needs. Whether it’s bespoke social media campaigns or expertly crafted digital ads, we handle it all from inception to delivery. Just share your goals, and we’ll bring them to fruition."
        >
            <Marquee/>
        </SectionContent2>
    </section>
  )
}

export default PartnerSection