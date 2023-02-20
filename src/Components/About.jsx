import React from 'react'
import { useSelector } from 'react-redux'
import image from "../assets/image.jpg"

function About() {
  
  const theme = useSelector(state=>state.theme.value)
  
  let dark=theme


  return (
    <div className={`${dark?"bg-gradient-to-b from-[#000300] to-[#0f1e26]":"bg-gradient-to-b from-white to-[#e5fbf0]"}`} id='about'>
        <div className=' bg-transparent pt-16 grid md:grid-cols-2 pb-16 '>
            <img  src={image}alt="/" className='duration-300 ease-in-out mx-auto max-w-[300px]  rounded-full md:max-w-[400px] md:rounded-2xl md:mx-auto'/>
            <div className='bg-transparent blur-none'>
                <h1 className={`${dark?"text-white":"text-black"} bg-transparent m-4 text-3xl text-center`}>About Me</h1>
                <p className={`${dark?"text-white":"text-black"} bg-transparent text-center m-4 md:mt-20 md:mr-8`}>Self thaught React developer</p>
                <button onClick={()=>{window.open("https://1drv.ms/b/s!AulwaNCvuBo2gwDb2qnkYwMlW_6w")}} className='text-white flex justify-center mx-auto  bg-gradient-to-br from-[#40d9bd] to-[#4ad29a] rounded-xl w-[200px] h-[50px] p-3 '>Download CV</button>
            </div>       
        </div>

    </div>
  )
}

export default About
