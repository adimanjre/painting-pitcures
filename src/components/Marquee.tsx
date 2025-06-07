import { logoList } from "../webData"
import MarqueeCard from "./MarqueeCard"

const Marquee = () => {
  return (
    <div className="flex gap-5 mt-8">
        {
            logoList.map(logo => <MarqueeCard key={logo.id} url={logo.url} />)
        }
    </div>
  )
}

export default Marquee