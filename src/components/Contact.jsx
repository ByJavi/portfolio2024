import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import CarouselText from './CarouselText/CarouselText'
// import EmailSend from './EmailSend'

function Contact() {
  const [result, setResult] = useState(false)

  const formulario = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_kffhrq6',
        'template_bk1u4y1',
        formulario.current,
        '1J-6Rhph15xqABoX3'
      )
      .then(
        (res) => {
          setResult(res)
          event.target.reset()
        },
        (error) => {
          console.log(error)
        }
      )
    setTimeout(() => {
      setResult(false)
    }, 5000)
  }

  return (
    <section className="my-40">
      <div className="my-10 py-10">
        <CarouselText texts="Contactame" />
      </div>
      <article className="max-w-5xl w-11/12 mx-auto">
        <div className="flex justify-center items-center">
          <form
            ref={formulario}
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-7/12"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="my-2 p-2 bg-transparent border-stone-950 dark:border-violet-700 border-2 rounded-sm focus:outline-none focus:bg-stone-300 dark:focus:bg-stone-700"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-2 p-2 bg-transparent  border-stone-950 dark:border-violet-700 border-2 rounded-sm focus:outline-none focus:bg-stone-300 dark:focus:bg-stone-700"
            ></input>

            <textarea
              type="text"
              name="mensaje"
              placeholder="Comunica tu idea y hagámosla realidad"
              rows="10"
              className="p-2 mb-4 border-2 rounded-sm dark:bg-transparent border-stone-950 dark:border-violet-700 focus:outline-none focus:bg-stone-300 dark:focus:bg-stone-700"
            ></textarea>

            <button
              type="submit"
              className="relative inline-block px-8 py-3 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-violet-700"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black dark:bg-violet-300 dark:group-hover:bg-violet-700"></span>
              <span className="relative text-black group-hover:text-white">
                {result ? 'Mensaje Enviado' : 'Trabajemos Juntos'}
              </span>
            </button>
          </form>
        </div>
      </article>
    </section>
  )
}

export default Contact
