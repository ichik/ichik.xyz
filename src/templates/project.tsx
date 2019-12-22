import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
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

  color: hsl(${props => props.textcolor || "0, 0%, 0%"});
  background: hsl(${props => props.backgroundcolor || "0, 0%, 100%"});

  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    grid-column-start: 2;
  }

  > h1,
  p {
    max-width: 40rem;
  }

  > .gatsby-resp-image-wrapper {
    width: 100%;
    margin-bottom: 1rem;
  }
`

const PageTemplate: React.FunctionComponent<PageProps> = ({
  data: { mdx },
}) => {
  return (
    <Layout>
      <Meta title={mdx.frontmatter.title} />
      <Sidebar color={mdx.frontmatter.sidebarcolor} />
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
      }
    }
  }
`
