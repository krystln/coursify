import React from "react"
import Stats from "./subComps/Stats"

const Hero = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-4 px-4 text-center">
      <div className="text-7xl ">Hire the best talent across the globe</div>
      <div className="w-[70%] text-3xl ">
        A curated list of candidates with all the tools to hire them. Set things
        up within minutes.
      </div>
      <button className="mt-4 rounded-lg border bg-black px-4 py-2 text-lg text-white hover:border-blue-600 hover:bg-blue-300 hover:text-blue-700">
        Start Hiring
      </button>

      <Stats />
    </div>
  )
}

export default Hero
