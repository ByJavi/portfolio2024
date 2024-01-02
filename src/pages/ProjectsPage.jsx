// ProjectsPage.js
import { useParams } from 'react-router-dom'

import BackToPage from '../components/BackToPage'
import ProjectDetail from '../components/ProyectDetail'

import data from '../data/projects.json'

function ProjectsPage({ theme }) {
  const { id } = useParams()
  console.log(id)
  const selectedWork = data.find((work) => work.url === id)
  return (
    <main
      className={`min-h-screen w-full bg-gradient-color bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter${
        theme ? 'dark' : 'light'
      }`}
    >
      <BackToPage theme={theme} />
      <section className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        {selectedWork ? (
          <ProjectDetail project={selectedWork} />
        ) : (
          <div>Proyecto no encontrado</div>
        )}
      </section>
    </main>
  )
}

export default ProjectsPage
