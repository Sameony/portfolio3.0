import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-white flex justify-center py-24 px-5 '>
        <div className='w-1/2 pl-12'>
            <p className='text-6xl mb-12 font-semibold  text-[#13294b]'>Contact</p>
            <div className='border-l-2 ml-12 p-5 pt-8 border-[#293341]'>
                <form action="#" className="space-y-8 ml-4">
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="somesample@ohwell.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-900 ">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-lg font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button className='bg-[#23a6d5] py-4 px-7 mt-12 text-2xl text-white flex items-center ' type='submit'>
                        Submit <FaArrowRight className='ml-8' />
                    </button>
                </form>
                
            </div>
        </div>
        <div className='w-1/2 grid grid-cols-5 auto-rows-auto'>
           
        </div>
    </div>
    
  )
}

export default Contact