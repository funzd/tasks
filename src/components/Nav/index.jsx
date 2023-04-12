import Link from 'next/link'
const Nav = () =>
  <nav>
    <ul className="flex gap-4">
      <Link href="#">
        <button className="rounded-full bg-red-300 p-1">Owns</button> 
      </Link>
      <Link href="#">
        <li>Teams</li>
      </Link>
    </ul>
  </nav>

export default Nav
