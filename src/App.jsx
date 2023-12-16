import { useEffect, useState } from 'react'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Timeline from './components/Timeline'

import { sun, moon } from './utils/constants'
import CarouselText from './components/CarouselText/CarouselText'
import ScrollUp from './components/ScrollUp'

function App() {
  // Inicializar el tema desde el localStorage o establecer 'dark' como valor predeterminado
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'dark')
  const [isVisible, setIsVisible] = useState(true)

  // Usar un useEffect para configurar el tema inicial basado en la configuración del sistema
  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    // Establecer el tema inicial solo si no hay un tema almacenado en el localStorage
    if (!storedTheme) {
      setTheme(systemTheme)
    }
  }, [storedTheme])

  // Usar otro useEffect para aplicar el tema y guardarlo en el localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY || document.documentElement.scrollTop
  //     setIsVisible(scrollY > window.innerHeight)
  //   }

  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <>
      <button
        id="darkmode"
        type="button"
        onClick={handleThemeChange}
        className="fixed p-2 z-10 right-10 top-4 text-lg rounded-md bg-stone-950 dark:bg-purple-40 dark:bg-violet-300"
      >
        {theme === 'dark' ? sun : moon}
      </button>
      <main className="bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 min-h-screen font-inter ">
        <div className="">
          <Resume />
          <CarouselText texts="Portfolio" />
          <Portfolio />
          <CarouselText texts="Timeline" />
          <Timeline />
          <Contact />
          <Footer />
        </div>
        <ScrollUp theme={theme} />
      </main>
    </>
  )
}

export default App
