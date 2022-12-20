import React from 'react'
import image from "../assets/image.jpg"

function About() {
  return (
    <div className='bg-gradient-to-b from-[#000300] to-[#0f1e26] ' id='about'>
        <div className=' bg-transparent pt-16 grid md:grid-cols-2 pb-16 '>
            <img  src={image}alt="/" className='duration-300 ease-in-out mx-auto max-w-[300px]  rounded-full md:max-w-[400px] md:rounded-2xl md:mx-auto'/>
            <div className='bg-transparent blur-none'>
                <h1 className='text-white bg-transparent m-4 text-3xl text-center  '>About Me</h1>
                <p className='text-white bg-transparent text-center m-4 md:mt-20 md:mr-8'>I am vishnu v. I am a front end developer, i am currently doing my engineering degree in computer science.I am always curious to learn new stuff.I got skills instead of certificates</p>
                <button onClick={()=>{window.open("http://drive.google.com/uc?export=download&id=1LXMx9eaU8bqnyJdB0gu7Pkyd9GI9eEDD")}} className='text-white flex justify-center mx-auto  bg-gradient-to-br from-[#40d9bd] to-[#4ad29a] rounded-xl w-[200px] h-[50px] p-3 '>Download CV</button>
            </div>       
        </div>

    </div>
  )
}

export default About