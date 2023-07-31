import React from "react"

const Links = ({ head, linkList }) => {
  const link = linkList.map((link) => {
    return (
      <a
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
      <div className="flex w-full items-start justify-between px-10">
        <div className="pt-16">
          <div className="font-serif text-4xl font-black">Recruitify</div>
          <div className="flex gap-2">
            <img src="./public/vite.svg" alt="Linkedin logo" />
            <img src="./public/vite.svg" alt="Twitter logo" />
          </div>
        </div>
        <div className="flex gap-10 py-16 pr-20">
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
