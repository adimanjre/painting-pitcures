import type { masterCard } from "../models/masterCard"

const ServiceCard:React.FC<masterCard> = ({Icon, title, description}) => {
  return (
    <div className="rounded-2xl border border-white bg-[#3D3D3D] p-5">
        <Icon/>
        <div className="mt-3 font-medium text-xl">{title}</div>
        <p className="mt-2">{description}</p>
    </div>
  )
}

export default ServiceCard