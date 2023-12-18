import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import CarouselText from './CarouselText/CarouselText'
import Button from './Button'

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
    }, 3000)
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
              className="my-2 p-2 contact-inputs"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-2 p-2 contact-inputs"
            ></input>

            <textarea
              type="text"
              name="mensaje"
              placeholder="Comunica tu idea y hagámosla realidad"
              rows="10"
              className="p-2 mb-4 contact-inputs"
            ></textarea>

            <button type="submit" className="">
              {result ? (
                <div className="animate-load">
                  <span className="bg-overlay"></span>
                  <span className="bg-border"></span>
                  <p className="">Mensaje enviado!</p>
                </div>
              ) : (
                <Button texts="Trabajemos Juntos" />
              )}
            </button>
          </form>
        </div>
      </article>
    </section>
  )
}

export default Contact
