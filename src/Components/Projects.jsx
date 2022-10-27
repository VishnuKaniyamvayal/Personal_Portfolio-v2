import React from 'react'
import olx from "../assets/olx.png"
import netflix from "../assets/netflix.png"
import todo from "../assets/todo.png"
import {useInView} from "react-intersection-observer"

function Projects() {
    const {ref,inView}=useInView( {threshold:0.5})
  return(
    <div className='bg-gradient-to-b from-[#0f1e26] to-[#000300]' id='projects'>
        <h1 className='text-white bg-transparent text-center text-5xl font-bold'>Projects</h1>
        <div className='bg-transparent grid md:grid-cols-2 lg:grid-cols-3'>
            <div ref={ref} className={inView?' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100':" bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg lg:translate-x-[-200px] lg:opacity-0"}>
                <img className='rounded-xl' src={olx} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>OLX CLONE</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>Web app which is almost similar to olx made using react and firebase</p>
                <button className='bg-transparent text-[#4ad2b2] text-center mx-auto justify-center mt-4 m  focus:border-green-300 hover:text-green-200' onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Olx-clone-")}}>Go to code</button>
            </div>
            <div ref={ref} className={inView?' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg ease-in-out opacity-100':" bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg lg:translate-x-[-200px] lg:opacity-0"}>
                <img className='rounded-xl' src={netflix} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>NETFLIX CLONE</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>Project not completed due to some API issues. the hero section is still dynamic</p>
                <button className='bg-transparent text-[#4ad2b2] text-center mx-auto justify-center mt-4 m  focus:border-green-300 hover:text-green-200' onClick={()=>{window.open("https://github.com/VishnuKaniyamvayal/Netflix-clone")}}>Go to code</button>
            </div>
            <div ref={ref} className={inView?' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg ease-in-out opacity-100':" bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg lg:translate-x-[-200px] lg:opacity-0"}>
                <img className='rounded-xl' src={todo} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>TODO APP</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>My first ever react project. a big upgrade is coming soon</p>
                <button className='bg-transparent text-[#4ad2b2] text-center mx-auto justify-center mt-4 m  focus:border-green-300 hover:text-green-200' onClick={()=>{window.open("https://github.com/VishnuKaniyamvayal/Todo-list")}}>Go to code</button>
            </div>
        </div>
        
    </div>
  )
}

export default Projects