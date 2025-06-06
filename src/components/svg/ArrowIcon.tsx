import type React from "react"
import type { icons } from "../../models/icons"

const ArrowIcon:React.FC<icons> = ({color}) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7279 21.7279L21.2132 0.514719L0 9L4.94975 13.9497L16.9706 4.75736L7.77817 16.7782L12.7279 21.7279Z" fill={color}/>
</svg>

  )
}

export default ArrowIcon