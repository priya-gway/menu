import React from 'react'
import Tour from './Tour'

const Tours = ({tour,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tour.map((trip)=>{
          return <Tour key={trip.id} {...trip} removeTour={removeTour}/>
        })}
      </div>
    </section>
  )
}

export default Tours