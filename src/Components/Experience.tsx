import React from 'react'
import reacxlogo from '../images/react.svg';
import mongo from '../images/mongo.png';
import tailwind from "../images/tailwind.svg"
import aws from "../images/aws.svg"
import azure from "../images/azure.svg"
import next from "../images/nextjs.svg"
import css from "../images/css-3.png"
import html from "../images/html-5.png"
import node from "../images/node-js.png"
import js from "../images/js.png"
import {FaArrowRight} from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='bg-white flex justify-center my-24 p-5 h-[25rem]'>
        <div className='w-1/2 pl-12'>
            <p className='text-6xl mb-12 font-semibold  text-[#13294b]'>Experience</p>
            <div className='border-l-2 ml-12 p-5 pt-8 border-[#293341]'>
                <p className='text-xl max-w-full ml-4'>
                    I have a wide range of experience with numerous teams and organisations.
                    Through these diverse experiences, I have developed valuable expertise in a variety of
                    frameworks and libraries.
                </p>
                <button className='bg-[#23a6d5] py-4 px-7 mt-12 ml-4 text-2xl text-white flex items-center '>
                    View Resume <FaArrowRight className='ml-8' />
                </button>
            </div>
        </div>
        <div className='w-1/2 grid grid-cols-5 auto-rows-auto'>
            <img className='h-28 w-28' src={reacxlogo} alt="react" />
            <img className='h-24 w-24' src={tailwind} alt="react" />
            <img className='h-24 w-24' src={js} alt="react" />
            <img className='h-24 w-24' src={html} alt="react" />
            <img className='h-24 w-24' src={css} alt="react" />
            <img className='h-24 w-24' src={mongo} alt="react" />
            <img className='h-24 w-24' src={next} alt="react" />
            <img className='h-24 w-24' src={node} alt="react" />
            <img className='h-24 w-24' src={aws} alt="react" />
            <img className='h-24 w-24' src={azure} alt="react" />
            
        </div>
    </div>
  )
}

export default Experience