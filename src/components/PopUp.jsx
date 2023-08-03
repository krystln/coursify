import React from "react"

const PopUp = ({ children, isShown, togglePopUp }) => {
  return isShown ? (
    <div className="fixed z-10 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="relative h-fit w-fit overflow-hidden rounded-md border border-zinc-500 bg-white">
        <button
          onClick={togglePopUp}
          className="absolute right-0 h-0 px-5 py-5 text-zinc-400 active:text-black"
        >
          <img
            src="/crossIcon.svg"
            alt="Close"
            className="h-5 w-5 hover:scale-125 active:scale-100"
          />
        </button>
        {children}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PopUp
