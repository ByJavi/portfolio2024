import { Link } from 'react-router-dom'
// import Fade from 'react-reveal/Fade'

import Button from './Button'
import CarouselText from './CarouselText'
import CarouselImage from './CarouselImage'

import data from '../data/projects.json'

// Ajusta la ruta según la ubicación real
function Portfolio() {
  console.log(data)
  return (
    <section name="portfolio" className="my-10">
      {/* <Fade bottom> */}
      <CarouselText texts="PORTFOLIO" />
      <section className="my-10">
        <CarouselImage data={data} />
      </section>

      <div className="flex items-center justify-center mx-10">
        <Link to="/works">
          <Button texts="Mas Proyectos" />
        </Link>
      </div>
      {/* </Fade> */}
    </section>
  )
}

export default Portfolio
