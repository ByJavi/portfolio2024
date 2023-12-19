import LazyLoad from 'react-lazyload'

import Button from './Button'
import CarouselText from './CarouselText/CarouselText'
import PortfolioCard from './PortfolioCard/PortfolioCard'

function Portfolio() {
  return (
    <section name="portfolio" className="my-10">
      <div className="my-10 py-10">
        <CarouselText texts="Portfolio" />
      </div>
      <div className="">
        <div className="flex flex-col gap-8">
          <LazyLoad height={200} offset={200}>
            <PortfolioCard />
          </LazyLoad>
        </div>
        <div
          className="flex items-center justify-center m-10 p-5"
          data-aos="slide-up"
        >
          <Button texts="Mas Proyectos" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
