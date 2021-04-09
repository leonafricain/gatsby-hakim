import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home({ data }) {
  return (
    <Layout>
      <section className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-3xl font-bold md:text-6xl">Design by Me </h2>
            <h3 className="md:text-3xl font-semibold mb-5">Develop & Deploy</h3>
            <p>UX designer & web developer based in Madrague</p>
            <Link
              className="text-xs md:text-base  px-6 py-2 bg-pink-600 rounded-md font-semibold mt-5 inline-block hover:bg-pink-700 shadow-md"
              to="/projects"
            >
              My Portfolio Projects
            </Link>
          </div>
        </div>
        <div className="max-w-md text-center px-6">
          <img src="/banner.png" alt="banner" className="p-4" />
        </div>
      </section>
    </Layout>
  )
}

/* export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      copyright
      description
      title
    }
  }
}
` */
