import React from 'react'
import olx from "../assets/olx.png"
import netflix from "../assets/netflix.png"
import todo from "../assets/todo.png"
import Linkedin from "../assets/Linkedin.png"
import{ MdMonitor} from "react-icons/md"
function Projects() {
    
  return(
    <div className='bg-gradient-to-b from-[#0f1e26] to-[#000300]' id='projects'>
        <h1 className='text-white bg-transparent text-center text-5xl font-bold'>Projects</h1>
        <div className='bg-transparent grid md:grid-cols-2 lg:grid-cols-3'>
            <div  className={' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100'}>
                <img className='rounded-xl' src={olx} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>OLX CLONE</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>Web app which is almost similar to olx made using react and firebase</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className='bg-transparent text-[#4ad2b2]  my-auto  focus:border-green-300 hover:text-green-200 left-0' onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Olx-clone-")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://olx-clone-7c9ba.web.app/")}}/>
                </div>        
            </div>
            <div  className={' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg ease-in-out opacity-100'}>
                <img className='rounded-xl' src={netflix} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>NETFLIX CLONE</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>Project not completed due to some API issues. the hero section is still dynamic</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className='bg-transparent text-[#4ad2b2]  my-auto  focus:border-green-300 hover:text-green-200 left-0' onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Netflix-clone")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://netflix-clone-by-vishnu.netlify.app/")}}/>
                </div>

            </div>
            <div  className={' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg ease-in-out opacity-100'}>
                <img className='rounded-xl' src={todo} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>TODO APP</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>My first ever react project. a big upgrade is coming soon</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className='bg-transparent text-[#4ad2b2]  my-auto  focus:border-green-300 hover:text-green-200 left-0' onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Todo-list")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888__480.jpg")}}/>
                </div>

            </div>
            <div  className={' bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg ease-in-out opacity-100'}>
                <img className='rounded-xl' src={Linkedin} alt="/" />
                <h1 className='bg-transparent text-white text-center mx-auto justifiy-center font-bold mt-2'>Linkedin Clone</h1>
                <h1 className='bg-transparent text-white'>Description :</h1>
                <p className='bg-transparent text-white'>Linkedin clone built using react,redux and firebase</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className='bg-transparent text-[#4ad2b2]  my-auto  focus:border-green-300 hover:text-green-200 left-0' onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Linkedin-clone")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://linkedin-clone-c2f74.web.app/")}}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects