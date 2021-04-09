import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className="text-3xl">My projects</div>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "60px"}}>
        {projects.map(project => (
          <Link
            to={`/projects/${project.frontmatter.slug}`}
            className = "block"
            key ={ project.id }
          >
            <div>
              <h3> {project.frontmatter.title} </h3>
              <p> {project.frontmatter.stack} </p>
              <em> {contact} </em>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query projectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
