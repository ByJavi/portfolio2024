import { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll'

import Home from './pages/home'
import { sun, moon, arrowUpWhite, arrowUpDark } from './utils/constants'

function App() {
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'dark')

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true
    })
  }

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

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
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
      <Home theme={theme} />

      {scrollY > 10 && (
        <button
          id="scrollUp"
          onClick={handleScrollToTop}
          className="fixed p-2 z-10 right-10 bottom-4 text-lg rounded-md bg-stone-950 dark:bg-violet-300"
        >
          {theme === 'light' ? arrowUpWhite : arrowUpDark}
        </button>
      )}
    </>
  )
}

export default App
