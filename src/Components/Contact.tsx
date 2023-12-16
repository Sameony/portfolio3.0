import React, { forwardRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='bg-white  py-24 px-5 '>
        <div className='xl:w-[11/12] sm:pl-12 pl-4'>
            <p className='text-5xl sm:text-6xl mb-12 font-semibold  text-[#13294b]'>Contact</p>
            <div className='sm:border-l-2 xl:ml-12 sm:p-5 pr-2 pt-8 border-[#293341]'>
                <form action="#" className="space-y-8 sm:ml-4">
                    <div>
                        <label className="block mb-2 sm:text-lg font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="somesample@ohwell.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 sm:text-lg font-medium text-gray-900 ">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full sm:text-lg text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 sm:text-lg font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full sm:text-lg text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button className='bg-[#23a6d5] py-4 px-7 mt-12 text-2xl text-white flex items-center ' type='submit'>
                        Submit <FaArrowRight className='ml-8' />
                    </button>
                </form>
                
            </div>
        </div>
        
    </div>
    
  )
})

export default Contact