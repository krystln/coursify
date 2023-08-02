import React from "react"

const SignIn = () => {
  document.getElementById("root").style.filter = "blur(20px);"

  return (
    <div className="h-fit w-fit bg-white px-5 py-5">
      <h1 className="text-xl font-bold">Sign In</h1>
      <p className="text-zinc-500">Get all the features unlocked</p>
      <div className=" w-fulflex flex-col">
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Email"
            className="rounded-sm border border-zinc-300 px-2 py-1"
          />
          <input
            type="text"
            placeholder="Password"
            className="rounded-sm border border-zinc-300 px-2 py-1"
          />
          <button className="rounded-sm bg-black py-1 text-white">
            Sign In
          </button>
        </form>
        <hr className="mx-[auto] my-2 w-4/5 border border-zinc-200" />
        <button className="mb-2 w-full rounded-sm border border-zinc-300 px-2 py-1 hover:bg-zinc-200 active:bg-white">
          Sign In With{" "}
          <img src="/google.svg" alt="" className="mb-1 inline h-5 w-5" />
          Google
        </button>
        <button className="w-full rounded-sm border border-zinc-300 px-2 py-1 hover:bg-zinc-200 active:bg-white">
          Sign In With{" "}
          <img src="/github.svg" alt="" className="mb-1 inline h-5 w-5 " />
          Github
        </button>
      </div>
    </div>
  )
}

export default SignIn
