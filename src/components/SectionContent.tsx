import type { section } from "../models/section"

const SectionContent:React.FC<section> = ({title, heading,description, children}) => {
  return (
    <div>
        <div className="flex items-center gap-2">
            <div className="h-1 w-6 bg-red-600"></div>
            <span className="text-xl font-[EB_Garamond] font-bold">{title}</span>
        </div>
        <h2 className="text-4xl font-bold mt-5">
            {heading}
        </h2>
        <p className="text-lg font-medium mt-5">{description}</p>
        {
            children
        }
    </div>
  )
}

export default SectionContent