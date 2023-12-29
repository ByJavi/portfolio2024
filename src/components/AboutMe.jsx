// import Fade from 'react-reveal/Fade'
import LazyLoad from 'react-lazyload'

import CarouselText from './CarouselText'

import JavierImagen from '../assets/aboutme/345426457.webp'
import gataMorena from '../assets/aboutme/IMG_20231201_122824505.webp'

function AboutMe() {
  return (
    <section className="my-40">
      <div className="my-10 py-10">
        <CarouselText texts="TRAS BASTIDORES" />
      </div>
      <section className="flex flex-col items-center gap-10 mx-5">
        {/* Primer artículo */}
        {/* <Fade left> */}
        <article className="relative flex flex-col sm:flex-row bg-clip-border rounded-xl shadow-md w-full max-w-[48rem]">
          {/* Imagen */}
          <div
            className="relative w-full sm:w-2/5 m-0 overflow-hidden 
             shrink-0"
          >
            <LazyLoad height={200} offset={200}>
              <img
                src={JavierImagen}
                alt="Ledesma Javier, desarrollador web"
                className="object-cover w-full h-full rounded-lg sm:rounded-lg"
              />
            </LazyLoad>
          </div>

          {/* Contenido de texto */}
          <div className="p-6 flex flex-col justify-center">
            <h3 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">
              Hola!
            </h3>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal">
              Soy Javier Ledesma
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed">
              Un argentino de 22 años que actualmente se dedica al estudio
              autodidacta de varias tecnologías. Hace aproximadamente 1 año que
              estoy enfocado en el desarrollo front-end, poniendo especial
              énfasis en tecnologías como ReactJS y Next.js.
            </p>
          </div>
        </article>
        {/* </Fade> */}

        {/* Segundo artículo */}
        {/* <Fade left> */}
        <article className="relative flex flex-col sm:flex-row bg-clip-border rounded-xl shadow-md w-full max-w-[48rem]">
          {/* Imagen */}
          <div className="relative w-full sm:w-2/5 m-0 overflow-hidden rounded-lg sm:rounded-r-none bg-clip-border sm:rounded-xl shrink-0">
            <LazyLoad height={200} offset={200}>
              <img
                src={gataMorena}
                alt="Gatita gaming"
                className="object-cover w-full h-full rounded-lg sm:rounded-lg"
              />
            </LazyLoad>
          </div>

          {/* Contenido de texto */}
          <div className="p-6 flex flex-col justify-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Morena
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed">
              Mi adorable gata y muy loca a veces, se convirtió en parte de mi
              familia en julio de este año 2023.
              <br />
              <br /> Desde entonces, ha sido mi compañera de estudio.
            </p>
          </div>
        </article>
        {/* </Fade> */}
      </section>
    </section>
  )
}

export default AboutMe

{
  /* <article className="max-w-5xl w-11/12 mx-auto flex flex-wrap overflow-hidden text-sm">
        <Fade left>
          <div className="px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-1/2 lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
            <LazyLoad height={200} offset={200}>
              <img
                src={JavierImagen}
                alt="Ledesma Javier, desarrollador web"
                className="w-full h-auto object-cover rounded-lg"
              />
            </LazyLoad>
          </div>
        </Fade>

        <Fade right>
          <div className="p-5 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-1/2 lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
            <p className="leading-relaxed text-lg mb-20">
              Soy <span className="text-2xl">Javier Ledesma</span>, un argentino
              de 22 años que actualmente se dedica al estudio autodidacta de
              varias tecnologías. Hace aproximadamente 1 año que estoy enfocado
              en el desarrollo front-end, poniendo especial énfasis en
              tecnologías como ReactJS y Next.js.
              <br /> <br />
              Recientemente, también he comenzado a adentrarme en el entorno
              back-end, aprendiendo Node.js junto con Express.js.
              <br /> <br />
              Constantemente me esfuerzo por aprender nuevas tecnologías y
              mejorar mis habilidades existentes, ya que creo que la diversidad
              enriquece nuestros proyectos y nos permite alcanzar resultados
              excepcionales.
            </p>
          </div>
        </Fade>


        <Fade left>
          <div className="px-1 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-1/2 lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
            <LazyLoad height={200} offset={200}>
              <img
                src={gataMorena}
                alt="Gato gaming"
                className="w-full h-auto object-cover rounded-lg"
              />
            </LazyLoad>
          </div>
        </Fade>

        <Fade right>
          <div className="p-5 my-1 sm:w-full sm:px-1 sm:my-1 md:w-full md:px-1 md:my-1 lg:w-1/2 lg:px-1 lg:my-1 xl:w-1/2 xl:px-1 xl:my-1">
            <p className="leading-relaxed text-lg mb-4">
              <span className="text-2xl">Morena</span>, mi adorable gata y muy
              loca a veces, se convirtió en parte de mi familia en julio de este
              año 2023.
              <br />
              <br /> Desde entonces, ha sido mi compañera de estudio.
            </p>
          </div>
        </Fade>
      </article> */
}
