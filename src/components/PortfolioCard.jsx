import LazyLoad from 'react-lazyload'

function PortfolioCard({ card }) {
  return (
    <div
      key={card.id}
      className="group relative h-screen w-screen overflow-hidden "
    >
      <LazyLoad once>
        <img
          src={card.url}
          alt={card.title}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        />
      </LazyLoad>
    </div>
  )
}

export default PortfolioCard
