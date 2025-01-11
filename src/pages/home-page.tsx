import React from 'react'
import Card from '../components/card';

const HomePage = () => {
  return (
    <div className='text-black bg-blue-500 w-full h-screen flex flex-row items-center justify-center'>
    <div className='flex flex-row gap-4'><Card/><Card/></div></div>
  )
}

export default HomePage;