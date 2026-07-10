import { usePointer } from './hooks/usePointer'
import { Nav } from './Components/Nav'
import { Hero } from './Components/Hero'
import { Stats } from './Components/Stats'
import { Work } from './Components/Work'
import { Experience } from './Components/Experience'
import { Toolkit } from './Components/Toolkit'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

function App() {
  const pointer = usePointer()

  return (
    <>
      <Nav />
      <main>
        <Hero pointer={pointer} />
        <Stats />
        <Work />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
