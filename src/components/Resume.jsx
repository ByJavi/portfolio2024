// import Zoom from 'react-reveal'
import { motion } from 'framer-motion'

import Button from './Button'

function Resume() {
  return (
    <section
      id="resume"
      className="flex items-center justify-center h-screen flex-col pt-20 pb-6"
    >
      <motion.div
        className="flex items-center justify-center h-screen flex-col"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.article
          className="text-center mt-10 mb-5 px-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl mb-1 md:mb-3 font-bold">
            Ledesma Javier
          </h1>
          <h2 className="text-base md:text-xl mb-3 font-medium">
            Desarrollador Web
          </h2>
          <p className="text-sm max-w-xl mb-6 font-medium">
            Combino mi interés técnico con mi dedicación al desarrollo web. Mi
            enfoque abarca tanto la resolución de desafíos técnicos como la
            creación de soluciones innovadoras en el mundo digital.
          </p>
        </motion.article>
        <motion.article
          className="flex flex-col sm:flex-row gap-4 mb-6 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="Javier_Ledesma.pdf"
            target="_blank"
            rel="noreferrer"
            className="mb-2 md:mb-0"
          >
            <Button texts="Curriculum" />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-ledesma-254321226/"
            target="_blank"
            rel="noreferrer"
          >
            <Button texts="LinkedIn" />
          </a>
        </motion.article>
      </motion.div>
    </section>
  )
}

export default Resume
