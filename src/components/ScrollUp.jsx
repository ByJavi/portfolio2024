import { animateScroll } from 'react-scroll'

import { arrowUpDark, arrowUpWhite } from '../utils/constants'

function ScrollUp({ theme }) {
  const options = {
    duration: 500,
    smooth: true
  }

  const scrollToTop = () => {
    animateScroll.scrollToTop(options)
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed p-2 z-10 right-10 bottom-4 text-lg rounded-md bg-stone-950 dark:bg-purple-40 dark:bg-violet-300"
    >
      {theme === 'light' ? arrowUpWhite : arrowUpDark}
    </button>
  )
}

export default ScrollUp
