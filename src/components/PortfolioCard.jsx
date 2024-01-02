import { Link } from 'react-router-dom'

import LazyLoad from 'react-lazyload'

function PortfolioCard({ card }) {
  return (
    <Link
      key={card.id}
      className="group relative h-screen w-screen overflow-hidden "
      to={`/works/${card.url}`}
    >
      <LazyLoad once>
        <img
          src={card.preview}
          alt={card.title}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        />
      </LazyLoad>
    </Link>
  )
}

export default PortfolioCard
