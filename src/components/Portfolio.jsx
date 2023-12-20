import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import Button from './Button'
import CarouselText from './CarouselText'
import PortfolioCard from './PortfolioCard'

import fetchDataFromGoogleSheets from '../data/cvs.js' // Ajusta la ruta según la ubicación real

function Portfolio() {
  console.log(fetchDataFromGoogleSheets())
  return (
    <section name="portfolio" className="my-10">
      <div className="my-10 py-10">
        <CarouselText texts="PORTFOLIO" />
      </div>
      <Fade bottom>
        <div className="flex flex-col gap-8">
          <LazyLoad height={200} offset={200}>
            <PortfolioCard />
          </LazyLoad>
        </div>
        <div
          className="flex items-center justify-center m-10 p-5"
          data-aos="slide-up"
        >
          <Link to="/works">
            <Button texts="Mas Proyectos" />
          </Link>
        </div>
      </Fade>
    </section>
  )
}

export default Portfolio
