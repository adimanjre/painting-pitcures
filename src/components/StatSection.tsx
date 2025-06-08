import { statContent } from "../webData"
import StatCard from "./StatCard"

const StatSection = () => {
  return (
    <section className="flex gap-5 mt-10 flex-wrap">
        {
            statContent.map(data => <StatCard key={data.name} number={data.number} name={data.name}/>)
        }
    </section>
  )
}

export default StatSection