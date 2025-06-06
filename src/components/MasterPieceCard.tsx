import type { masterCard } from "../models/masterCard"

const MasterPieceCard:React.FC<masterCard> = ({Icon, title, description}) => {
  return (
    <div className="masterCard p-5 rounded-xl h-[230px] w-[250px]">
        <Icon />
        <div className="mt-5 font-medium text-xl">{title}</div>
        <p className="mt-3">{description}</p>
    </div>
  )
}

export default MasterPieceCard