import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ButtonBack from '../components/BackToPage'
import data from '../data/projects.json'

function MoreProjects({ theme }) {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    if (projectsData.length === 0) {
      // Simulación de carga de datos desde el archivo JSON
      // Reemplazar con la lógica de carga real
      console.log('Cargando datos desde el archivo JSON...')
      setProjectsData(data)
    }
  }, [projectsData])

  return (
    <main className="min-h-screen w-full bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter bg-gradient-color">
      <ButtonBack theme={theme} />
      <section className="flex items-center flex-col pt-20 pb-6">
        <h1 className="mt-10 mb-5 px-5 text-4xl md:text-7xl md:mb-3 font-bold">
          Más Proyectos
        </h1>
        <ul className="list-none">
          {projectsData.map((project) => (
            <li key={project.id} className="mb-3">
              <Link
                to={`/works/${project.url}`}
                className="text-indigo-600 hover:underline"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default MoreProjects
