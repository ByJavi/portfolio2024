import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

import PortfolioCard from './PortfolioCard'

const CarouselImage = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  const CardExample = [
    {
      url: './wallpaper.png',
      title: 'example',
      id: 1
    },
    {
      url: './wallpaper.png',
      title: 'example',
      id: 2
    },
    {
      url: './wallpaper.png',
      title: 'example',
      id: 3
    },
    {
      url: './wallpaper.png',
      title: 'example',
      id: 4
    },
    {
      url: './wallpaper.png',
      title: 'example',
      id: 5
    }
  ]
  return (
    <section ref={targetRef} className="relative h-[500vh]">
      <div className="sticky top-40 md:top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-4" style={{ x }}>
          {CardExample.map((card) => {
            return <PortfolioCard card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default CarouselImage
