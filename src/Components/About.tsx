import { forwardRef } from 'react'

const About = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='bg-slate-100 flex justify-center py-24 px-5'>
      <div className='w-full pl-4 sm:pl-12'>
        <p className='text-5xl sm:text-6xl mb-12 font-semibold text-[#13294b]'>About</p>
        <div className='sm:border-l-2 xl:ml-12 p-2 pl-0 sm:p-5 pt-8 border-[#293341]'>
          <p className='sm:text-xl max-w-full sm:ml-4'>
            Full-Stack Software Engineer with 4+ years building production-grade systems for businesses across
            logistics, automotive, healthcare, and wellness. I've shipped 12+ products end-to-end — real-time
            mobile apps, multi-tenant SaaS platforms, CRMs integrated with eight-plus external services, and
            content management systems. I work independently across the full stack: architecture, backend,
            frontend, and deployment on AWS and Azure.
          </p>
        </div>
      </div>
    </div>
  )
})

export default About
