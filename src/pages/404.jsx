import BackToPage from '../components/BackToPage'

const NotFound = ({ theme }) => {
  return (
    <section
      className={`bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter${
        theme ? 'dark' : 'light'
      }`}
    >
      <BackToPage theme={theme} />
      <article className="flex items-center justify-center h-screen flex-col pt-20 pb-6 text-center">
        <h2 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold ">
          404 - Página no encontrada
        </h2>
        <p className="text-base md:text-xl mb-3 font-medium">
          Lo sentimos, la página que estás buscando no existe.
        </p>
      </article>
    </section>
  )
}

export default NotFound
