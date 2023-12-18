import { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Timeline from './components/Timeline'
import { sun, moon, arrowUpDark, arrowUpWhite } from './utils/constants'

function App() {
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'dark')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'

    if (!storedTheme) {
      setTheme(systemTheme)
    }
  }, [storedTheme])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  // MOSTRAR BOTÓN UP
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  const handleScrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true
    })
  }

  return (
    <>
      <button
        id="darkmode"
        type="button"
        onClick={handleThemeChange}
        aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        className="fixed p-2 z-10 right-10 top-4 text-lg rounded-md bg-stone-950 dark:bg-violet-300"
      >
        {theme === 'dark' ? sun : moon}
      </button>

      <main
        className={`bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter${
          theme ? 'dark' : 'light'
        }`}
      >
        <div className="">
          <Resume />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
        {scrollY > 100 && (
          <button
            id="scrollUp"
            onClick={handleScrollToTop}
            className="fixed p-2 z-10 right-10 bottom-4 text-lg rounded-md bg-stone-950 dark:bg-violet-300"
          >
            {theme === 'light' ? arrowUpWhite : arrowUpDark}
          </button>
        )}
      </main>
    </>
  )
}

export default App
