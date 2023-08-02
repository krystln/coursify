import React from "react"

const SignIn = () => {
  document.getElementById("root").style.filter = "blur(20px);"

  return (
    <div className="bg-white">
      <h1>Sign In</h1>
      <p></p>
      <div>
        <form className="flex flex-col">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <hr />
        <button>Sign In With Google</button>
        <button>Sign In With Github</button>
      </div>
    </div>
  )
}

export default SignIn
