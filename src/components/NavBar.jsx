import React from "react"

const NavBar = () => {
  function scrollTo(event) {
    event.preventDefault()
    document.scroll("/")
  }

  return (
    <div className="mx-4 flex h-[5rem] items-center justify-between px-4 shadow-lg">
      <div className="font-serif text-4xl font-black">Recruitify</div>
      <div className="flex items-center gap-4 text-lg">
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
          href="/"
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
    </div>
  )
}

export default NavBar
