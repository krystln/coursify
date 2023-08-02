import React from "react"

const Pricing = () => {
  return (
    <div className="my-4   flex items-baseline justify-center gap-10">
      <div className="h-[24rem] w-1/5 rounded-sm border border-zinc-600 bg-white px-5 py-10 hover:animate-scaleUp">
        <h3 className="font text-3xl">Access</h3>
        <h1 className="mb-4 text-5xl font-bold">Free</h1>
        <ul className="mb-4 flex list-disc flex-col gap-2 px-10 text-lg">
          <li>Post Jobs</li>
          <li>Review Applicants</li>
          <li>Integrate ATS</li>
          <li>Limited Applicant list</li>
        </ul>
        <button className="rounded-md border border-black bg-black px-3 py-2 text-white hover:border-blue-600 hover:bg-blue-200 hover:text-blue-700">
          Sign Up Now
        </button>
      </div>
      <div className="h-[24rem] w-1/5 rounded-sm border-2 border-yellow-500 bg-white px-5 py-10 pt-2 hover:animate-scaleUp">
        <div className="relative top-[-30px] w-fit rounded-2xl bg-yellow-500 px-4 py-2">
          Best Value
        </div>
        <h3 className="font text-3xl">Recruit Pro</h3>
        <div className="flex items-start gap-2">
          <h1 className="mb-4 text-5xl font-bold">$499</h1>
          <span className="text-2xl text-zinc-500">/MONTH</span>
        </div>
        <ul className="mb-4 flex list-disc flex-col gap-2 px-10 text-lg">
          <li>Access +</li>
          <li>Automated Reviews</li>
          <li>Pitch Templates</li>
          <li>Instant Scheduling</li>
        </ul>
        <button className="rounded-md border border-black bg-black px-3 py-2 text-white hover:border-blue-600 hover:bg-blue-200 hover:text-blue-700">
          Sign Up Now
        </button>
      </div>
      <div className="h-[24rem] w-1/5 rounded-sm border border-zinc-600 bg-white px-5 py-10 hover:animate-scaleUp">
        <h3 className="font text-3xl">Unlimited Access</h3>
        <h1 className="mb-4 text-5xl font-bold">Custom</h1>
        <ul className="mb-4 flex list-disc flex-col gap-2 px-10 text-lg ">
          <li>Recruiter Pro +</li>
          <li>Handpicked Candidate List</li>
          <li>24x7 Team Support</li>
        </ul>
        <button className="rounded-md border border-black bg-black px-3 py-2 text-white hover:border-blue-600 hover:bg-blue-200 hover:text-blue-700">
          Sign Up Now
        </button>
      </div>
    </div>
  )
}

export default Pricing
