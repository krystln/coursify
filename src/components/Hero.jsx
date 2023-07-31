import React from 'react'
import Stats from './subComps/Stats'

const Hero = () => {
  return (
    <div className="mt-16 px-4 flex flex-col items-center gap-4 text-center">
      <div className="text-7xl ">Hire the best talent across the globe</div>
      <div className='text-3xl w-[70%] '>A curated list of candidates with all the tools to hire them. Set things up within minutes.</div>
      <button className='bg-black text-white py-2 px-4 text-lg rounded-lg border mt-4 hover:border-blue-600 hover:bg-blue-300 hover:text-blue-700'>Start Hiring</button>

      <Stats />
    </div>
  )
}

export default Hero