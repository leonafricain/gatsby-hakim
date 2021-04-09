import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function ProjectDetails({ data }) {
  console.log(`tada => `, data)
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  console.log(`html`, html)
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        slug
        title
        stack
      }
    }
  }
`
