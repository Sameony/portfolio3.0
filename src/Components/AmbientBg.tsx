import type { PointerOffset } from '../hooks/usePointer'

interface Props {
  pointer: PointerOffset
}

export function AmbientBg({ pointer }: Props) {
  const blob1Style: React.CSSProperties = {
    position: 'absolute',
    top: '-10%',
    left: '-15%',
    width: '700px',
    height: '700px',
    borderRadius: '50%',
    background: 'rgba(164,92,58,0.18)',
    filter: 'blur(120px)',
    animation: 'drift 22s ease-in-out infinite',
    transform: `translate(calc(${pointer.x} * 15px), calc(${pointer.y} * 15px))`,
    willChange: 'transform',
  }

  const blob2Style: React.CSSProperties = {
    position: 'absolute',
    bottom: '-15%',
    right: '-10%',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'rgba(122,116,96,0.16)',
    filter: 'blur(140px)',
    animation: 'drift2 27s ease-in-out infinite',
    transform: `translate(calc(${pointer.x} * -27px), calc(${pointer.y} * -27px))`,
    willChange: 'transform',
  }

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(43,40,35,0.05) 1px, transparent 0)',
          backgroundSize: '30px 30px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />
      {/* Clay blob — top left */}
      <div style={blob1Style} />
      {/* Taupe blob — bottom right */}
      <div style={blob2Style} />
    </div>
  )
}
