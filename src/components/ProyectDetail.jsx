import { motion, AnimatePresence } from 'framer-motion'

function ProyectDetail({ project }) {
  return (
    <div className="relative mb-10 rounded overflow-hidden mx-auto mt-20">
      {/* IMAGEN PREVIEW */}
      <div className="relative">
        <img
          className="w-full h-full object-cover"
          src={project.preview}
          alt="Sunset in the mountains"
        />
      </div>

      {/* CONTENIDO SUPERIOR */}
      <div className="absolute top-5 right-2 xl:top-10 xl:right-5 p-4 text-stone-300">
        {/* TITULO */}
        <h1 className="text-4xl md:text-6xl xl:text-8xl hidden sm:block font-semibold mb-2">
          {project.title}
        </h1>
        {/* TECNOLOGIAS */}
        <div className="hidden sm:block">
          <h2 className="text-xl font-semibold mb-3">Technologies Used:</h2>
          <ul className="flex flex-wrap">
            {project.techs.map((tech, index) => (
              <li key={index} className="mr-3 mb-2">
                <span className="rounded-md py-1 px-3">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CONTENIDO INFERIOR (Móvil) */}
      <div className="sm:hidden p-4 text-center">
        <h1 className="text-4xl sm:text-4xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-md font-semibold mb-3">Technologies Used:</h2>
        <ul className="flex flex-wrap justify-center">
          {project.techs.map((tech, index) => (
            <li key={index} className="mr-3 mb-2">
              <span className="rounded-md py-1 px-3">{tech}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGENES DESKTOP */}
      <div
        className="mb-8 mt-20 overflow-y-auto"
        style={{ scrollBehavior: 'smooth' }}
      >
        <h2 className="text-xl font-semibold mb-3">Desktop Screenshots:</h2>
        <div className="flex flex-col">
          <AnimatePresence>
            {project.imagesDesk.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Desktop Screenshot ${index + 1}`}
                className="w-full h-auto mb-2 rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  positionTransition: { ease: 'easeInOut' }
                }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* IMAGENES MOBIL */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Mobile Screenshots:</h2>
        <div className="flex">
          {project.imagesMobil.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Mobile Screenshot ${index + 1}`}
              className="w-1/3 h-auto mr-2 rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProyectDetail
