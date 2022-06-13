import React from 'react'

export const GifItem = ({id, title, url}) => {

  return (
    <div className='card'>
        <img width='70%' height='70%' src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
