import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { arrowLeftWhite, arrowLeftBlack } from '../utils/constants'

const ButtonBack = ({ theme }) => {
  const location = useLocation()

  // Si estamos en la raíz, el enlace de retroceso lleva de vuelta al inicio
  const parentPath =
    location.pathname === '/'
      ? '/'
      : location.pathname.split('/').slice(0, -1).join('/')

  return (
    <Link
      to={parentPath || '/'} // Utiliza la raíz si parentPath está vacío
      className="fixed p-2 z-10 left-10 top-4 text-lg rounded-md bg-stone-950 dark:bg-violet-300"
    >
      {theme === 'light' ? arrowLeftWhite : arrowLeftBlack}
    </Link>
  )
}

export default ButtonBack
