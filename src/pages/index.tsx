import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Projects from "../components/projects"
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
      <Sidebar>
        <p>
          Vadim Mikhnov is a digital product designer based in Berlin. Clarity
          and meaning for products and services with tools ranging from
          micro-animations to smart color palette choices. Send your enquiries
          at hi@ichik.xyz
        </p>
        <Image fluid={data.photo.childImageSharp.fluid} alt="Vadim Mikhnov" />
      </Sidebar>
      <Projects>
        {projects.map(({ node: project }) => (
          <GridItem
            key={project.id}
            to={project.frontmatter.slug}
            title={project.frontmatter.title}
            image={project.frontmatter.cover}
          />
        ))}
      </Projects>
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
    photo: file(relativePath: { eq: "photo.png" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Index
