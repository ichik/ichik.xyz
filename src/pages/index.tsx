import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
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
              slug: string
              title: string
              sortindex: number
              client?: string
              subtitle?: string
              coverbackgroundcolor: string
              coverforegroundcolor: string
              size?: string
              categories: string[]
              cover: ChildImageSharp
            }
          }
        }
      ]
    }
    site: {
      siteMetadata: {
        author: string
        intro: string
        email: string
      }
    }
    photo: ChildImageSharp
  }
}

const Index: React.FunctionComponent<PageProps> = ({ data }) => {
  const { edges: projects } = data.allMdx
  return (
    <Layout>
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
            key={project.id}
            to={project.frontmatter.slug}
            title={project.frontmatter.title}
            client={project.frontmatter.client}
            subtitle={project.frontmatter.subtitle}
            backgroundcolor={project.frontmatter.coverbackgroundcolor}
            color={project.frontmatter.coverforegroundcolor}
            size={project.frontmatter.size}
            categories={project.frontmatter.categories}
            image={project.frontmatter.cover}
          />
        ))}
      </Projects>
      <Footer />
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
            title
            client
            subtitle
            slug
            coverbackgroundcolor
            coverforegroundcolor
            size
            categories
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
