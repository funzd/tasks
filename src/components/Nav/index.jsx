"use client"

import Link from 'next/link'
import {useState} from "react"

const Nav = () =>{
  const [active, setActive] = useState(true)
  const style = "font-bold rounded-full bg-cyan-500 p-1"
  const On = () =>{
    setActive(true)
  }
  const Off = () =>{
    setActive(false)
  }

  return <nav  className="border-solid border-b-2 content-center">
    <ul className="flex justify-center m-2">
      <li className="ml-6 mr-6">
        <Link 
          className={(active)?style:"text-gray-500"} 
          onClick={On}
          href="#">
          Owns 
        </Link>
      </li>
      <li className="ml-6 mr-6">
       <Link
          className={(active)?"text-gray-500":style}
          onClick={Off}
          href="#">
          Teams  
        </Link>
      </li>
    </ul>
  </nav>
}

export default Nav
