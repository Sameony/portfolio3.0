export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline)' }}>
      <div
        className="section-inner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px var(--gutter)',
          fontSize: '12.5px',
          color: 'var(--faint)',
        }}
      >
        <span>© {new Date().getFullYear()} Mohammed Sameer</span>
        <a
          href="#top"
          style={{
            color: 'var(--faint)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--faint)')}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
