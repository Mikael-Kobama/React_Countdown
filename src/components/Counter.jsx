import React from 'react'
import "./Counter.css"

const Counter = ({title, number}) => {
  return (
    <div className='counter'>
      <div className="counter-number">{number}</div>
      <h3 className="counter-text">{title}</h3>
    </div>
  )
}

export default Counter
