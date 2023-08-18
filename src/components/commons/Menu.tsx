import Link from 'next/link'
 
 export default function Menu() {
  return (
    <div> 

    <hr />
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/About">About Us</Link>
      </li>
      <li>
        <Link href="/Login">Login</Link>
      </li>
    </ul>

    </div>
  ) }