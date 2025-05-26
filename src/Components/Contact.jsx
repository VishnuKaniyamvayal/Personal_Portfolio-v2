import React from 'react'
import {MdLocationOn} from "react-icons/md"
import {IoMdMail} from "react-icons/io"
import {BsFillTelephoneFill,BsLinkedin} from "react-icons/bs"
import {AiFillInstagram,AiOutlineArrowUp} from "react-icons/ai"
import {FaFacebookSquare,FaGithubSquare} from "react-icons/fa"
import {Link} from "react-scroll"
import { useSelector } from 'react-redux'


function Contact() {

    const theme = useSelector(state=>state.theme.value)
  
  let dark=theme

  return (
    <div className={`${dark?"bg-gradient-to-t from-[#0f1f26] to-[#000300] mt-16":"bg-gradient-to-t from-[#e5fbf0] to-white mt-16"}`} id='contact'>
        <h1 className={`${dark?"bg-transparent text-white text-center text-5xl font-bold m-8":"bg-transparent text-gray-700 text-center text-5xl font-bold m-8"}`}>GET IN TOUCH</h1>
        <div className='bg-transparent grid md:grid-cols-3 '>
            <div className='bg-transparent text-white  mx-10'>         
                <p className={`bg-transparent ${dark?"text-white":"text-black"} text-center md:text-left md:text-xl font-thin`}>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className='bg-transparent'>
                    <div className='bg-transparent flex justify-center mt-8 mb-4 md:justify-start pr-4'>
                    <MdLocationOn className='bg-transparent text-green-400 mr-4' size={30}/>
                    <h1 className='bg-transparent text-[23px] text-gray-400'>YOUR ADDRESS</h1>
                    </div>
                    <p className={`${dark?"text-white":"text-gray-500"} bg-transparent  font-bold text-center md:text-lg md:text-left ml-3`}>Kaniyamvayal,Padanthorai<br/>gudalur-643211 the nilgiris
                    </p>
                </div>
                <div className='bg-transparent'>
                    <div className='bg-transparent flex justify-center mt-8 mb-4 md:justify-start pr-4'>
                    <IoMdMail className='bg-transparent text-green-400 mr-4' size={30}/>
                    <h1 className='bg-transparent text-[23px] text-gray-500'>MAIL</h1>
                    </div>
                    <p className={`${dark?"text-white":"text-gray-500"} bg-transparent  font-bold text-center md:text-lg md:text-left ml-3`}>vishnujishnu0987@gmail.com</p>
                </div>
                <div className='bg-transparent'>
                    <div className='bg-transparent flex justify-center mt-8 mb-4 md:justify-start pr-4'>
                    <BsFillTelephoneFill className='bg-transparent text-green-400 mr-4' size={30}/>
                    <h1 className='bg-transparent text-[23px] text-gray-400'>PHONE</h1>
                    </div>
                    <p className={`${dark?"text-white":"text-gray-500"} bg-transparent  font-bold text-center md:text-lg md:text-left ml-3`}>7603951638
                    </p>
                </div>
                <div className='bg-transparent flex justify-center md:justify-start mt-4 gap-5'>
                    <AiFillInstagram className={`bg-transparent  ${dark?"text-gray-300":"text-gray-700"} my-4 mx-2 text-2xl cursor-pointer`} onClick={()=>{window.open("https://www.instagram.com/vis_hnu_ve/")}}/>
                    <FaGithubSquare className={`bg-transparent ${dark?"text-gray-300":"text-gray-700"} my-4 mx-2 text-2xl cursor-pointer`} onClick={()=>{window.open("https://github.com/VishnuKaniyamvayal")}}/>
                    <FaFacebookSquare className={`bg-transparent ${dark?"text-gray-300":"text-gray-700"} my-4 mx-2 text-2xl cursor-pointer`} onClick={()=>{window.open("https://www.facebook.com/vishnu.vinod.319452/")}}/>
                    <BsLinkedin className={`cursor-pointer bg-transparent ${dark?"text-gray-300":"text-gray-700"} my-4 mx-2 text-2xl`} onClick={()=>{window.open("https://www.linkedin.com/in/vishnu-v-503365241/")}}/>
                </div>    
            </div>
            <div className=' bg-transparent md:col-span-2 flex flex-col '>
                <form method='POST' action="https://getform.io/f/4de49232-cbbf-47d9-9056-e0adaa3df438" className='bg-transparent'>
                <div className='bg-transparent flex flex-col md:flex-row mt-8 md:mt-0 items-center pr-4 '>
                    <input name='name' type="text" placeholder='YOUR NAME' className={`${dark?"text-gray-300":"text-gray-900"} bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[75%] md:w-[50%] text-center ml-[70px] border-cyan-300 py-3 mt-4 mx-auto max-h-12`}/>
                    <input name='email' type="email" placeholder='YOUR E-MAIL' className={`${dark?"text-gray-300":"text-gray-900"} text-gray-900 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[75%] md:w-[50%] text-center ml-[70px] border-cyan-300 py-3 mt-4 mx-auto max-h-12`}/>
                </div>
                <input name='subject' type="text" placeholder='YOUR SUBJECT' className={`${dark?"text-gray-300":"text-gray-900"} text-gray-900 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[73%] md:w-[81%] lg:w-[88%] text-center ml-[70px] border-cyan-300 py-2 mt-4 mx-auto h-16`}/>
                <input name='message' type="text" placeholder='YOUR MESSAGE' className={`${dark?"text-gray-300":"text-gray-900"} text-gray-900 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[73%] md:w-[81%] lg:w-[88%] text-center ml-[70px] border-cyan-300 py-2 mt-4 mx-auto h-40`}/>
                
                    <button type='submit' className='bg-transparent text-white flex justify-center mx-auto  bg-gradient-to-br from-[#40d9bd] to-[#4ad29a] rounded-xl w-[200px] h-[50px] mt-6 my-auto text-center pt-2.5 text-xl font-medium hover:shadow-md '>Submit</button>
                </form>
            </div>
        </div>
        <div className='bg-transparent flex flex-col items-center md:hidden'>
          <Link className='bg-transparent' to="home"  smooth={true} offset={0} duration={500}> <AiOutlineArrowUp className='bg-transparent text-gray-400 mr-4 ml-4 mt-16 mb-2 animate-bounce '  size={28}/></Link>
           <h1 className={`bg-transparent ${dark?"text-gray-400":"text-gray-900"} font-medium text-sm mb-8`}>GO TO TOP</h1> 
        </div>
    </div>
  )
}

export default Contact
