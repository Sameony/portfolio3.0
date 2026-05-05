import { forwardRef } from 'react'
import reacxlogo from '../images/react.svg'
import mongo from '../images/mongo.png'
import tailwind from '../images/tailwind.svg'
import aws from '../images/aws.svg'
import azure from '../images/azure.svg'
import next from '../images/nextjs.svg'
import node from '../images/node-js.png'
import ts from '../images/icons8-typescript-96.png'
import { FaArrowRight } from 'react-icons/fa'

const Experience = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='bg-white flex flex-col lg:flex-row justify-center my-24 p-5'>
      <div className='w-full lg:w-1/2 mb-5 sm:pl-12 pl-4'>
        <p className='sm:text-6xl text-5xl mb-12 font-semibold text-[#13294b]'>Experience</p>
        <div className='sm:border-l-2 xl:ml-12 p-2 pl-0 sm:p-5 pt-8 border-[#293341]'>
          <p className='text-lg sm:text-xl max-w-full sm:ml-4'>
            4+ years delivering production systems across logistics, automotive, healthcare, and wellness —
            working with cross-functional teams and independently. Experienced across the full stack from
            API design and database architecture to mobile apps and cloud deployments.
          </p>
          <a download href='Sameer_CV.pdf' className='bg-[#23a6d5] w-64 py-4 px-7 mt-12 sm:ml-4 sm:text-2xl text-white flex items-center hover:bg-[#1e90bb] transition-colors'>
            View Resume <FaArrowRight className='ml-8' />
          </a>
        </div>
      </div>
      <div className='w-full lg:w-1/2 grid sm:grid-cols-4 grid-cols-4 auto-rows-auto place-items-center gap-5'>
        <img className='h-14 w-14 sm:h-24 sm:w-24' src={reacxlogo} alt='React' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={ts} alt='TypeScript' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={node} alt='Node.js' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={mongo} alt='MongoDB' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={tailwind} alt='Tailwind' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={next} alt='Next.js' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={aws} alt='AWS' />
        <img className='h-12 sm:h-20 w-12 sm:w-20' src={azure} alt='Azure' />
      </div>
    </div>
  )
})

export default Experience
