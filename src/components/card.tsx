import React from 'react';
import bookcover from '../images/bookcover.jpg';


const Card = () => {
  return (
    <div className='w-[250px] h-[320px] bg-slate-400 shadow-md rounded-[10px] flex flex-col p-2 justify-center items-center'>
      <div className='flex flex-row items-center justify-center'><img className='w-[200px] h-[230px]' src={bookcover}/></div>
      <div className='flex flex-row w-[200px] h-[30px] justify-center items-center p-2 m-1 bg-green-300 cursor-pointer'>Update</div>
      <div className='flex flex-row w-[200px] h-[30px] justify-center items-center p-2 m-1 bg-red-300 cursor-pointer'>Delete</div>
      
    </div>
  )
}

export default Card