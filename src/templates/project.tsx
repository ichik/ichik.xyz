import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"
import Sidebar, { Colophon } from "../components/sidebar"
import Logo from "../components/logo"
import Snackbar from "../components/snackbar"
import Meta from "../components/meta"

type PageProps = {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
        sidebarcolor: string
        backgroundcolor: string
        textcolor: string
        linkcolor: string
        linkhovercolor: string
        year: string
        description: string
        categories: string[]
        cover: {
          childImageSharp: {
            resize: {
              src: string
            }
          }
        }

        client?: string
        clienturl?: string
        subtitle?: string
      }
    }
  }
}

type Mainprops = {
  backgroundcolor: string
  textcolor: string
}

const Main = styled.main<Mainprops>`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 3rem 1rem;
  width: 100vw;
  overflow-x: hidden;

  color: hsl(${props => props.textcolor || "0, 0%, 0%"});
  background: hsl(${props => props.backgroundcolor || "0, 0%, 100%"});

  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    grid-column-start: 2;
    width: auto;
  }

  > * {
    margin-bottom: 1rem;
  }

  > h1,
  p {
    max-width: 40rem;
  }

  > .gatsby-resp-image-wrapper {
    width: 100%;
    margin: 1rem 0 4rem 0;
  }

  > iframe {
    margin-bottom: 4rem;
    max-width: 100%;
  }

  h3 {
    margin-top: 6rem;
  }
`

const PageTemplate: React.FunctionComponent<PageProps> = ({
  data: { mdx },
}) => {
  return (
    <Layout
      linkcolor={mdx.frontmatter.linkcolor}
      linkhovercolor={mdx.frontmatter.linkhovercolor}
    >
      <Meta
        title={
          mdx.frontmatter.client
            ? mdx.frontmatter.title + " for " + mdx.frontmatter.client
            : mdx.frontmatter.title + " " + mdx.frontmatter.subtitle
        }
        description={
          mdx.frontmatter.client
            ? "For " +
              mdx.frontmatter.client +
              ", " +
              mdx.frontmatter.description
            : mdx.frontmatter.subtitle + ", " + mdx.frontmatter.description
        }
        banner={mdx.frontmatter.cover.childImageSharp.resize.src}
      />
      <Sidebar
        backgroundcolor={mdx.frontmatter.sidebarcolor}
        color={mdx.frontmatter.textcolor}
      >
        <Logo
          maincolor={mdx.frontmatter.linkcolor}
          cutoutcolor={mdx.frontmatter.sidebarcolor}
          hovercolor={mdx.frontmatter.linkhovercolor}
        />
        <Colophon>
          {mdx.frontmatter.client ? (
            mdx.frontmatter.clienturl ? (
              <p>
                For{" "}
                <a href={mdx.frontmatter.clienturl}>{mdx.frontmatter.client}</a>
                , {mdx.frontmatter.description}
              </p>
            ) : (
              <p>
                For {mdx.frontmatter.client}, {mdx.frontmatter.description}
              </p>
            )
          ) : (
            <p>
              {mdx.frontmatter.subtitle}, {mdx.frontmatter.description}
            </p>
          )}
          <p>{mdx.frontmatter.year}</p>
          <Snackbar
            color={mdx.frontmatter.textcolor}
            categories={mdx.frontmatter.categories}
          />
        </Colophon>
      </Sidebar>
      <Main
        backgroundcolor={mdx.frontmatter.backgroundcolor}
        textcolor={mdx.frontmatter.textcolor}
      >
        <h2>{mdx.frontmatter.title}</h2>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Main>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        sidebarcolor
        backgroundcolor
        textcolor
        linkcolor
        linkhovercolor
        year
        client
        clienturl
        subtitle
        description
        categories
        cover {
          childImageSharp {
            resize(width: 1200, height: 675, quality: 80) {
              src
            }
          }
        }
      }
    }
  }
`
