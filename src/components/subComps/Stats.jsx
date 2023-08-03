import CountUp from "react-countup"
import imageData from "../../assets/companyImagesData"

const InfiniteScroll = ({ children }) => {
  return <>{children}</>
}

const Stats = () => {
  const images = imageData.map((image) => {
    return <div key={image.company}>{image.company}</div>
  })

  return (
    <>
      <div className="my-[4rem] flex h-fit w-full justify-center">
        <span className="w-[25%] border-r-2 border-slate-300">
          <div className="text-4xl font-bold hover:text-blue-700">
            <CountUp start={0} end={10} duration={1} suffix=",000+" />
          </div>
          <div className="text-4xl font-light">Companies</div>
        </span>
        <span className="w-[25%] border-r-2 border-slate-300">
          <div className="text-4xl font-bold">
            <CountUp start={50000} end={100000} duration={5} suffix="+" />
          </div>
          <div className=" text-4xl font-light">Matches</div>
        </span>
        <span className="w-[25%]">
          <div className="text-4xl font-bold hover:text-blue-700">
            <CountUp end={500} duration={1} suffix=",000+" />
          </div>
          <div className="text-4xl font-light">Candidates</div>
        </span>
      </div>

      <InfiniteScroll>{images}</InfiniteScroll>
    </>
  )
}

export default Stats
