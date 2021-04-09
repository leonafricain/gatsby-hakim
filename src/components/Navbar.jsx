import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query siteInfo{
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <div>
      <nav className="grid grid-cols-3 my-10 mx-auto ">
        <h1 className="text-4xl font-bold text-gray-200 "> {title} </h1>
        <div></div>
        <div className="flex justify-around font-semibold items-center">
          <Link
            to="/"
            className="pb-2 border-b-2 border-transparent hover:border-white transition duration-300 hover:text-purple-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="pb-2 border-b-2 border-transparent hover:border-white transition duration-300 hover:text-purple-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="pb-2 border-b-2 border-transparent hover:border-white transition duration-300 hover:text-purple-300"
          >
            Protfolio Projects
          </Link>
        </div>
      </nav>
    </div>
  )
}
