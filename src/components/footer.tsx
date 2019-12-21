import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Footer = styled.footer`
  background: hsl(60, 9%, 6%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  color: hsl(240, 100%, 88%);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 4rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    grid-column-start: 2;
  }
`

const Linklist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 20rem;
  margin-top: 1rem;
`

interface QueryResult {
  site: {
    siteMetadata: {
      [key: string]: string
    }
  }
}

export default () => {
  const data: QueryResult = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
          linkedin
          github
          dribbble
        }
      }
    }
  `)
  return (
    <Footer>
      <p>
        &copy; {data.site.siteMetadata.author}, {new Date().getFullYear()}
      </p>
      <Linklist>
        <a href={`https://dribbble.com/${data.site.siteMetadata.dribbble}`}>
          Dribbble
        </a>
        <a href={`https://github.com/${data.site.siteMetadata.github}`}>
          GitHub
        </a>
        <a href={`https://linkedin.com/in/${data.site.siteMetadata.linkedin}`}>
          LinkedIn
        </a>
        <a href="/CV.pdf">CV</a>
      </Linklist>
    </Footer>
  )
}
