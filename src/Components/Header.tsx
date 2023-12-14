import React from 'react'
import Navbar from './Navbar'
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className='anim_gradient h-screen w-screen'>
        <Navbar />
        <div className='flex flex-col justify-between items-center text-3xl text-white text-center p-8 flex-1 h-[90%]'>
            <div className='w-full max-w-[80rem] grow-[0.5] flex items-end pb-5'>
                I am a web development engineer and I use React and Typescript to develop pages. You can learn more about me and my projects as you go through this Web CV.
            </div>
            <div className='grow-[0.5] flex items-start pt-5 justify-around w-[40rem]'>
                <button className='flex justify-between items-center bg-white/[0.4] py-3 px-5 rounded'>Projects</button>
                <button className='flex justify-between items-center bg-slate-800 py-3 px-5 rounded'><FaGithub className='mr-4' />Github</button>
            </div>
        </div>
    </div>
  )
}

export default Header