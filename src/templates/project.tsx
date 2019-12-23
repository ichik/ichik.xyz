import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import HomeButton from "../components/homebutton"
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
  padding: 4rem 1rem;
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
    margin-bottom: 4rem;
  }

  > iframe {
    margin-bottom: 4rem;
    max-width: 100%;
  }
`

const Colophon = styled.div`
  padding: 1.25rem;

  > p::first-letter {
    text-transform: capitalize;
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
      <Meta title={mdx.frontmatter.title} />
      <Sidebar
        backgroundcolor={mdx.frontmatter.sidebarcolor}
        color={mdx.frontmatter.textcolor}
      >
        <HomeButton
          color={mdx.frontmatter.sidebarcolor}
          backgroundcolor={mdx.frontmatter.linkcolor}
          to="/"
        >
          Open Home Page
        </HomeButton>
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
        <h1>{mdx.frontmatter.title}</h1>
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
      }
    }
  }
`
