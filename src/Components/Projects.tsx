import React from 'react'

const Projects = () => {
  return (
    <div className='bg-slate-100 flex flex-col lg:flex-row justify-center py-24 px-5 '>
    <div className='lg:w-1/2 pl-4 sm:pl-12'>
        <p className='text-5xl sm:text-6xl mb-12 font-semibold  text-[#13294b]'>Projects</p>
        <div className='sm:border-l-2 xl:ml-12 p-2 pl-0 sm:p-5 pt-8 border-[#293341]'>
            <p className='sm:text-xl max-w-full sm:ml-4'>
            Feel free to peruse my modest collection of projects, a reflection of my
             ongoing journey in web development. These creations represent my earnest
              efforts to deliver simple, effective, and user-friendly solutions. I welcome
               your consideration and look forward to sharing my work with you.
            </p>
            
        </div>
    </div>
    <div className='lg:w-1/2 grid grid-cols-[repeat(auto-fit,minmax(150px,300px))] grid-rows-[repeat(auto-fit,minmax(100px,150px))] gap-2 place-items-center place-content-center mt-10 lg:mt-0 overflow-y-auto'>
       <div className="bg-white w-full h-full"></div>
       <div className="bg-white w-full h-full"></div>
       <div className="bg-white w-full h-full"></div>
       <div className="bg-white w-full h-full"></div>
       
    </div>
</div>
  )
}

export default Projects