
import Button from "./Button"
import SectionContent from "./SectionContent"
import ArrowIcon from "./svg/ArrowIcon"
import useInterSectionObserver from "../hooks/use-intersection-observer"

const CaseStudySection = () => {
  const options = {
    root:null,
    threshold:0.15
  }
  const [target, visible, ready, handleBlur] = useInterSectionObserver(options);
  return (
    <section className="section1 p-10 mt-10 grid md:grid-cols-2 gap-10">
        <SectionContent 
        title="Case Study" 
        heading="300% increase in Lead Gen For Briggate Education"
        description="Our innovative digital marketing strategies have revolutionised lead generation for Briggate. By leveraging the power of engaging video content, we have successfully increased leads by 300%. Partnering with us means aligning with a team dedicated to driving your growth and success."
        >
            <Button classes="bg-white flex gap-3 items-center mt-8 text-black">
                <span>Get in Touch</span>
                <span><ArrowIcon color="#303030"/></span>
            </Button>
        </SectionContent>
        <div  ref={target} className="m-auto">
            <img 
            onLoad={handleBlur}
            src={visible?"case-study-1.png":"case-study-1_lazy.jpg"} 
            className={`h-[500px] object-contain ${!ready?"filterBlur":"lazyLoading"}`} />
        </div>
    </section>
  )
}

export default CaseStudySection