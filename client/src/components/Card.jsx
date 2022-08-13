import React from 'react';

export const Card = (props) => {
  return (
    <div className='cd'>
      <div className="ig">
        <img className="ig" src={props.pic} alt="Avatar" />
      </div>
      <div className="cont">
        <h5>Speaker</h5>
        <h2>{props.name}</h2>
        <p>{props.title}</p>
      </div>
    </div>
  )
}
