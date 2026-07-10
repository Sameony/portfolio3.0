export function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(233,228,217,0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(43,40,35,0.08)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px clamp(20px,5vw,72px)',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <a
          href="#top"
          style={{
            fontWeight: 500,
            fontSize: '15px',
            color: 'var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          Mohammed Sameer
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,32px)', flexShrink: 0 }}>
          <NavLink href="#work" hideOnMobile>Work</NavLink>
          <NavLink href="#about" hideOnMobile>About</NavLink>
          <a
            href="#contact"
            style={{
              fontSize: '14px',
              color: 'var(--ink)',
              textDecoration: 'none',
              fontFamily: "'Newsreader', Georgia, serif",
              fontStyle: 'italic',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--clay)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </nav>
  )
}

function NavLink({
  href,
  children,
  hideOnMobile,
}: {
  href: string
  children: React.ReactNode
  hideOnMobile?: boolean
}) {
  return (
    <a
      href={href}
      className={hideOnMobile ? 'hidden sm:inline' : undefined}
      style={{
        fontSize: '14px',
        color: 'var(--muted)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
    >
      {children}
    </a>
  )
}
