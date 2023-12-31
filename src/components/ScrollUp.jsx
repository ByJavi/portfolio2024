// Buttons.js
import { sun, moon, arrowUpWhite, arrowUpDark } from '../utils/constants'

const ScrollUp = ({ theme, handleThemeChange, scrollY, handleScrollToTop }) => {
  return (
    <>
      <button
        id="darkmode"
        type="button"
        onClick={handleThemeChange}
        aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        className="fixed p-2 z-10 right-1 md:right-10 top-4 text-lg rounded-md bg-stone-950 dark:bg-violet-700 hover:bg-stone-800 dark:hover:bg-violet-600"
      >
        {theme === 'dark' ? sun : moon}
      </button>
      {scrollY > 10 && (
        <button
          id="scrollUp"
          onClick={handleScrollToTop}
          className="fixed p-2 z-10 right-10 bottom-4 text-lg rounded-md bg-stone-950 dark:bg-violet-700 hover:bg-stone-800 dark:hover:bg-violet-600"
        >
          {theme === 'light' ? arrowUpWhite : arrowUpDark}
        </button>
      )}
    </>
  )
}

export default ScrollUp
