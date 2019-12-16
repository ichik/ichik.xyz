import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

type PageProps = {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              slug: string
              title: string
            }
          }
        }
      ]
    }
  }
}

const Index: React.FunctionComponent<PageProps> = ({ data }) => {
  const { edges: projects } = data.allMdx
  return (
    <Layout>
      <ul>
        {projects.map(({ node: project }) => (
          <li key={project.id}>
            <Link to={project.frontmatter.slug}>
              <h2>{project.frontmatter.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default Index
