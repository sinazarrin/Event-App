import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventPerCityPage = ({ showData, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Event is {pageName}</h1>
      <div className="content">
        {
          showData.map(ev => (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} className="card">
              <Image width={300} height={300} src={"/" + ev.image} alt="" />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}


export default EventPerCityPage

export const getStaticPaths = async () => {
  const { events_categories } = await import('/data/data.json')
  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  })
  return {
    paths: allPaths,
    fallback: false,
  };

}

export const getStaticProps = async (context) => {
  const { allEvents } = await import('/data/data.json')
  const id = context?.params.cat

  const showData = allEvents.filter(ev => ev.city === id)
  return {
    props: { showData, pageName: id }
  }
}