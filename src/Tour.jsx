import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removeTour}) => {
  const [readmore,setReadmore]=useState(false)
  return (

    <article className='single-tour'>
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readmore?info:`${info.substring(0,200)}...`}
          <button className='info-btn' type='button' onClick={()=>setReadmore(!readmore)}>
            {readmore?' show less':' read more'}
          </button>
        </p>
        <button className="btn btn-block delete-btn" type='button' onClick={()=>removeTour(id)}>not intrested</button>
      </div>
    </article>
  )
}

export default Tour