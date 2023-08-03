import React from "react"

const Information = () => {
  return (
    <div className="my-10 grid grid-cols-2 grid-rows-2 gap-4 px-16">
      <div className="col-span-2 row-span-1 flex gap-10 rounded-lg bg-slate-200 px-10 py-12">
        <img
          src="/RecruiterJobPost.jpg"
          alt=""
          className="h-[27rem] rounded-lg"
        />
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">
            Reach thousands of highly qualified candidates
          </h3>
          <div>
            <h4 className="text-2xl font-bold">
              <img
                src="/jobSuitcase.svg"
                alt=""
                className="mx-3 inline h-10 w-10"
              />
              Job Ready Candidates
            </h4>
            <p className="px-16 text-xl">
              Candidates with plenty of experience
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">
              <img
                src="/globe.svg"
                alt=""
                className="mx-3 inline h-10 w-10 rotate-45"
              />
              World-Wide Focus
            </h4>
            <p className="px-16 text-xl">Candidates from accross the borders</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">
              <img src="/people.svg" alt="" className="mx-3 inline h-10 w-10" />
              Fast Responses
            </h4>
            <p className="px-16 text-xl">Upto 90% faster candidate responses</p>
          </div>
        </div>
      </div>
      <div className="row-start-2 flex rounded-lg bg-slate-200 p-5">
        <img src="/AssessmentsProfile.png" alt="" className="h-[30rem]" />
        <div className="pt-10">
          <h3 className="text-3xl font-bold">Already Assessed Profiled</h3>
          <p className="mb-5">
            Eliminate the necessity of personally conducting candidate
            assessments. Instead of investing your time and effort in evaluating
            applicants, you can rely on alternative methods or resources to
            streamline the evaluation process. This will allow you to focus on
            other crucial aspects of your responsibilities, confident that the
            candidate assessment is being efficiently managed through different
            means.
          </p>
          <button className="rounded-md border border-black bg-black px-3 py-2 text-white hover:border-blue-700 hover:bg-blue-300 hover:text-blue-700">
            Learn More
          </button>
        </div>
      </div>
      <div className="row-start-2 rounded-lg bg-slate-200 p-5">
        <img src="/RecruiterTrack.jpg" alt="" className="" />
        <h3 className="mt-3 text-3xl font-bold">
          Manage candidates with our ATS
        </h3>
        <p>
          Benefit from a complimentary Applicant Tracking System (ATS) to
          effortlessly handle all aspects of candidate management, from posting
          positions to scheduling interviews.
        </p>
      </div>
    </div>
  )
}

export default Information
