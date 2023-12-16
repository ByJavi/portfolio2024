import Button from './Button'

function Resume() {
  return (
    <section
      id="resume"
      className="flex items-center justify-center h-screen flex-col pt-20 pb-6 dark:text-white"
    >
      <article className="text-center mt-10 mb-5">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
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
        <Button data="Curriculum" link="Javier_Ledesma.pdf" target="_blank" />
        <Button
          data="LinkedIn"
          link="https://www.linkedin.com/in/javier-ledesma-254321226/"
          target="_blank"
        />
      </article>
    </section>
  )
}

export default Resume
