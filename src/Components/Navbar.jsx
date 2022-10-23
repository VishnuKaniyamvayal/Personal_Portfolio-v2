import React,{useState} from 'react'
import {RiMenu3Fill} from "react-icons/ri"
import {AiOutlineClose} from "react-icons/ai"
function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between pt-5 pl-5 pr-2 ease-in duration-300 max-w-[1400px]' >
        <h1 className="font-bold text-2xl my-auto text-[#6FEDD6] md:ml-12">Vishnu.</h1>
        <ul className='md:flex my-auto text-white hidden '>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] ' ><a href='#home'>Home</a></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] '><a href='#about'>About me</a></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] '><a href='#projects'>Projects</a></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] '>Contact me</li>
        </ul>
        <div onClick={()=>{handleNav()}} className='text-white md:hidden'>
        {!nav?<RiMenu3Fill  size="20px"/>:<AiOutlineClose/>}
        </div>
        <ul className={nav?'fixed my-auto text-white left-0 bg-none border-r h-screen border-gray-600 ease-in-out duration-500 min-w-[60%]':"fixed my-auto text-white  bg-none border-r h-screen border-gray-600 left-[-1000px] ease-in-out duration-500"}>
            <li className='my-10 mx-9 '>Home</li>
            <li className='my-10 mx-9 '>About me</li>
            <li className='my-10 mx-9 '>Projects</li>
            <li className='my-10 mx-9 '>Contact me</li>
        </ul>
    </div>
    
    

  )
}

export default Navbar