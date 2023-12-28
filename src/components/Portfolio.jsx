import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import Button from './Button'
import CarouselText from './CarouselText'
import CarouselImage from './CarouselImage'

// Ajusta la ruta según la ubicación real
function Portfolio() {
  return (
    <section name="portfolio" className="my-10">
      <Fade bottom>
        <CarouselText texts="PORTFOLIO" />

        <CarouselImage />
        <div className="flex items-center justify-center m-10 p-5">
          <Link to="/works">
            <Button texts="Mas Proyectos" />
          </Link>
        </div>
      </Fade>
    </section>
  )
}

export default Portfolio
