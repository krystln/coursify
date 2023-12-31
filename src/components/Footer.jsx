import React from "react"

const Links = ({ head, linkList }) => {
  const link = linkList.map((link) => {
    return (
      <a
        key={link}
        href="/"
        onClick={(e) => e.preventDefault()}
        className="font-light hover:text-blue-900 hover:underline hover:underline-offset-2"
      >
        {link}
      </a>
    )
  })

  return (
    <div className="flex flex-col gap-2 text-lg font-bold">
      {head}
      {link}
    </div>
  )
}

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex w-full items-start justify-between px-10 max-[800px]:flex-col">
        <div className="pt-16">
          <div className="mb-2 font-serif text-4xl font-black underline">
            Recruitify
          </div>
          <div className="flex gap-2">
            <a href="/" onClick={(e) => e.preventDefault()}>
              <img
                src="./src/assets/linkedin.svg"
                alt="Linkedin logo"
                className="w-8 hover:animate-upHighlight"
              />
            </a>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <img
                src="./src/assets/twitter.svg"
                alt="Twitter logo"
                className="w-8 hover:animate-upHighlight"
              />
            </a>
          </div>
        </div>
        <div className="flex gap-10 py-16 pr-20 max-[900px]:pr-5 max-[450px]:flex-col">
          <Links
            head="For Recruiters"
            linkList={["Overview", "Our Tooling", "Hire Talent", "Pricing"]}
          />
          <Links
            head="For Candidates"
            linkList={[
              "Overview",
              "Remote",
              "Web3 Jobs",
              "Data Jobs",
              "Profile Reviewer",
              "Company List",
            ]}
          />
          <Links
            head="About Company"
            linkList={[
              "About",
              "Contact",
              "Blog",
              "Terms & Conditions",
              "Cookies",
            ]}
          />
        </div>
      </div>
      <div className="px-10 pb-5 text-lg text-zinc-500">
        Copyright © 2023 Recruitify. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
