import { forwardRef } from "react"
import { FaUser } from "react-icons/fa"

const About = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='bg-slate-100 flex  justify-center py-24 px-5 '>
        <div className='lg:w-1/2 pl-4 sm:pl-12'>
            <div className="flex justify-between items-center w-full">
              <p className='text-5xl sm:text-6xl mb-12 font-semibold  text-[#13294b]'>About</p>
              <FaUser className="mb-12 lg:hidden rounded-full h-24 w-24 lg:h-44 lg:w-44 mr-5 border-slate-800 border-2 text-[#13294b] p-1" />
              
            </div>
            <div className='sm:border-l-2 xl:ml-12 p-2 pl-0 sm:p-5 pt-8 border-[#293341]'>
                <p className='sm:text-xl max-w-full sm:ml-4'>
                Diligent web developer with a passion for creating thoughtful and 
                efficient digital solutions. Proficient in front-end and back-end technologies,
                 I focus on delivering user-friendly websites. Committed to continuous learning and 
                 improvement, I approach each project with humility, embracing challenges and
                 seeking collaborative solutions.
                </p>
                
            </div>
        </div>
        <div className='w-1/2 items-center justify-center hidden lg:flex'>
            <FaUser className="rounded-full h-24 w-24 lg:h-44 lg:w-44 border-slate-800 border-2 text-[#13294b] p-1" />
        </div>
    </div>
  )
})

export default About