import React from 'react'
import type { input } from '../models/input'

const Input:React.FC<input> = ({placeholder,type, classes}) => {
  let customClasses = ' border border-[#F0F1F5] rounded-xl w-full p-3';
  if(classes) customClasses += ` ${classes}`
  return (
    <>
      {
        type==="input" && <input type='text' placeholder={placeholder} className={customClasses} />
      }
      {
        type === "textarea" && <textarea placeholder={placeholder} className={customClasses}/>
      }
    </>
  )
}

export default Input