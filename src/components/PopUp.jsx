import React from "react"

const PopUp = ({ children, isShown, togglePopUp }) => {
  return isShown ? (
    <div className="fixed flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="relative h-fit w-fit bg-white">
        <button onClick={togglePopUp}>Close</button>
        {children}
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PopUp
