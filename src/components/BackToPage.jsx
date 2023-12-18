import { Link, useLocation } from 'react-router-dom'
import { arrowLeftWhite, arrowLeftBlack } from '../utils/constants'

const ButtonBack = ({ theme }) => {
  const location = useLocation()
  const parts = location.pathname.split('/').filter(Boolean) // Filtra las partes vacías

  // Elimina la última parte de la ruta
  const parentPath = parts.slice(0, -1).join('/')
  return (
    <Link
      to={parentPath}
      className="fixed p-2 z-10 left-10 top-4 text-lg rounded-md bg-stone-950 dark:bg-violet-300"
    >
      {theme === 'light' ? arrowLeftWhite : arrowLeftBlack}
    </Link>
  )
}

export default ButtonBack
