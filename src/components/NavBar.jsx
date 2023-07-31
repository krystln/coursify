import React from "react";

const NavBar = () => {

  function scrollTo(event){
    event.preventDefault();
    document.scroll('/')
  }


  return (
    <div className=" h-[5rem] flex items-center px-4 justify-between mx-4 shadow-lg">
      <div className="font-serif font-black text-4xl">Recruitify</div>
      <div className="flex gap-4 items-center text-lg">

        <a
          href="/"
          className="text-lg hover:text-blue-900 hover:underline hover:underline-offset-8"
          onClick={scrollTo}
          >
          Blog
        </a>
        <a
          href="/"
          className="text-lg hover:text-blue-900 hover:underline hover:underline-offset-8">
          Integrations
        </a>
        <a
          href="/"
          className="text-lg hover:text-[blue] hover:underline hover:underline-offset-8">
          Pricing
        </a>
        <a
          href="/"
          className="text-lg hover:text-[blue] hover:underline hover:underline-offset-8">
          For Individuals
        </a>

        <button className="bg-white border border-black text-black py-1 px-4 rounded-md hover:border-blue-600 hover:bg-blue-300 hover:text-blue-700">
          Log In
        </button>
        <button className=" bg-black border-black border text-white py-1 px-4 rounded-md hover:border-blue-600 hover:bg-blue-600">
          Sign Up
        </button>
      
      </div>
    </div>
  );
};

export default NavBar;
