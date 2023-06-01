"use client"

import Link from 'next/link'
import {useState} from "react"

const Nav = () =>{
  const [active, setActive] = useState(true)
  const style = "font-bold rounded-full bg-cyan-500 px-4"
  const On = () =>{
    setActive(true)
  }
  const Off = () =>{
    setActive(false)
  }

  return <nav  className="border-solid border-b-2 content-center">
    <ul className="flex justify-center">
      <li className="mx-6">
        <Link 
          className={(active)?style:"text-gray-500"} 
          onClick={On}
          href="/owns/">
          Owns 
        </Link>
      </li>
      <li className="mx-6">
       <Link
          className={(active)?"text-gray-500":style}
          onClick={Off}
          href="/teams/">
          Teams  
        </Link>
      </li>
    </ul>
  </nav>
}

export default Nav
