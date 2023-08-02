import React from "react"

const Information = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4 px-16">
      <div className="col-span-4 row-span-2 rounded-lg bg-slate-400">1</div>
      <div className="col-span-2 row-start-3 rounded-lg bg-slate-400">2</div>
      <div className="col-span-2 col-start-1 row-span-2 row-start-4 rounded-lg bg-slate-400">
        3
      </div>
      <div className="col-span-2 col-start-3 row-span-2 row-start-3 rounded-lg bg-slate-400">
        4
      </div>
      <div className="col-span-2 col-start-3 row-start-5 rounded-lg bg-slate-400">
        5
      </div>
      /
    </div>
  )
}

export default Information
