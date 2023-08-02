import "./App.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Information from "./components/Information"
import Footer from "./components/Footer"
import SignIn from "./components/subComps/SignIn"
import PopUp from "./components/PopUp"

import { useState, useEffect } from "react"

function App() {
  const [popUp, setPopUp] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPopUp(true)
  //   }, 10000)
  // }, [])

  function togglePopUp() {
    setPopUp((prevValue) => !prevValue)
  }

  return (
    <>
      <PopUp isShown={popUp} togglePopUp={togglePopUp}>
        <SignIn />
      </PopUp>
      <nav className="sticky top-0 backdrop-blur-lg">
        <NavBar />
      </nav>

      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Information />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
