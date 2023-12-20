import Fade from 'react-reveal/Fade'
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
      <article className="max-w-5xl w-11/12 mx-auto grid grid-cols-4 grid-rows-6 gap-8 text-sm font-medium">
        <Fade left>
          <div className="col-span-2 row-span-3">
            <LazyLoad height={200} offset={200}>
              <img
                src={JavierImagen}
                alt="Ledesma Javier, desarrollador web"
                className="w-full h-auto object-cover rounded"
              />
            </LazyLoad>
          </div>
        </Fade>
        <Fade right>
          <div className="col-span-2 row-span-3 col-start-3 mx-auto">
            <p className="leading-relaxed text-lg mb-4">
              Soy <span className="text-2xl">Javier Ledesma</span>, un argentino
              de 22 años que actualmente se dedica al estudio autodidacta de
              varias tecnologías. Hace aproximadamente 1 año que estoy enfocado
              en el desarrollo front-end, poniendo especial énfasis en
              tecnologías como ReactJS y Next.js.
              <br />
              <br />
              Recientemente, también he comenzado a adentrarme en el entorno
              back-end, aprendiendo Node.js junto con Express.js.
              <br />
              <br />
              Constantemente me esfuerzo por aprender nuevas tecnologías y
              mejorar mis habilidades existentes, ya que creo que la diversidad
              enriquece nuestros proyectos y nos permite alcanzar resultados
              excepcionales.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="col-span-2 row-span-3 col-start-3 row-start-4">
            <LazyLoad height={200} offset={200}>
              <img
                src={gataMorena}
                alt="Gato gaming"
                className="w-full h-auto object-cover rounded"
              />
            </LazyLoad>
          </div>
        </Fade>
        <Fade left>
          <div className="col-span-2 row-span-3 row-start-4 mx-auto">
            <p className="leading-relaxed text-lg mb-4">
              <span className="text-2xl">Morena</span>, mi adorable gata y muy
              loca a veces, se convirtió en parte de mi familia en julio de este
              año 2023.
              <br />
              <br /> Desde entonces, ha sido mi compañera de estudio.
            </p>
          </div>
        </Fade>
      </article>
    </section>
  )
}

export default AboutMe
