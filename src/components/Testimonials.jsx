import React from "react"

const Testimonials = () => {
  return (
    <>
      <h2 className="text-center text-3xl font-bold">Our Customer Reports</h2>
      <div className="mt-10 grid grid-cols-2 grid-rows-2 gap-10 px-20">
        <div className="border border-zinc-500 p-5  ">
          <img src="/quoteIcon.svg" alt="" className="h-20 w-20" />
          "Our recruitment process has been completely revolutionized since
          adopting this platform. The ease of posting jobs, managing applicants,
          and collaborating with the team has significantly improved our
          efficiency. A game-changer for modern recruitment!"
          <div className="text-lg font-bold">
            - HR Manager, TechSolutions Inc
          </div>
        </div>
        <div className="border border-zinc-500 p-5">
          <img src="/quoteIcon.svg" alt="" className="h-20 w-20" />
          "Incredible! This platform has not only saved us valuable time but
          also enhanced the quality of our hires. The advanced filtering and
          assessment features helped us identify the perfect candidates quickly.
          Our hiring success rate has never been higher!"
          <div className="text-lg font-bold">
            - Recruitment Lead, Stellar Enterprises
          </div>
        </div>
        <div className="border border-zinc-500 p-5">
          <img src="/quoteIcon.svg" alt="" className="h-20 w-20" />
          "As a startup, we needed an agile solution to manage our growing
          workforce. This recruiting platform offered exactly that - a
          user-friendly interface, seamless communication, and data-driven
          insights. It's like having a dedicated recruitment team at your
          fingertips!"
          <div className="text-lg font-bold">- CEO, NexGen Startups </div>
        </div>
        <div className="border border-zinc-500 p-5">
          <img src="/quoteIcon.svg" alt="" className="h-20 w-20" />
          "Effortless end-to-end recruitment! This platform streamlined
          everything, from posting vacancies to onboarding. The customizable
          workflows and automated notifications ensured a smooth candidate
          experience, making us stand out as an employer of choice."
          <div className="text-lg font-bold">
            - Talent Acquisition Director, Global Innovations Corp
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
