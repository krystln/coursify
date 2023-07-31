import React from "react";

const Links = ({ head, linkList }) => {
  const link = linkList.map((link) => {
    return (
      <a
        href="/"
        onClick={(e) => e.preventDefault()}
        className="font-light hover:text-blue-900 hover:underline hover:underline-offset-2">
        {link}
      </a>
    );
  });

  return (
    <div className="text-lg font-bold flex flex-col">
      {head}
      {link}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="w-full border-t border-black bg-gray-100 flex items-center justify-between px-10">
      <div className="py-4">
        <div className="font-serif font-black text-4xl">Recruitify</div>
        <div className="flex">
          <img src="./assets/vite.svg" alt="Linkedin logo" />
          <img src="./assets/vite.svg" alt="Twitter logo" />
        </div>
      </div>
      <div className="flex gap-10">
        <Links head="For Recruiters" linkList={["Overview", "data"]} />
        <Links head="For Candidates" linkList={["Overview"]} />
        <Links head="About Company" linkList={[]} />
      </div>
    </div>
  );
};

export default Footer;
