import { Link } from 'react-router-dom'

function PortfolioItem({ project }) {
  return (
    <Link
      to={`/works/${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="border-b-4 border-r-4 border-stone-900 dark:border-violet-700 rounded-md overflow-hidden"
    >
      <img
        src={project.preview}
        alt={project.resume}
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl  mb-2 md:mb-3 font-semibold ">
          {project.title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm  ">
          {project.techs.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold shadow shadow-stone-900 dark:shadow-violet-700 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </Link>
  )
}

export default PortfolioItem
