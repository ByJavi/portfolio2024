function PortfolioCard() {
  return (
    <article className="relative inline-block w-full md:max-w-md pt-1 pl-1 font-medium group">
      <span className="absolute inset-0 transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-violet-700"></span>
      <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black dark:bg-violet-300 dark:group-hover:bg-violet-700 "></span>

      <div className="relative">
        <img
          src="wallpaper.png"
          alt="Imagen de testeo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-end">
          <p className="text-white dark:text-white  text-lg font-semibold">
            Nombre del Proyecto
          </p>
        </div>
      </div>
    </article>
  )
}

export default PortfolioCard
