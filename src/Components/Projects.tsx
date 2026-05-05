import { forwardRef, useState, useEffect, useRef, useCallback } from 'react'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// automotive-crm
import crmHome1 from '../images/projects/automotive-crm/home.png'
import crmHome2 from '../images/projects/automotive-crm/home2.png'
import crmStc1 from '../images/projects/automotive-crm/stc.png'
import crmStc2 from '../images/projects/automotive-crm/stc2.png'

// construction-cms
import constructionVideo from '../images/projects/construction-cms/dsvideo.mp4'

// dealership-saas
import saasAdmin1 from '../images/projects/dealership-saas/admin1.png'
import saasAdmin2 from '../images/projects/dealership-saas/admin2.png'
import saasTenant1 from '../images/projects/dealership-saas/tenant1.png'
import saasTenant2 from '../images/projects/dealership-saas/tenant2.png'
import saasTenant3 from '../images/projects/dealership-saas/tenant3.png'
import saasTenant4 from '../images/projects/dealership-saas/tenant4.png'
import saasTenant5 from '../images/projects/dealership-saas/tenant5.png'

// dental
import dentalPoster from '../images/projects/dental/home1.png'
import dentalVideo from '../images/projects/dental/dental.webm'

// inventory-vendor
import vendorHome1 from '../images/projects/inventory-vendor/home.png'
import vendorHome2 from '../images/projects/inventory-vendor/home2.png'
import vendorHome3 from '../images/projects/inventory-vendor/home3.png'
import vendorHome4 from '../images/projects/inventory-vendor/home4.png'
import vendorHome5 from '../images/projects/inventory-vendor/dashboard.png'

// wellness-app
import wellnessHome from '../images/projects/wellness-app/home.png'
import wellnessAppHome from '../images/projects/wellness-app/apphome.png'
import wellnessLogin from '../images/projects/wellness-app/login.png'
import wellnessJournal from '../images/projects/wellness-app/journal.png'
import wellnessJournal1 from '../images/projects/wellness-app/journal1.png'
import wellnessAffirmation from '../images/projects/wellness-app/affirmation.png'
import wellnessChart from '../images/projects/wellness-app/chart.png'
import wellnessChart2 from '../images/projects/wellness-app/chart2.png'
import wellnessChart3 from '../images/projects/wellness-app/chart3.png'
import wellnessChart4 from '../images/projects/wellness-app/chart4.png'
import wellnessUserView from '../images/projects/wellness-app/userview.png'
import wellnessAdminAnalytics from '../images/projects/wellness-app/admin_analytics.png'

// mirinda-mewi
import mewi from '../images/projects/mirinda-mewi/mewi.png'

// ─── How to add media ─────────────────────────────────────────────────────────
//
//  Drop files into src/images/projects/{folder-name}/
//  Then import and wire up:
//
//  import crm1 from '../images/projects/automotive-crm/dashboard.png'
//  import crm2 from '../images/projects/automotive-crm/leads.png'
//
//  On the project object:
//    images: [crm1, crm2]            ← slideshow (auto-advances every 4s)
//    poster: crm1, video: '...'      ← hover-to-play video with thumbnail
//    liveUrl: 'https://...'          ← shown as "Live" button on the card
//
// ─────────────────────────────────────────────────────────────────────────────

interface Project {
  title: string
  description: string
  tags: string[]
  images?: string[]
  poster?: string
  video?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'On-Demand Delivery Platform',
    description:
      'A complete delivery ecosystem spanning six applications — customer app, driver app, merchant mobile app, merchant web portal, admin dashboard, and backend, serving hundreds of daily active users. Features live order tracking, automated driver payouts, and a driver onboarding flow with identity and document verification.',
    tags: ['Mobile App', 'Web App', 'Real-time'],
  },
  {
    title: 'Automotive Lead Management CRM',
    description:
      'A CRM built for an automotive group managing 700+ monthly leads across multiple dealerships — from first contact through to signed sale. Integrated with eight external services including SMS, Gmail, digital signatures, vehicle registration lookup, and Google Sheets for reporting.',
    tags: ['CRM', 'Web App', 'Integrations'],
    images: [crmHome1, crmHome2, crmStc1, crmStc2],
    liveUrl:"https://www.sellthecar.com.au"
  },
  {
    title: 'Car Dealership Management SaaS',
    description:
      'A multi-tenant SaaS platform deployed across a franchise network of car dealerships to manage inventory, leads, and sales teams. Each dealership runs in an isolated environment with role hierarchy from franchise owner down to individual reps, with automatic syndication to third-party marketplaces.',
    tags: ['SaaS', 'Multi-tenant', 'Web App'],
    images: [saasAdmin1, saasAdmin2, saasTenant1, saasTenant2, saasTenant3, saasTenant4, saasTenant5],
    liveUrl:"https://liquid.tamarind.cloud"
  },
  {
    title: 'Logistics & Inventory Management',
    description:
      'An internal operations platform for a logistics operator with fine-grained RBAC — administrators control exactly what each staff member can view or action. Built with calendar-based scheduling, barcode-driven inventory tracking across multiple warehouses, and automated report generation.',
    tags: ['Logistics', 'Web App', 'RBAC'],
  },
  {
    title: 'Inventory & Vendor Portal',
    description:
      'A dual-portal inventory system serving an internal admin team and a network of external dealers. Dealers log in to place and track orders; admins manage stock, process vendor purchases, track damaged goods, and run cycle counts — engineered to stay responsive at scale.',
    tags: ['Inventory', 'Web App', 'B2B'],
    images: [vendorHome1, vendorHome2, vendorHome3, vendorHome4, vendorHome5 ],
    liveUrl:"https://admin.eliteimport.ca"
  },
  {
    title: 'Logistics & Automated SMS Platform',
    description:
      'A shipment management platform with automated communication for a transport operator handling dozens of daily runs. The system sends status updates to drivers and customers, schedules messages in advance, runs multi-step sequences, and handles inbound replies — zero manual effort from the team.',
    tags: ['Logistics', 'Automation', 'Web App'],
  },
  {
    title: 'Coming Soon: Spiritual Wellness Mobile App',
    description:
      'A cross-platform wellness app for iOS, Android, and web with AI-powered journaling that analyses entries and generates personalised affirmations, spiritual charts, tarot readings, guided meditations, a structured courses section, and a social compatibility feature — live in both app stores.',
    tags: ['Mobile App', 'AI', 'iOS & Android'],
    images: [wellnessHome, wellnessAppHome, wellnessLogin, wellnessJournal, wellnessJournal1, wellnessAffirmation, wellnessChart, wellnessChart2, wellnessChart3, wellnessChart4, wellnessUserView, wellnessAdminAnalytics],
    liveUrl:"https://kabbalahcodes.com"
  },
  {
    title: 'Task & Timesheet Management',
    description:
      'A team productivity tool with real-time task tracking, timesheet submission and approval workflows, digital document signing, and automated reminders for incomplete timesheets — deployed for a professional services team of 20+ staff. All updates reflect instantly without page refreshes.',
    tags: ['Web App', 'Real-time', 'Productivity'],
  },
  {
    title: 'Dental Practice Website',
    description:
      '(Region locked to CA/USA) A marketing and booking website for a dental clinic group operating across Canada and the United States. Built with a focus on SEO, accessible design, per-clinic location pages with maps, treatment detail pages, geo-restricted access, and integrated online appointment booking.',
    tags: ['Web App', 'SEO', 'Healthcare'],
    poster: dentalPoster,
    video: dentalVideo,
    liveUrl:"https://smiledesign.ca"
  },
  {
    title: 'Architecture Company Portfolio & CMS',
    description:
      'A portfolio website and content management system for an architecture firm. Features smooth page transitions, responsive desktop and mobile layouts, a careers portal with job listings and application tracking, and a full admin panel so the team manages all content independently.',
    tags: ['Web App', 'CMS', 'Next.js'],
    video: constructionVideo,
    liveUrl:"https://designassociates.in"
  },
  {
    title: 'Mirinda Mewi',
    description: 'A Component library which can be summed up by two words: Orange and soft. Start using the component Library or take a look at the components to appreciate the softness!',
    tags: ['Web App', 'Personal'],
    images: [mewi],
    liveUrl: 'https://mirinda-mewi.netlify.app/',
  },
]

// ─── Media sub-components ─────────────────────────────────────────────────────

const Placeholder = () => (
  <div className='w-full h-full flex flex-col items-center justify-center gap-2 text-slate-600'>
    <MdOutlineDeveloperMode className='text-4xl' />
    <span className='text-xs tracking-widest uppercase'>Demo coming soon</span>
  </div>
)

const SlideshowMedia = ({ images, title }: { images: string[]; title: string }) => {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % images.length)
        setFading(false)
      }, 300)
    }, 4000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <img
      src={images[index]}
      alt={title}
      className={`w-full h-full object-contain transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
    />
  )
}

const VideoMedia = ({ video, poster, title }: { video: string; poster?: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)

  const handleEnter = () => {
    setHovered(true)
    videoRef.current?.play()
  }
  const handleLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className='w-full h-full relative' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {poster && (
        <img
          src={poster}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
      )}
      <video
        ref={videoRef}
        src={video}
        loop
        muted
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />
      {!hovered && (
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
          <div className='bg-black/40 rounded-full p-3'>
            <svg className='w-6 h-6 text-white fill-current' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Gallery Modal ────────────────────────────────────────────────────────────

const GalleryModal = ({ images, title, startIndex, onClose }: { images: string[]; title: string; startIndex: number; onClose: () => void }) => {
  const [index, setIndex] = useState(startIndex)

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, prev, next])

  useEffect(() => { document.body.style.overflow = 'hidden'; return () => { document.body.style.overflow = '' } }, [])

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm' onClick={onClose}>
      <div className='relative flex flex-col items-center max-w-5xl w-full mx-4' onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className='absolute -top-10 right-0 text-white/70 hover:text-white transition-colors'>
          <FiX className='text-2xl' />
        </button>
        <div className='relative w-full flex items-center justify-center'>
          {images.length > 1 && (
            <button onClick={prev} className='absolute left-0 z-10 -translate-x-12 text-white/70 hover:text-white transition-colors hidden sm:block'>
              <FiChevronLeft className='text-4xl' />
            </button>
          )}
          <img src={images[index]} alt={`${title} ${index + 1}`} className='max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl' />
          {images.length > 1 && (
            <button onClick={next} className='absolute right-0 z-10 translate-x-12 text-white/70 hover:text-white transition-colors hidden sm:block'>
              <FiChevronRight className='text-4xl' />
            </button>
          )}
        </div>
        {images.length > 1 && (
          <div className='flex gap-2 mt-4'>
            {images.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/30 hover:bg-white/60'}`} />
            ))}
          </div>
        )}
        {images.length > 1 && (
          <div className='flex gap-3 mt-4 sm:hidden'>
            <button onClick={prev} className='text-white/70 hover:text-white transition-colors'><FiChevronLeft className='text-3xl' /></button>
            <button onClick={next} className='text-white/70 hover:text-white transition-colors'><FiChevronRight className='text-3xl' /></button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => {
  const hasVideo = Boolean(project.video)
  const hasImages = project.images && project.images.length > 0
  const [galleryOpen, setGalleryOpen] = useState(false)

  return (
    <>
    {galleryOpen && hasImages && (
      <GalleryModal images={project.images!} title={project.title} startIndex={0} onClose={() => setGalleryOpen(false)} />
    )}
    <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col'>
      <div
        className={`bg-[#0d1b2e] aspect-video flex items-center justify-center overflow-hidden${hasImages ? ' cursor-pointer relative group' : ''}`}
        onClick={() => hasImages && setGalleryOpen(true)}
      >
        {hasVideo ? (
          <VideoMedia video={project.video!} poster={project.poster} title={project.title} />
        ) : hasImages ? (
          <>
            <SlideshowMedia images={project.images!} title={project.title} />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center'>
              <span className='text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full'>
                View Gallery
              </span>
            </div>
          </>
        ) : (
          <Placeholder />
        )}
      </div>

      <div className='p-6 flex flex-col gap-3 flex-1'>
        <div className='flex flex-wrap gap-2'>
          {project.tags.map(tag => (
            <span key={tag} className='text-xs font-medium px-3 py-1 rounded-full bg-[#e8f4fb] text-[#23a6d5] tracking-wide'>
              {tag}
            </span>
          ))}
        </div>
        <h3 className='text-lg font-semibold text-[#13294b] leading-snug'>{project.title}</h3>
        <p className='text-slate-500 text-sm leading-relaxed flex-1'>{project.description}</p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-white bg-[#13294b] hover:bg-[#1e3d6e] transition-colors px-4 py-2 rounded-lg self-start'
          >
            <FiExternalLink className='text-base' />
            Live
          </a>
        )}
      </div>
    </div>
    </>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref} className='bg-slate-100 py-24 px-5 sm:px-12'>
      <p className='text-5xl sm:text-6xl mb-4 font-semibold text-[#13294b]'>Projects</p>
      <p className='text-slate-500 mb-12 sm:text-lg max-w-2xl'>
        Production systems built end-to-end across logistics, automotive, wellness, healthcare, and construction.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
})

export default Projects
