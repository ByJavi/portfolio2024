// App.js
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

import Home from './pages/home'
import NotFound from './pages/404'
import ScrollUp from './components/ScrollUp'

function App() {
  const storedTheme = localStorage.getItem('theme')

  const [theme, setTheme] = useState(storedTheme || 'light')
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
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home theme={theme} />
            <ScrollUp
              theme={theme}
              handleThemeChange={handleThemeChange}
              scrollY={scrollY}
              handleScrollToTop={handleScrollToTop}
            />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <NotFound theme={theme} />
            <ScrollUp
              theme={theme}
              handleThemeChange={handleThemeChange}
              scrollY={scrollY}
              handleScrollToTop={handleScrollToTop}
            />
          </>
        }
      />
    </Routes>
  )
}

export default App
