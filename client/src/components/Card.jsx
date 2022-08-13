import React from 'react';

export const Card = (props) => {
  return (
    <div className='card'>
      <div className="img">
        <img src={props.pic} alt="Avatar" />
      </div>
      <div className="container">
        <h5>Speaker</h5>
        <h2>{props.name}</h2>
        <p>{props.title}</p>
      </div>
    </div>
  )
}
