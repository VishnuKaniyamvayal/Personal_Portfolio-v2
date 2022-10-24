import React from 'react'
import {MdLocationOn} from "react-icons/md"
import {IoMdMail} from "react-icons/io"
import {BsFillTelephoneFill,BsLinkedin} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebookSquare,FaGithubSquare} from "react-icons/fa"

function Contact() {
  return (
    <div className='bg-gradient-to-t from-[#0f1f26] to-[#000300] mt-16' id='contact'>
        <h1 className='bg-transparent text-white text-center text-5xl font-bold m-8'>GET IN TOUCH</h1>
        <div className='bg-transparent grid md:grid-cols-3 '>
            <div className='bg-transparent text-white  mx-10'>         
                <p className='bg-transparent text-center md:text-left md:text-xl font-thin'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className='bg-transparent'>
                    <div className='bg-transparent flex justify-center mt-8 mb-4 md:justify-start pr-4'>
                    <MdLocationOn className='bg-transparent text-green-400 mr-4' size={30}/>
                    <h1 className='bg-transparent text-[23px] text-gray-400'>ADDRESS</h1>
                    </div>
                    <p className='bg-transparent  font-bold text-center md:text-lg md:text-left ml-3'>Kaniyamvayal,Padanthorai<br/>gudalur-643211 the nilgiris
                    </p>
                </div>
                <div className='bg-transparent'>
                    <div className='bg-transparent flex justify-center mt-8 mb-4 md:justify-start pr-4'>
                    <IoMdMail className='bg-transparent text-green-400 mr-4' size={30}/>
                    <h1 className='bg-transparent text-[23px] text-gray-400'>MAIL</h1>
                    </div>
                    <p className='bg-transparent  font-bold text-center md:text-lg md:text-left ml-3'>vishnujishnu0987@gmail.com</p>
                </div>
                <div className='bg-transparent'>
                    <div className='bg-transparent flex justify-center mt-8 mb-4 md:justify-start pr-4'>
                    <BsFillTelephoneFill className='bg-transparent text-green-400 mr-4' size={30}/>
                    <h1 className='bg-transparent text-[23px] text-gray-400'>PHONE</h1>
                    </div>
                    <p className='bg-transparent  font-bold text-center md:text-lg md:text-left ml-3'>Kaniyamvayal,Padanthorai<br/>gudalur-643211 the nilgiris
                    </p>
                </div>
                <div className='bg-transparent flex justify-center md:justify-start mt-4 gap-5'>
                    <AiFillInstagram className='bg-transparent text-gray-300 my-4 mx-2 text-2xl cursor-pointer' onClick={()=>{window.open("https://www.instagram.com/vis_hnu_ve/")}}/>
                    <FaGithubSquare className='bg-transparent text-gray-300 my-4 mx-2 text-2xl cursor-pointer' onClick={()=>{window.open("https://github.com/VishnuKaniyamvayal")}}/>
                    <FaFacebookSquare className='bg-transparent text-gray-300 my-4 mx-2 text-2xl cursor-pointer'onClick={()=>{window.open("https://www.facebook.com/vishnu.vinod.319452/")}}/>
                    <BsLinkedin className='cursor-pointer bg-transparent text-gray-300 my-4 mx-2 text-2xl 'onClick={()=>{window.open("https://www.linkedin.com/in/vishnu-v-503365241/")}}/>
                </div>    
            </div>
            <div className=' bg-transparent md:col-span-2 flex flex-col '>
                <div className='bg-transparent flex flex-col md:flex-row mt-8 md:mt-0 items-center pr-4 '>
                    <input type="text" placeholder='YOUR NAME' className='text-gray-300 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[75%] md:w-[50%] text-center ml-[90px] border-cyan-300 py-3 mt-4 mx-auto max-h-12'/>
                    <input type="text" placeholder='YOUR E-MAIL' className='text-gray-300 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[75%] md:w-[50%] text-center ml-[90px] border-cyan-300 py-3 mt-4 mx-auto max-h-12'/>
                </div>
                <input type="text" placeholder='YOUR SUBJECT' className='text-gray-300 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[73%] md:w-[81%] lg:w-[88%] text-center ml-[90px] border-cyan-300 py-2 mt-4 mx-auto h-16'/>
                <input type="text" placeholder='YOUR SUBJECT' className='text-gray-300 bg-gray-500 bg-opacity-10 rounded-3xl text-lg  w-[73%] md:w-[81%] lg:w-[88%] text-center ml-[90px] border-cyan-300 py-2 mt-4 mx-auto h-40'/>
                <div className='bg-transparent pl-10'>
                    <button className='text-black flex justify-center mx-auto  bg-gradient-to-br from-[#40d9bd] to-[#4ad29a] rounded-xl w-[200px] h-[50px] mt-6 my-auto text-center pt-2.5 text-xl font-bold hover:shadow-md '>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact