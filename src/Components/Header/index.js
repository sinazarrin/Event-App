import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div>
        <header>
        <nav>
          <Image />
          <Link href='/' className=''>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/about-us'>About us</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header