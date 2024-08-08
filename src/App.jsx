import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Baner from "./components/Baner"
import About from "./components/About"
import Projets from "./components/Projets"

function App() {

  const BANER = [
    {text: "A Propos"},
    {text: "Projets"},
    {text: "Contact"},
  ]

  return (
    <>
      <Navbar />
      <main>
        <section className="mt-[62px] mb-0 min-h-[80vh] flex justify-center items-center">
          <Hero />
        </section>
        <Baner text={BANER[0].text} />
        <section>
          <About />
        </section>
        <Baner text={BANER[1].text} />
        <section className="min-h-0">
          <Projets />
        </section>
        <Baner text={BANER[2].text} />
      </main>
    </>
  )
}

export default App