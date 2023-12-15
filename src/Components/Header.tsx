import { FaGithub, FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className='anim_gradient h-screen'>
        <div className='flex relative flex-col ml-12 text-3xl justify-end h-full font-semibold text-white flex-1 h-[90%]'>
            <div className=' max-w-[30rem]  flex items-end pb-5'>
            Versatile web developer creating seamless digital experiences through innovative coding and design.
            </div>
            <div className='flex flex-col items-start justify-between pt-5 justify-around w-[25rem]'>
                <button className='flex bg-white/[0.4] py-3 px-5 rounded mb-3'>Projects</button>
                <a href="https://www.github.com/sameony" target='_blank'><button className='flex justify-between items-center bg-slate-800 py-3 px-5 rounded'><FaGithub className='mr-4' />Github</button></a>
            </div>
            {/* <FaChevronDown className='absolute bottom-1 right-[49%] rounded-full bg-slate-800 text-white text-xl h-12 w-12 p-2' /> */}
        </div>
    </div>
  )
}

export default Header