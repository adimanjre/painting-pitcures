import { workImages } from "../webData"
import Button from "./Button"
import YouTubeIcon from "./svg/YouTubeIcon"
import useInterSectionObserver from "../hooks/use-intersection-observer"

const Carousel = () => {
     const options = {
    root: null,
    threshold:0.15,
  }
  const [target,visible, ready, handleBlur] = useInterSectionObserver(options);
  return (
    <div ref={target} className="w-full">{
        workImages.map(data => <div key={data.id} className="relative pt-20 h-88">
            <div className="absolute z-10 bottom-8 left-10">
                <p className="text-xl font-medium">IPL- Jeet Ki Wish</p>
            <span className="mt-5">Dealshare</span>
            <Button classes="bg-[#DC1D13] text-white flex items-center gap-3 mt-5">
                <span>Watch Video</span> 
                <span><YouTubeIcon color="white"/></span>
            </Button>
            </div>
            <img onLoad={handleBlur} src={visible?data.url:data.lazyLoading} className={`${ !ready?"filterBlur " : "lazyLoadin" } absolute z-0 top-0 h-full object-cover rounded-2xl`}  />
            
        </div>)
        }</div>
  )
}

export default Carousel