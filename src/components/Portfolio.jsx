import Button from './Button'
import CarouselText from './CarouselText/CarouselText'
import PortfolioCard from './PortfolioCard/PortfolioCard'

function Portfolio() {
  return (
    <section name="portfolio" className="my-10">
      <div className="my-10 py-10">
        <CarouselText texts="Portfolio" />
      </div>
      <div className="max-w-5xl w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
        <div className="flex items-center justify-center m-10 p-5">
          <Button texts="Mas Proyectos" />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
