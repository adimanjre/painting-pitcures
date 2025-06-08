import { testimonialsData } from "../webData"
import { LeftQuoteIcon, RightQuoteIcon } from "./svg/QuotIcon"

const Slider = () => {
  return (
    <div className="flex items-center justify-between mt-10 gap-10">
        <div className="hidden md:block"> 
            <LeftQuoteIcon/>
        </div>
        <div>
            <div>
                {
            testimonialsData.map(data => <div key={data.id} className="flex flex-col items-center">
                <div className="flex gap-3">
                    <img src={data.avatar} className="h-14" />
                    <div>
                        <span className="text-lg font-medium">{data.name}</span><br/>
                        <span>{data.occupation}</span>
                    </div>
                </div>
                <div className="text-center mt-5 md:text-xl">
                    {data.testimonial}
                </div>
            </div>)
        }
            </div>
            <div className="flex justify-center gap-5 mt-5">
                {
                    testimonialsData.map((data) => <span key={data.id} className="h-4 w-4 block rounded-full bg-[#D9D9D9] "></span>)
                }
            </div>
        </div>
        <div className="hidden md:block">
            <RightQuoteIcon/>
        </div>
    </div>
  )
}

export default Slider