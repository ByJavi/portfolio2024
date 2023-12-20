import ButtonBack from '../components/BackToPage'

function moreProjects({ theme }) {
  return (
    <>
      <main
        className={`bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter${
          theme ? 'dark' : 'light'
        } bg-gradient-color`}
      >
        <ButtonBack theme={theme} />
        <div className="flex items-center h-screen flex-col pt-20 pb-6">
          <article className="mt-10 mb-5 px-5">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold ">
              Mas Proyectos
            </h1>
          </article>
        </div>
      </main>
    </>
  )
}

export default moreProjects
