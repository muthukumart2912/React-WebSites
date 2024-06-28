import React from 'react'
import './Mainbody.css'
const Mainbody = () => {
  return (
    <section className="maincontent flex justify-center items-center flex-col gap-3  " id='home'>
        <h1 className='text-2xl xl:text-7xl font-semibold tracking-wide text-white'>Plan Your Trip With Travel</h1>
        <h1 className='text-2xl xl:text-7xl font-semibold tracking-wide text-white'>Art</h1>
        <p className='text-xs xl:text-xl text-white font-medium tracking-wide '>Travel to your favourite city with respectful of the </p>
        <p className='text-xs xl:text-xl text-white font-medium tracking-wide'>environment!</p>
        <button className='bg-blue-600 md:px-5 md:py-3 md:rounded-lg md:text-[1rem] font-semibold px-5 py-2 text-sm rounded-md'>Explore Now</button>
    </section>
  )
}

export default Mainbody
