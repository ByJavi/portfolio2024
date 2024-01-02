function ProyectDetail({ project }) {
  return (
    <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto mt-20">
      {/* IMAGEN PREVIEW */}
      <div className="relative">
        <img
          className="w-full"
          src={project.preview}
          alt="Sunset in the mountains"
        />
      </div>
      {/* TITULO */}

      <h1 className="text-2xl sm:text-4xl font-semibold inline-block mb-2">
        {project.title}
      </h1>

      {/* TECNOLOGIAS */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Technologies Used:</h2>
        <ul className="flex flex-wrap">
          {project.techs.map((tech, index) => (
            <li key={index} className="mr-3 mb-2">
              <span className="bg-indigo-600 text-white rounded-md py-1 px-3">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGENES DESKTOP */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Desktop Screenshots:</h2>
        <div className="flex">
          {project.imagesDesk.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Desktop Screenshot ${index + 1}`}
              className="w-1/3 h-auto mr-2 rounded-md"
            />
          ))}
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
