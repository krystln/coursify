import CountUp from "react-countup"
import imageData from "/src/assets/companyImagesData.js"

const Stats = () => {
  return (
    <>
      <div className="my-[4rem] flex h-fit w-full justify-center max-[730px]:flex-col max-[730px]:items-center max-[730px]:gap-2 ">
        <span className="border-r-2 border-slate-300 px-10 max-[730px]:flex max-[730px]:flex-row max-[730px]:gap-2 max-[730px]:border-b-2 max-[730px]:border-r-0">
          <div className=" text-4xl font-bold hover:text-blue-700">
            <CountUp start={0} end={10} duration={1} suffix=",000+" />
          </div>
          <div className="text-4xl font-light">Companies</div>
        </span>
        <span className="border-r-2 border-slate-300 px-10 max-[730px]:flex max-[730px]:flex-row max-[730px]:gap-2 max-[730px]:border-b-2 max-[730px]:border-r-0">
          <div className="text-4xl font-bold">
            <CountUp start={50000} end={100000} duration={5} suffix="+" />
          </div>
          <div className="text-4xl font-light">Matches</div>
        </span>
        <span className="px-10  max-[730px]:flex max-[730px]:flex-row max-[730px]:gap-2 max-[730px]:border-b-2 max-[730px]:border-r-0">
          <div className="text-4xl font-bold hover:text-blue-700">
            <CountUp end={500} duration={1} suffix=",000+" />
          </div>
          <div className="text-4xl font-light">Candidates</div>
        </span>
      </div>

      {/* Scrolling 1st Row */}
      <div className="flex h-10 w-3/5 items-center gap-10 overflow-clip px-20 shadow-[inset_0px_0px_20px_51px_#ffffff] max-[450px]:px-0">
        {imageData.map((img, i) => {
          return (
            <img
              key={i}
              src={img}
              alt=""
              className="h-20 w-20 animate-infScroll object-contain"
            />
          )
        })}
      </div>

      {/* Scrolling 2nd Row */}
      <div className="flex h-10 w-3/5 items-center gap-10 overflow-clip px-20 shadow-[inset_0px_0px_20px_51px_#ffffff] max-[450px]:px-0">
        {imageData.map((img, i) => {
          return (
            <img
              key={i}
              src={img}
              alt=""
              className="h-20 w-20 animate-negInfScroll object-contain"
            />
          )
        })}
      </div>
    </>
  )
}

export default Stats
