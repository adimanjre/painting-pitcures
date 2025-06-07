import React from 'react'
import type { section } from '../models/section'

const SectionContent2:React.FC<section> = ({title, heading, description, children}) => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
            <div className="h-1 w-6 bg-red-600"></div>
            <span className="text-xl font-[EB_Garamond] font-bold">{title}</span>
            <div className="h-1 w-6 bg-red-600"></div>
        </div>
      <h2 className="text-4xl text-center font-bold mt-5">
            {heading}
        </h2>
        <p className="text-lg text-center font-medium mt-5">{description}</p>
        {
            children
        }
    </div>
  )
}

export default SectionContent2