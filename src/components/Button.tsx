import type React from "react";
import type { button } from "../models/button";



const Button:React.FC<button> = ({children, classes}) => {
    let customeClass = 'rounded-full px-6 py-3 cursor-pointer text-lg font-medium whitespace-nowrap';
    if(customeClass) {
        customeClass += ` ${classes}`;
    }
  return (
    <button className={customeClass}>{children}</button>
  )
}

export default Button