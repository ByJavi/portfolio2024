function Footer() {
  return (
    <section className="max-w-5xl w-11/12 mx-auto border-t-2 border-solid border-stone-900 dark:border-violet-700">
      <article className="flex items-center justify-center gap-8 py-8">
        <span>
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </span>
        <p>Hecho con React/Vite &hearts;</p>
      </article>
    </section>
  )
}

export default Footer
