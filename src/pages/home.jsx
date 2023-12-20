import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import AboutMe from '../components/AboutMe'

function App({ theme }) {
  return (
    <main
      className={`bg-gradient-color bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter${
        theme ? 'dark' : 'light'
      }`}
    >
      <section className="">
        <Resume />
        <Portfolio />
        <AboutMe />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

export default App
