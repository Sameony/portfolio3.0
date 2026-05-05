import React, { forwardRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const Contact = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY!)
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        { from_email: email, subject, message },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY! },
      )
      setStatus('sent')
      setEmail('')
      setSubject('')
      setMessage('')
    } catch (error){
      console.log(error)
      setStatus('error')
    }
  }

  return (
    <div ref={ref} className='bg-white py-24 px-5'>
      <div className='xl:w-[11/12] sm:pl-12 pl-4'>
        <p className='text-5xl sm:text-6xl mb-12 font-semibold text-[#13294b]'>Contact</p>
        <div className='sm:border-l-2 xl:ml-12 sm:p-5 pr-2 pt-8 border-[#293341]'>
          {status === 'sent' ? (
            <div className='sm:ml-4 py-12 text-xl text-[#13294b] font-medium'>
              Message received — I'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-8 sm:ml-4'>
              <div>
                <label className='block mb-2 sm:text-lg font-medium text-gray-900'>Your email</label>
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                  placeholder='you@example.com'
                  required
                />
              </div>
              <div>
                <label className='block mb-2 sm:text-lg font-medium text-gray-900'>Subject</label>
                <input
                  type='text'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  className='block p-3 w-full sm:text-lg text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Project enquiry'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label className='block mb-2 sm:text-lg font-medium text-gray-900'>Your message</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={6}
                  className='block p-2.5 w-full sm:text-lg text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Tell me about your project...'
                />
              </div>
              {status === 'error' && (
                <p className='text-red-500 text-sm'>Something went wrong. Please try again or email me directly.</p>
              )}
              <button
                className='bg-[#23a6d5] py-4 px-7 mt-12 text-2xl text-white flex items-center disabled:opacity-60'
                type='submit'
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Submit'} <FaArrowRight className='ml-8' />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
})

export default Contact
