import "./App.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Information from "./components/Information"
import Footer from "./components/Footer"
import SignIn from "./components/subComps/SignIn"
import PopUp from "./components/PopUp"
import Pricing from "./components/Pricing"

import { useState, useEffect } from "react"
import Testimonials from "./components/Testimonials"

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
      <PopUp isShown={popUp} togglePopUp={togglePopUp} className="z-20">
        <SignIn />
      </PopUp>
      <nav className="sticky top-0 z-10 backdrop-blur-lg">
        <NavBar />
      </nav>

      <main className="z-0 my-10">
        <Hero />
        <Information />
        <Testimonials />
        <hr
          className="mx-[auto] my-10 w-4/5 border border-zinc-200"
          id="Pricing"
        />
        <h3 className="text-center text-4xl font-bold">Pricing</h3>
        <Pricing />
      </main>

      <footer className="z-0">
        <Footer />
      </footer>
    </>
  )
}

export default App
