import React from 'react';
import bookcover from '../images/bookcover.jpg';

const Card = () => {
  return (
    <div className='w-[250px] h-[300px] bg-slate-400 shadow-md rounded-[10px] flex flex-col p-2'>
      <div><img src={bookcover}/></div>
      <div>Update</div>
      <div>Delete</div>
    </div>
  )
}

export default Card