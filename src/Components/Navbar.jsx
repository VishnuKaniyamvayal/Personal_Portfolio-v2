import React,{useState} from 'react'
import {RiMenu3Fill} from "react-icons/ri"
import {AiOutlineClose} from "react-icons/ai"
import {Link} from 'react-scroll'
function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between pt-5 pl-5 pr-2 ease-in duration-300 max-w-[1400px]' >
        <h1 className="font-bold text-2xl my-auto text-[#6FEDD6] md:ml-12">Vishnu.</h1>
        <ul className='md:flex my-auto text-white hidden '>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] ' ><Link  to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] '><Link  to="about" spy={true} smooth={true} offset={-250} duration={500} >About me</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] '><Link  to="projects" spy={true} smooth={true} offset={-50} duration={500} >Projects</Link></li>
            <li className='p-4 cursor-pointer text-white hover:text-[#6FEDD6] '><Link  to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link></li>
        </ul>
        <div onClick={()=>{handleNav()}} className='text-white md:hidden'>
        {!nav?<RiMenu3Fill  size="20px"/>:<AiOutlineClose/>}
        </div>
        <ul className={nav?'fixed my-auto text-white left-0 bg-none border-r h-screen border-gray-600 ease-in-out duration-500 min-w-[60%] z-10 top-0':"fixed my-auto text-white  bg-none border-r h-screen border-gray-600 left-[-1000px] ease-in-out duration-500 z-10 top-0"}>
            <li className='my-10 mx-9 '><Link  to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li className='my-10 mx-9 '><Link  to="about" spy={true} smooth={true} offset={-250} duration={500} >About me</Link></li>
            <li className='my-10 mx-9 '><Link  to="projects" spy={true} smooth={true} offset={-50} duration={500} >Projects</Link></li>
            <li className='my-10 mx-9 '><Link  to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link></li>
        </ul>
    </div>
    
    

  )
}

export default Navbar