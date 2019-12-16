import React from "react"

import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

import { ChildImageSharp } from "../types"

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
              cover: ChildImageSharp
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
              <Image fluid={project.frontmatter.cover.childImageSharp.fluid} />
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
            cover {
              childImageSharp {
                fluid(quality: 95, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
