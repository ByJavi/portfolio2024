import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import CarouselText from './CarouselText'
import CarouselImage from './CarouselImage'
import data from '../data/projects.json'

function Portfolio() {
  // Estado para almacenar los datos del JSON
  const [projectsData, setProjectsData] = useState([])

  // Efecto para cargar los datos del JSON una vez
  useEffect(() => {
    // Verificar si ya se han cargado los datos para evitar la recarga
    if (projectsData.length === 0) {
      // Simulación de carga de datos desde el archivo JSON
      // Reemplazar con la lógica de carga real
      console.log('Cargando datos desde el archivo JSON...')
      setProjectsData(data)
    }
  }, [projectsData])

  return (
    <section name="portfolio" className="my-10">
      <CarouselText texts="PORTFOLIO" />
      <section className="my-10">
        {/* Pasar los datos almacenados al componente CarouselImage */}
        <CarouselImage data={projectsData} />
      </section>

      <div className="flex items-center justify-center mx-10">
        <Link to="/works">
          <Button texts="Más Proyectos" />
        </Link>
      </div>
    </section>
  )
}

export default Portfolio
