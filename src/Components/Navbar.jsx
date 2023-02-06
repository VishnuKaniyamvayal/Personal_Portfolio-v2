import React,{useState} from 'react'
import {RiMenu3Fill} from "react-icons/ri"
import {AiOutlineClose} from "react-icons/ai"
import {Link} from 'react-scroll'
import { useDispatch } from 'react-redux'
import {MdLightMode} from "react-icons/md"
import {BsFillMoonFill} from "react-icons/bs"
import { setDarkGlobal, setLightGlobal } from '../features/theme'
import { useSelector } from 'react-redux'

function Navbar() {
    const [nav, setNav] = useState(false)
    
    const theme = useSelector(state=>state.theme.value)
    
    const [dark,setDark] = useState(theme)




    const dispatch = useDispatch()

    const themeChangeToDark = ()=>{
        dispatch(setDarkGlobal())
        setDark(true)
    }

    const themeChangeToLight = ()=>{
        dispatch(setLightGlobal())
        setDark(false)
    }

    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className={`bg-transparent flex justify-between pt-5 pl-5 pr-2 ease-in duration-300 max-w-[1400px] ${dark?"bg-black":"bg-white"}}`} >
        <a className={`bg-transparent font-bold text-2xl my-auto ${dark?"text-[#6FEDD6]":"text-black"} md:ml-12 cursor-pointer`} href="https://vishnu-official.netlify.app/" >Vishnu.</a>
        <ul className='md:flex my-auto text-white hidden bg-transparent ${dark?"bg-[#00300]":"bg-white"}'>
            <li className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `} ><Link className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}  to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}><Link className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}  to="about" spy={true} smooth={true} offset={-250} duration={500} >About me</Link></li>
            <li className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}><Link className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}  to="projects" spy={true} smooth={true} offset={-50} duration={500} >Projects</Link></li>
            <li className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}><Link className={`bg-transparent p-4 cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `} to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link></li>
            <button className='pr-[-30px] ' onClick={dark?themeChangeToLight:themeChangeToDark}><li className={`bg-transparent p-4 cursor-pointer pl-6 ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}>{dark?<MdLightMode size={23}/>:<BsFillMoonFill size={23} />}</li></button>
            
        </ul>
        <div  className='text-white md:hidden  flex'>
        <button className=' mr-6' onClick={dark?themeChangeToLight:themeChangeToDark}><li className={`mr-12 list-none bg-transparent cursor-pointer ${dark?"text-white hover:text-[#6FEDD6]":"text-gray-500 hover:text-black"} `}>{dark?<MdLightMode size={23}/>:<BsFillMoonFill size={23} />}</li></button>
        {!nav?<RiMenu3Fill onClick={()=>{handleNav()}} className={`mt-1 mr-2 bg-transparent right-2 ${dark? " text-gray-400":" text-gray-500"}`} size="20px"/>:<AiOutlineClose onClick={()=>{handleNav()}} className={`fixed  bg-transparent right-2 ${dark?"bg-[#00300] text-gray-400":"bg-white text-gray-500"}`}/>}
        </div>
        
        <ul className={nav?`fixed my-auto ${dark?"text-white bg-black":"text-black bg-white"} left-0  border-r h-screen border-gray-600 ease-in-out duration-500 min-w-[60%] z-10 top-0`:`fixed my-auto text-white  bg-none border-r h-screen border-gray-600 left-[-1000px] ease-in-out duration-500 z-10 top-0`}>
            <li className='my-10 mx-9 cursor-pointer'><Link  to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
            <li className='my-10 mx-9 cursor-pointer'><Link  to="about" spy={true} smooth={true} offset={-250} duration={500} >About me</Link></li>
            <li className='my-10 mx-9 cursor-pointer'><Link  to="projects" spy={true} smooth={true} offset={-50} duration={500} >Projects</Link></li>
            <li className='my-10 mx-9 cursor-pointer'><Link  to="contact" spy={true} smooth={true} offset={50} duration={500} >Contact me</Link></li>
        </ul>
        
    </div>
    
    

  )
}

export default Navbar