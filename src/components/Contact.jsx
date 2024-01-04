import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
// import Fade from 'react-reveal'

import CarouselText from './CarouselText'
import Button from './Button'

function Contact() {
  const [result, setResult] = useState(false)

  const formulario = useRef()

  const handleSubmit = (event) => {
    setResult(true)
    event.preventDefault()
    emailjs
      .sendForm(
        'service_kffhrq6',
        'template_bk1u4y1',
        '#formulario',
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
    }, 1500)
  }

  return (
    <section className="my-40 ">
      <div className="my-10 py-10">
        <CarouselText texts="CONTACTAME" />
      </div>
      <article className="max-w-5xl w-11/12 mx-auto flex justify-center items-center">
        {/* <Fade bottom> */}
        <form
          id="formulario"
          ref={formulario}
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-7/12 "
          data-aos="slide-up"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Nombre"
            className="my-2 p-2 contact-inputs bg-white dark:bg-stone-950"
          ></input>
          <input
            required
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 contact-inputs bg-white dark:bg-stone-950"
          ></input>

          <textarea
            required
            type="text"
            name="mensaje"
            placeholder="Comunica tu idea y hagámosla realidad"
            rows="10"
            className="p-2 mb-4 contact-inputs bg-white dark:bg-stone-950"
          ></textarea>

          <button type="submit" className="w-max">
            {result ? (
              <div className="animate-load ">
                <span className="bg-overlay"></span>
                <span className="bg-border"></span>
                <p className="">Enviando Mensaje...</p>
              </div>
            ) : (
              <Button texts="Trabajemos Juntos" />
            )}
          </button>
        </form>
        {/* </Fade> */}
      </article>
    </section>
  )
}

export default Contact
