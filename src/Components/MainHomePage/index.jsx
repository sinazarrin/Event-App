import Link from 'next/link'
import React from 'react'


const MainHomePage = ({data}) => {
  return (
    <div>
        <main >
        {data.map(ev => {
          return(
            <Link key={ev.id} href={`/events/${ev.id}`}>
              <img width={200} height={'100%'} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>
                {ev.description}
              </p>
            </Link>
          )
        })}
      </main>
    </div>
  )
}

export default MainHomePage

