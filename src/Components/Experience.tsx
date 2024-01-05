import {forwardRef } from 'react'
import reacxlogo from '../images/react.svg';
import mongo from '../images/mongo.png';
import tailwind from "../images/tailwind.svg"
import aws from "../images/aws.svg"
import azure from "../images/azure.svg"
// import next from "../images/nextjs.svg"
import css from "../images/css-3.png"
import html from "../images/html-5.png"
import node from "../images/node-js.png"
import js from "../images/js.png"
import ts from "../images/icons8-typescript-96.png"
import {FaArrowRight} from 'react-icons/fa'

const Experience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='bg-white flex flex-col lg:flex-row justify-center my-24 p-5'>
        <div className='w-full lg:w-1/2 mb-5 sm:pl-12 pl-4'>
            <p className='sm:text-6xl text-5xl mb-12 font-semibold text-[#13294b]'>Experience</p>
            <div className='sm:border-l-2 xl:ml-12  p-2 pl-0 sm:p-5 pt-8 border-[#293341]'>
                <p className='text-lg sm:text-xl max-w-full sm:ml-4'>
                    I have a wide range of experience with numerous teams and organisations.
                    Through these diverse experiences, I have developed valuable expertise in a variety of
                    frameworks and libraries.
                </p>
                <a download href='Sameer_CV.pdf' className='bg-[#23a6d5] w-64 py-4 px-7 mt-12 sm:ml-4 sm:text-2xl text-white flex items-center '>
                    View Resume <FaArrowRight className='ml-8' />
                </a>
            </div>
        </div>
        <div className='w-full lg:w-1/2 grid sm:grid-cols-5 grid-cols-4 auto-rows-auto place-items-center gap-5'>
            <img className='h-14 w-14 sm:h-28 sm:w-28' src={reacxlogo} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={tailwind} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={js} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={html} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={css} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={mongo} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={ts} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={node} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={aws} alt="react" />
            <img className='h-12 sm:h-24 w-12 sm:w-24' src={azure} alt="react" />
            
        </div>
    </div>
  )
})

export default Experience