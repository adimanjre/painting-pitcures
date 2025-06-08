import { serviceData } from "../webData"
import Button from "./Button"
import SectionContent from "./SectionContent"
import ArrowIcon from "./svg/ArrowIcon"
import ServiceCard from "./serviceCard"

const ServiceSection = () => {
  return (
    <section className="section2 p-10 mt-10 grid md:grid-cols-2 gap-10">
        <div className="grid lg:grid-cols-2 gap-5">
            {
              serviceData.map(data => <ServiceCard key={data.id} Icon={data.icon} title={data.name} description={data.description}/>)
            }
        </div>
        <SectionContent 
        title="Our Services"
        heading="We are here to bridge the gap between your business and your customers"
        description="Our mission is clear: we’re here to amplify your business’s voice, captivating your target audience. Each campaign is meticulously designed with your customers at the forefront. Your satisfaction fuels our drive; when your customers are delighted, so are we."
        >
            <Button classes="bg-[#DC1D13] text-white flex gap-3 items-center mt-8">
                <span>Get in Touch</span>
                <span><ArrowIcon color="white"/></span>
            </Button>
        </SectionContent>
    </section>
  )
}

export default ServiceSection