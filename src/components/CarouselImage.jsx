import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

import PortfolioCard from './PortfolioCard'

const CarouselImage = ({ data }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])

  return (
    <section ref={targetRef} className="relative h-[500vh]">
      <div className="sticky top-60 md:top-40 xl:top-5 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-4" style={{ x }}>
          {data.map((card) => {
            return <PortfolioCard card={card} key={card.id} />
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default CarouselImage
