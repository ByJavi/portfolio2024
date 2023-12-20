import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Resume from '../components/Resume'
import Timeline from '../components/Timeline'

function App({ theme }) {
  return (
    <main
      className={`bg-gradient-color bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-300 font-inter${
        theme ? 'dark' : 'light'
      }`}
    >
      <section className="bg-quadrille">
        <Resume />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </section>
    </main>
  )
}

export default App
