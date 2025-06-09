import { useState } from "react"
import { testimonialsData } from "../webData"
import { LeftQuoteIcon, RightQuoteIcon } from "./svg/QuotIcon"


const Slider = () => {

    const [index,setIndex] = useState(0);

   const handleDotClick = (index:number)=>{
    setIndex(index);
   }

  return (
    <div className="flex items-center justify-between mt-10 gap-10">
        <div className="hidden md:block"> 
            <LeftQuoteIcon/>
        </div>
        <div>
            <div className="relative w-full max-w-[800px] min-h-[200px] overflow-hidden">
                <ul 
                className={`relative w-full h-full flex transition-all duration-500`}
                style={{transform:`translateX(-${index * 100}%)`}}
                >
                {
            testimonialsData.map(data => <li key={data.id} className="flex flex-col items-center w-full p-5 h-full basis-[100%] grow-0 shrink-0">
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
            </li>)
        }
            </ul>
            </div>
            <div className="flex justify-center gap-5 mt-5">
                {
                    testimonialsData.map((data) => 
                    <span 
                    key={data.id} 
                    className={`h-4 w-4 block rounded-full cursor-pointer ${data.id === index ? 'bg-[#DC1D13]':' bg-[#D9D9D9]'}`}
                    onClick={() => handleDotClick(data.id)}
                    >

                    </span>)
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