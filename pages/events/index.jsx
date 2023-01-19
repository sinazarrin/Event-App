import Link from 'next/link'
import React from 'react'

const EventsPage = ({data}) => {

  return (
    <>
      
      <div className="events_page">
        {data.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="card">
            <img src={ev.image} alt={ev.title} width={300} height={300} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async() => {
  const {events_categories} = await import('/data/data.json')

  return {
    props:{
      data: events_categories
    }
  }
}

export default EventsPage