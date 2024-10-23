import React, { useEffect, useState } from 'react'
import Loading from './Loading';

import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';
const App = () => {
  const [isLoading , setIsLoading] = useState(true);
  const [tour,setTour] = useState([])
   
  const removeTour =(id)=>{
    const newTours = tour.filter((trip) => trip.id !== id);
    setTour(newTours)
  }
  const fetchTour =  async () =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      // console.log(response);
      const tours = await response.json()
      // console.log(tours);
      setTour(tours)
    } catch (error) {
      console.log(error);   
    }
    setIsLoading(false)
  }

 useEffect(()=>{
  fetchTour()
 },[])
 
  if(isLoading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tour.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button type='button' className='btn' style={{marginTop:'2rem'}} 
        onClick={()=>fetchTour()}>refresh</button>
      </div>
    </main>
  }

  return (
    <main>
      <Tours tour={tour} removeTour={removeTour} />
    </main>
  )
}

export default App
