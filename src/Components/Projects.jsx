import React from 'react'
import olx from "../assets/olx.png"
import netflix from "../assets/netflix.png"
import todo from "../assets/todo.png"
import Linkedin from "../assets/Linkedin.png"
import{ MdMonitor} from "react-icons/md"
import { useSelector } from 'react-redux'
function Projects() {
   
    const theme = useSelector(state=>state.theme.value)
  
    let dark=theme   

  return(
    <div className={`${dark?"bg-gradient-to-b from-[#0f1e26] to-[#000300]":"bg-gradient-to-b from-[#e5fbf0] to-white"}`} id='projects'>
        <h1 className={`${dark?"text-white":"text-gray-700"} bg-transparent text-center text-5xl font-bold`}>PROJECTS</h1>
        <div className='bg-transparent grid md:grid-cols-2 lg:grid-cols-3'>
            <div  className={` ${dark?"bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100":"bg-white p-10 border rounded-xl m-6 mt-10 border-none hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100"}`}>
                <img className='rounded-xl' src={olx} alt="/" />
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"} text-center mx-auto justifiy-center font-bold mt-2`}>OLX CLONE</h1>
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"}`}>Description :</h1>
                <p className={`bg-transparent font-light ${dark?"text-white":"text-black"}`}>Web app which is almost similar to olx made using react and firebase</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className={` ${dark?"text-[#4ad2b2]  focus:border-green-300 hover:text-green-200":"text-white bg-green-500 p-2 rounded-md  "} my-auto left-0`} onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Olx-clone-")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://olx-clone-7c9ba.web.app/")}}/>
                </div>        
            </div>
            <div  className={` ${dark?"bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100":"bg-white p-10 border rounded-xl m-6 mt-10 border-none hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100"}`}>
                <img className='rounded-xl' src={netflix} alt="/" />
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"} text-center mx-auto justifiy-center font-bold mt-2`}>NETFLIX CLONE</h1>
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"}`}>Description :</h1>
                <p className={`bg-transparent font-light ${dark?"text-white":"text-black"}`}>Project not completed due to some API issues. the hero section is still dynamic</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className={`  ${dark?"text-[#4ad2b2]  focus:border-green-300 hover:text-green-200":"text-white bg-green-500 p-2 rounded-md  "} my-auto left-0`} onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Netflix-clone")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://netflix-clone-by-vishnu.netlify.app/")}}/>
                </div>

            </div>
            <div  className={` ${dark?"bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100":"bg-white p-10 border rounded-xl m-6 mt-10 border-none hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100"}`}>
                <img className='rounded-xl' src={todo} alt="/" />
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"} text-center mx-auto justifiy-center font-bold mt-2`}>TODO APP</h1>
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"}`}>Description :</h1>
                <p className={`bg-transparent font-light ${dark?"text-white":"text-black"}`}>My first ever react project using basic react hooks. a big upgrade is coming soon</p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className={`  ${dark?"text-[#4ad2b2]  focus:border-green-300 hover:text-green-200":"text-white bg-green-500 p-2 rounded-md  "} my-auto left-0`} onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Todo-list")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888__480.jpg")}}/>
                </div>

            </div>
            <div  className={` ${dark?"bg-transparent p-10 border rounded-xl m-6 mt-10 border-gray-700 hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100":"bg-white p-10 border rounded-xl m-6 mt-10 border-none hover:scale-105 duration-300 shadow-lg  ease-in-out opacity-100"}`}>
                <img className='rounded-xl' src={Linkedin} alt="/" />
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"} text-center mx-auto justifiy-center font-bold mt-2`}>Linkedin Clone</h1>
                <h1 className={`bg-transparent ${dark?"text-white":"text-black"}`}>Description :</h1>
                <p className={`bg-transparent font-light ${dark?"text-white":"text-black"}`}>Linkedin clone built using react,redux and firebase </p>
                <div className='bg-transparent flex justify-between mt-4'>
                    <button className={`  ${dark?"text-[#4ad2b2]  focus:border-green-300 hover:text-green-200":"text-white bg-green-500 p-2 rounded-md  "} my-auto left-0`} onClick={()=>{ window.open("https://github.com/VishnuKaniyamvayal/Linkedin-clone")}}>Go to code</button>
                <MdMonitor className='bg-transparent hover:text-gray-200 text-gray-400 cursor-pointer my-auto mt-6.5' onClick={()=>{ window.open("https://linkedin-clone-c2f74.web.app/")}}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects