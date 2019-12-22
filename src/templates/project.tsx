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
        linkcolor: string
        linkhovercolor: string
      }
    }
  }
}

type Mainprops = {
  backgroundcolor: string
  textcolor: string
  linkcolor: string
  linkhovercolor: string
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

  a {
    color: hsl(${props => props.linkcolor || "200, 100%, 35%"});
    background-image: linear-gradient(
      180deg,
      hsla(${props => props.linkcolor || "200, 100%, 35%"}, 0.25) 0,
      hsla(${props => props.linkcolor || "200, 100%, 35%"}, 0.25)
    );

    &:hover {
      color: hsl(${props => props.linkhovercolor || "200, 100%, 35%"});
      background-image: linear-gradient(
        180deg,
        hsla(${props => props.linkhovercolor || "200, 100%, 35%"}, 0.25) 0,
        hsla(${props => props.linkhovercolor || "200, 100%, 35%"}, 0.25)
      );
    }
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
        linkcolor={mdx.frontmatter.linkcolor}
        linkhovercolor={mdx.frontmatter.linkhovercolor}
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
      }
    }
  }
`
