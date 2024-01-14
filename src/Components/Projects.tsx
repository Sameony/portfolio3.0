import {useState,  forwardRef, useEffect } from 'react'
import mewi from '../images/mewi.png';
import purrito from "../images/buymeow.png"
import portfolio from "../images/this.png"
import payout from "../images/payouts.png"

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {  
     setActiveSlideIndex(activeSlideIndex+1)
    }, 3000)
  
    return () => clearInterval(intervalId); 
   
  }, [activeSlideIndex])
  console.log(activeSlideIndex)
  return (
    <div className='bg-slate-100 flex flex-col md:flex-row justify-center py-24 px-5 ' ref={ref}>
    <div className='lg:w-1/2 pl-4 sm:pl-12'>
        <p className='text-5xl sm:text-6xl mb-12 font-semibold  text-[#13294b]'>Projects</p>
        <div className='sm:border-l-2 xl:ml-12 p-2 pl-0 sm:p-5 pt-8 border-[#293341]'>
            <p className='sm:text-xl max-w-full sm:ml-4'>
            Feel free to explore my projects, a reflection of my
             ongoing journey in web development. These creations represent my earnest
              efforts to deliver simple, effective, and user-friendly solutions. I welcome
               your consideration and feedback.
            </p>
            
        </div>
    </div>
    <div className='lg:w-1/2 mt-10 lg:mt-0 overflow-y-auto'>
    
        <a href="https://mirinda-mewi.netlify.app/" target="__blank" referrerPolicy="no-referrer"><img src={mewi} alt="website banner" className={`${activeSlideIndex%4!==0&&"hidden"} object-contain w-full`} /></a>
        <a href="https://e-comm-purritos.vercel.app/" target="__blank" referrerPolicy="no-referrer"><img src={purrito} alt="website banner" className={`${activeSlideIndex%4!==1&&"hidden"} object-contain w-full`} /></a>
        <a href="https://portfolio3-0-brown.vercel.app/" target="__blank" referrerPolicy="no-referrer"><img src={portfolio} alt="website banner" className={`${activeSlideIndex%4!==2&&"hidden"} object-contain w-full`} /></a>
        <a href="https://dukaanpay-challenge.netlify.app/" target="__blank" referrerPolicy="no-referrer"><img src={payout} alt="website banner" className={`${activeSlideIndex%4!==3&&"hidden"} object-contain w-full`} /></a>

    </div>
    
</div>
  )
})

export default Projects