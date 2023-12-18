import { useState } from 'react'
import Button from './Button'
import { useEffect } from 'react'

function Resume() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 200)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="resume"
      className={`flex items-center justify-center h-screen flex-col pt-20 pb-6" transition-transform ease-in-out duration-500 ${
        show ? 'traslate-y-0' : '-translate-y-full'
      }`}
    >
      <article className="text-center mt-10 mb-5 px-5">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold ">
          Ledesma Javier
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Desarrollador Web
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
          Combino mi interés técnico con mi dedicación al desarrollo web. Mi
          enfoque abarca tanto la resolución de desafíos técnicos como la
          creación de soluciones innovadoras en el mundo digital.
        </p>
      </article>
      <article className="flex gap-4 mb-60">
        <a href="Javier_Ledesma.pdf" target="_blank" rel="noreferrer">
          <Button texts="Curriculum" />
        </a>
        <a
          href="https://www.linkedin.com/in/javier-ledesma-254321226/"
          target="_blank"
          rel="noreferrer"
        >
          <Button texts="LinkedIn" />
        </a>
      </article>
    </section>
  )
}

export default Resume
