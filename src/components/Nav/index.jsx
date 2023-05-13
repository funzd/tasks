import Link from 'next/link'

const Nav = () =>
  <nav >
    <ul className="flex justify-center">
      <li className="ml-6 mr-6">
        <Link className="rounded-full bg-cyan-500 p-1" 
          href="#">
          Owns 
        </Link>
      </li>
      <li className="ml-6 mr-6">
       <Link href="#">
          Teams  
        </Link>
      </li>
    </ul>
  </nav>

export default Nav
