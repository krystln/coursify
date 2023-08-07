import React, { useEffect } from "react"

const NavBar = () => {
  function scrollTo(event) {
    event.preventDefault()
    document.scroll("/")
  }

  const dropdown = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)
  useEffect(() => {
    if (isOpen) {
      dropdown.current.classList.add("block")
      dropdown.current.classList.remove("hidden")
    } else {
      dropdown.current.classList.add("hidden")
      dropdown.current.classList.remove("block")
    }
  }, [isOpen])

  function toggleIsOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className="mx-4 flex h-[5rem] items-center justify-between px-4 shadow-lg">
      <div className="font-serif text-4xl font-black">Recruitify</div>
      <div className="flex items-center gap-4 text-lg max-[800px]:hidden">
        <a
          href="/"
          className="hover:delay-50 text-lg hover:text-blue-900 hover:underline hover:underline-offset-8 hover:ease-in-out"
          onClick={scrollTo}
        >
          Blog
        </a>
        <a
          href="/"
          className="hover:delay-50 text-lg hover:text-blue-900 hover:underline hover:underline-offset-8 hover:ease-in-out"
        >
          Integrations
        </a>
        <a
          href="#Pricing"
          className="hover:delay-50 text-lg hover:text-[blue] hover:underline hover:underline-offset-8 hover:ease-in-out"
        >
          Pricing
        </a>
        <a
          href="/"
          className="hover:delay-50 text-lg hover:text-[blue] hover:underline hover:underline-offset-8 hover:ease-in-out"
        >
          For Individuals
        </a>

        <button className="hover:delay-50 rounded-md border border-black bg-white px-4 py-1 text-black hover:border-blue-600 hover:bg-blue-300 hover:text-blue-700 hover:ease-in-out">
          Log In
        </button>
        <button className=" hover:delay-50 rounded-md border border-black bg-black px-4 py-1 text-white hover:border-blue-600 hover:bg-blue-600 hover:ease-in-out">
          Sign Up
        </button>
      </div>
      <div className="min-[800px]:hidden">
        <button
          className="rounded-md active:bg-zinc-200"
          onClick={toggleIsOpen}
        >
          <img src="./src/assets/menuIcon.svg" alt="" className="h-10 w-10" />
        </button>
        <div
          ref={dropdown}
          className="absolute right-[2rem] top-[5rem] flex flex-col rounded-b-md bg-white text-xl shadow-lg"
        >
          <a
            href="/"
            className="hover:delay-50 px-10 py-2 text-lg hover:text-blue-900 hover:underline hover:underline-offset-8 hover:ease-in-out"
          >
            Blog
          </a>
          <a
            href="/"
            className="hover:delay-50 px-10 py-2 text-lg hover:text-blue-900 hover:underline hover:underline-offset-8 hover:ease-in-out"
          >
            Integrations
          </a>
          <a
            href="/"
            className="hover:delay-50 px-10 py-2 text-lg hover:text-blue-900 hover:underline hover:underline-offset-8 hover:ease-in-out"
          >
            Pricing
          </a>
          <a
            href="/"
            className="hover:delay-50 px-10 py-2 text-lg hover:text-blue-900 hover:underline hover:underline-offset-8 hover:ease-in-out"
          >
            For Individuals
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
