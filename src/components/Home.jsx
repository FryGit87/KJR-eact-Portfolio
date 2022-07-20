import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-purple-600' >Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kym Reilly</h1>
            <h2 className='text-4xl sm:text-7x1 font-bold text-purple-600'>I'm a Web Developer</h2>
            <div>
                <button className='text-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:text-purple-600 hover:font-bold '>View Work   
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home