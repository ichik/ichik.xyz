import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Meta from "../components/meta"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Projects from "../components/projects"
import GridItem from "../components/grid-item"
import Footer from "../components/footer"
import { ChildImageSharp } from "../types"

type PageProps = {
  data: {
    allMdx: {
      edges: [
        {
          node: {
            id: string
            frontmatter: {
              categories: string[]
              coverbackgroundcolor: string
              coverforegroundcolor: string
              slug: string
              sortindex: number
              title: string

              client?: string
              size?: string
              subtitle?: string
              year: string

              cover: ChildImageSharp
            }
          }
        }
      ]
    }
    site: {
      siteMetadata: {
        author: string
        email: string
        intro: string
      }
    }
    photo: ChildImageSharp
  }
}

const Index: React.FunctionComponent<PageProps> = ({ data }) => {
  const { edges: projects } = data.allMdx
  return (
    <Layout>
      <Meta />
      <Sidebar>
        <h1>{data.site.siteMetadata.author}</h1>
        <p>{data.site.siteMetadata.intro}</p>
        <p>
          Send your enquiries at{" "}
          <a href={"mailto:" + data.site.siteMetadata.email}>
            {data.site.siteMetadata.email}
          </a>
        </p>
        <Image
          fluid={data.photo.childImageSharp.fluid}
          alt={data.site.siteMetadata.author}
        />
      </Sidebar>
      <Projects>
        {projects.map(({ node: project }) => (
          <GridItem
            backgroundcolor={project.frontmatter.coverbackgroundcolor}
            categories={project.frontmatter.categories}
            client={project.frontmatter.client}
            color={project.frontmatter.coverforegroundcolor}
            image={project.frontmatter.cover}
            key={project.id}
            size={project.frontmatter.size}
            subtitle={project.frontmatter.subtitle}
            title={project.frontmatter.title}
            to={project.frontmatter.slug}
            year={project.frontmatter.year}
          />
        ))}
      </Projects>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx(
      sort: {
        fields: [frontmatter___sortindex, frontmatter___title]
        order: ASC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            categories
            client
            coverbackgroundcolor
            coverforegroundcolor
            size
            slug
            subtitle
            title
            year
            cover {
              childImageSharp {
                fluid(quality: 95, maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    photo: file(relativePath: { eq: "photo.png" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 535) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        author
        intro
        email
      }
    }
  }
`

export default Index
