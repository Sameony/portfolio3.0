import { forwardRef } from "react";
import { FaGithub, FaChevronDown } from "react-icons/fa";

const Header = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='anim_gradient lg:h-screen h-[calc(100vh-5rem)]'>
        <div className='flex relative flex-col ml-12 md:text-3xl text-xl pb-5 justify-end h-full font-semibold text-white flex-1'>
            <div className='max-w-[15rem] md:max-w-[30rem] flex items-end pb-5'>
            Versatile web developer creating seamless digital experiences through innovative coding and design.
            </div>
            <div className='flex flex-col items-start justify-between pt-5 justify-around md:w-[25rem] w-[15rem]'>
                <button className='flex bg-white/[0.4] md:py-3 md:px-5 rounded md:mb-3 py-1 px-3 mb-2'>Projects</button>
                <a href="https://www.github.com/sameony" target='_blank'><button className='flex justify-between items-center bg-slate-800 md:py-3 md:px-5 rounded md:mb-3 py-1 px-3 mb-2'><FaGithub className='mr-4' />Github</button></a>
            </div>
            {/* <FaChevronDown className='absolute bottom-1 right-[49%] rounded-full bg-slate-800 text-white text-xl h-12 w-12 p-2' /> */}
        </div>
    </div>
  )
})

export default Header