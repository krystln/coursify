import "./App.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <nav className="">
        <NavBar />
      </nav>
      <section className="">
        <Hero />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
