import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
      <h1>Events Page</h1>
      <div>
        <Link href='#'>
          <img src="#" alt="" />
          <h2>Events in London</h2>
        </Link>
        <Link href='#'>
          <img src="#" alt="" />
          <h2>Events in los angeles</h2>
        </Link>
        <Link href='#'>
          <img src="#" alt="" />
          <h2>Events in barcelona</h2>
        </Link>
        <Link href='#'>
          <img src="#" alt="" />
          <h2>Events in azna</h2>
        </Link>
      </div>
    </>
  )
}

export default Page