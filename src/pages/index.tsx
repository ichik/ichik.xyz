import React from "react"

import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import GridItem from "../components/grid-item"

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
      {projects.map(({ node: project }) => (
        <GridItem key={project.id} to={project.frontmatter.slug}>
          <h2>{project.frontmatter.title}</h2>
          <Image fluid={project.frontmatter.cover.childImageSharp.fluid} />
        </GridItem>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
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
