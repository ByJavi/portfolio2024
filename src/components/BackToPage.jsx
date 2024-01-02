import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location = useLocation()

  // Obtén los fragmentos de la ruta y filtra los elementos vacíos
  const pathSegments = location.pathname.split('/').filter(Boolean)

  return (
    <div className="fixed p-2 z-10 left-10 top-4 text-lg rounded-md bg-stone-950 dark:bg-violet-700">
      {/* Muestra la dirección actual */}
      {pathSegments.length > 0 && (
        <div className="flex items-center text-white dark:text-black">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={index}>
              <span className="mx-1">/</span>
              <Link
                to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className="hover:underline"
              >
                {segment}
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default Breadcrumb
