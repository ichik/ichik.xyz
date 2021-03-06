import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Meta from "../components/meta"
import Layout from "../components/layout"
import Sidebar, { Colophon } from "../components/sidebar"
import Logo from "../components/logo"
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
              categories: string[]
              coverbackgroundcolor: string
              coverforegroundcolor: string
              slug: string
              sortindex: number
              title: string
              year: string

              client?: string
              size?: string
              subtitle?: string
              unpublished?: boolean

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
  }
}

const Index: React.FunctionComponent<PageProps> = ({ data }) => {
  const { edges: projects } = data.allMdx
  return (
    <Layout>
      <Meta />
      <Sidebar>
        <Logo index />
        <Colophon>
          <p>{data.site.siteMetadata.intro}</p>
          <p>
            Send enquiries at{" "}
            <a href={"mailto:" + data.site.siteMetadata.email}>
              {data.site.siteMetadata.email}
            </a>
          </p>
          <StaticImage
            src="../images/photo.png"
            alt={data.site.siteMetadata.author}
            placeholder="tracedSVG"
            layout="constrained"
            style={{ display: "block" }}
          />
        </Colophon>
      </Sidebar>
      <Projects>
        {projects.map(
          ({ node: project }) =>
            !project.frontmatter.unpublished && (
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
            )
        )}
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
            unpublished
            cover {
              childImageSharp {
                gatsbyImageData(
                  quality: 95
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
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
