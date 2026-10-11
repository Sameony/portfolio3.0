import { useEffect, useRef, useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import type { Screenshot } from '../data/projects'

interface GalleryProps {
  title: string
  shots: Screenshot[]
  onClose: () => void
}

const navButton: React.CSSProperties = {
  background: 'rgba(233,228,217,0.08)',
  border: '1px solid rgba(233,228,217,0.18)',
  borderRadius: '999px',
  width: '44px',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--paper)',
  cursor: 'pointer',
  flexShrink: 0,
}

export function Gallery({ title, shots, onClose }: GalleryProps) {
  const [index, setIndex] = useState(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const count = shots.length
  const go = (step: number) => setIndex((i) => (i + step + count) % count)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [])

  // Warm the cache for the neighbours so paging feels instant.
  useEffect(() => {
    ;[shots[(index + 1) % count], shots[(index - 1 + count) % count]].forEach((shot) => {
      new Image().src = shot.src
    })
  }, [index, shots, count])

  const shot = shots[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(24,22,19,0.94)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '18px',
        padding: '16px',
      }}
    >
      <button
        ref={closeRef}
        aria-label="Close screenshots"
        onClick={onClose}
        style={{ ...navButton, position: 'absolute', top: '16px', right: '16px' }}
      >
        <FiX size={20} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px,3vw,32px)', maxWidth: '100%' }}
      >
        <button aria-label="Previous screenshot" onClick={() => go(-1)} style={navButton}>
          <FiChevronLeft size={22} />
        </button>
        <img
          key={shot.src}
          src={shot.src}
          alt={`${title}: ${shot.caption}`}
          style={{
            display: 'block',
            maxHeight: 'calc(100vh - 140px)',
            maxWidth: 'calc(100vw - 140px)',
            aspectRatio: '9/16',
            objectFit: 'contain',
            borderRadius: '14px',
            boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
          }}
        />
        <button aria-label="Next screenshot" onClick={() => go(1)} style={navButton}>
          <FiChevronRight size={22} />
        </button>
      </div>

      <p
        onClick={(e) => e.stopPropagation()}
        style={{ margin: 0, fontSize: '13px', letterSpacing: '0.06em', color: 'rgba(233,228,217,0.7)' }}
      >
        {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')} · {shot.caption}
      </p>
    </div>
  )
}
