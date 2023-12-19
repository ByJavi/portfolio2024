const CarouselText = ({ texts }) => {
  return (
    <section className="font-bold text-6xl opacity-20">
      <p className="marquee">
        <span>{texts}</span>
        <span>{texts}</span>
        <span>{texts}</span>
        <span>{texts}</span>
        <span>{texts}</span>
        <span>{texts}</span>
      </p>
    </section>
  )
}

export default CarouselText
