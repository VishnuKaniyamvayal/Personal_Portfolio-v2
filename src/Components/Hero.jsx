import React from 'react'
import {BsChevronCompactDown} from "react-icons/bs"
function Hero() {
  return (
    <div className='text-white' id='home'>
        <div className='flex flex-col my-auto text-center h-screen mt-[-45px] justify-center p-4'>
        <h1 className='text-6xl md:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#36dfc0] to-[#B9FFF8] ' >Hi there</h1>
        <h1 className='mt-4 text-xl md:text-2xl xl:text-3xl font-semibold '>I am Vishnu</h1>
        <h1 className='mt-4 md:text-2xl xl:text-3xl font-semibold cursor-pointer'>I am a front end developer</h1>
        <h1 className='sm: text-gray-500 mt-8 animate-bounce md:hidden'>Scroll down</h1>
        <BsChevronCompactDown className='hidden md:flex mx-auto my-4 animate-bounce text-gray-500 bg-transparent' size={70}/>
        </div>   
    </div>
  )
}

export default Hero