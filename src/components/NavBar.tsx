import Button from "./Button"
import {navigation} from '../webData'
import React from "react"
import ArrowIcon from "./svg/ArrowIcon"

const NavBar:React.FC = () => {
  return (
    <div className="relative w-full">
      <nav className="flex inset-x-0 fixed w-full max-w-9/10 top-5 justify-between items-center text-white bg-black border border-[#747178] rounded-lg p-2 mx-auto">
        <div className="logo"><img className="h-15" src="logo.png"/></div>
        <ul className="flex items-center gap-5">
            {
                navigation.map(navItem => <li className="cursor-pointer" key={navItem.id}>{navItem.name}</li>)
            }
        </ul>
        <div className="btn-container">
            <Button classes='bg-[#ffffff] text-black flex items-center gap-3'>
              <span>Get Started</span>
              <ArrowIcon color="#DC1D13"/>
            </Button>
        </div>
    </nav>
    </div>
  )
}

export default NavBar