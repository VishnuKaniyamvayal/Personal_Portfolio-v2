import React,{useState} from 'react'
import {BsChevronCompactDown} from "react-icons/bs"
function Hero() {
  const [dark,setDark] = useState(true)
  return (
    <div className='' id='home'>
        <div className={`flex flex-col my-auto text-center h-screen mt-[-45px] justify-center p-4 ${dark?"bg-[#00300]":"bg-white"}`}>
        <h1 className={`bg-transparent text-6xl md:text-8xl xl:text-9xl font-bold  ${dark?"bg-clip-text bg-gradient-to-tr from-[#36dfc0] to-[#B9FFF8] text-transparent":"text-[#55c1ad]"} `} >Hi there</h1>
        <h1 className={` bg-transparent mt-4 text-xl md:text-2xl xl:text-3xl font-semibold ${dark?"text-white":"text-[#00300]"}`}>I am Vishnu</h1>
        <h1 className={` bg-transparent mt-4 md:text-2xl xl:text-3xl font-semibold cursor-pointer ${dark?"text-white":"text-[#00300]"}`}>I am a front end developer</h1>
        <h1 className={`bg-transparent mt-8 animate-bounce md:hidden ${dark?"text-white":"text-[#00300]"}`}>Scroll down</h1>
        <BsChevronCompactDown className={`hidden md:flex mx-auto my-4 animate-bounce bg-transparent ${dark?"text-white":"text-[#00300]"}`} size={70}/>
        </div>   
    </div>
  )
}

export default Hero