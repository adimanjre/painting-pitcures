import type { statCard } from "../models/statCard"

const StatCard:React.FC<statCard> = ({number,name}) => {
  return (
    <div className="text-center grow border border-[#747178] rounded-2xl p-8 text-[#747178]">
        <span className="text-6xl font-bold ">{number}+</span>
        <p className="mt-3">{name}</p>
    </div>
  )
}

export default StatCard