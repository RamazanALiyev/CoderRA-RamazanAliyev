import React from 'react';
import './_coursename.scss';

function CourseName({name, payment, time}) {
  return (
    <div className='CourseName'>
        <h4>Front-End Proqramlaşdırma</h4>
        <p>{name}</p>
        <div>
        <span className='payment'>{time}</span>
        <span className='time'>{payment}</span>
        </div>
    </div>
  )
}

export default CourseName