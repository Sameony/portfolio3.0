/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#e9e4d9',
        ink: '#2b2823',
        body: '#5c574e',
        muted: '#7a746a',
        faint: '#a49e93',
        clay: '#a45c3a',
        'ink-soft': '#443f38',
        'preview-bg': '#ded8ca',
        'preview-hover': '#d3cbb9',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      maxWidth: {
        container: '1240px',
      },
      screens: {
        preview: '860px',
      },
    },
  },
  plugins: [],
}
