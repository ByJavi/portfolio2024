import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackToPage from '../components/BackToPage'
import ProjectDetail from '../components/ProyectDetail'
import data from '../data/projects.json'

function ProjectsPage({ theme }) {
  const { id } = useParams()
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    if (projectsData.length === 0) {
      // Simulación de carga de datos desde el archivo JSON
      // Reemplazar con la lógica de carga real
      console.log('Cargando datos desde el archivo JSON...')
      setProjectsData(data)
    }
  }, [projectsData])

  const selectedWork = projectsData.find((work) => work.url === id)

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
