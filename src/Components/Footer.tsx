import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-slate-900 w-full text-white pl-4 sm:pl-12 py-3 flex justify-between'>
        © Mohammed Sameer, 2023: No rights reserved XD
        <div className='flex'>
            <a href="https://www.twitter.com/sameony1" target='_blank' rel="noreferrer"><FaTwitter className='h-10 w-10 mx-5' /></a>
            <a href="https://www.github.com/sameony" target='_blank' rel="noreferrer"><FaGithub className='h-10 w-10 mx-5' /></a>
            <a href="https://www.linkedin.com/in/sameony" target='_blank' rel="noreferrer"><FaLinkedin className='h-10 w-10 mx-5' /></a>
        </div>
    </div>
  )
}

export default Footer
