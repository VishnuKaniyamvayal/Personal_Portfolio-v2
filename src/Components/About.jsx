import React from 'react'
import image from "../assets/image.jpg"

function About() {
  return (
    <div className='bg-gradient-to-b from-[#000300] to-[#0f1e26] ' id='about'>
        <div className=' bg-transparent pt-16 grid md:grid-cols-2 pb-16 '>
            <img src={image}alt="/" className='mx-auto max-w-[300px]  rounded-full md:max-w-[400px] md:rounded-2xl md:mx-auto' />
            <div className='bg-transparent'>
                <h1 className='text-white bg-transparent m-4 text-3xl text-center  '>About Me</h1>
                <p className='text-white bg-transparent text-center m-4 md:mt-20 md:mr-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button className='text-white flex justify-center mx-auto  bg-gradient-to-br from-[#40d9bd] to-[#4ad29a] rounded-xl w-[200px] h-[50px] p-3 '>Download CV</button>
            </div>       
        </div>

    </div>
  )
}

export default About