import { forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa'

interface HeaderProps {
  onProjectsClick?: () => void
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ onProjectsClick }, ref) => {
  return (
    <div ref={ref} className='anim_gradient lg:h-screen h-[calc(100vh-5rem)]'>
      <div className='flex relative flex-col ml-12 md:text-3xl text-xl pb-5 justify-end h-full font-semibold text-white flex-1'>
        <div className='max-w-[15rem] md:max-w-[30rem] flex items-end pb-5'>
          Full-stack systems built to scale — from real-time mobile apps to multi-tenant SaaS platforms.
        </div>
        <div className='flex flex-col items-start justify-between pt-5 justify-around md:w-[25rem] w-[15rem]'>
          <button
            onClick={onProjectsClick}
            className='flex bg-white/[0.4] md:py-3 md:px-5 rounded md:mb-3 py-1 px-3 mb-2 hover:bg-white/[0.55] transition-colors'
          >
            Projects
          </button>
          <a href='https://www.github.com/sameony' rel='noreferrer' target='_blank'>
            <button className='flex justify-between items-center bg-slate-800 md:py-3 md:px-5 rounded md:mb-3 py-1 px-3 mb-2 hover:bg-slate-700 transition-colors'>
              <FaGithub className='mr-4' />GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  )
})

export default Header
