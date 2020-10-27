import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Footer = styled.footer`
  background: hsl(60, 9%, 6%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: hsl(60, 9%, 88%);

  a {
    color: hsl(200, 100%, 60%);
    background-image: linear-gradient(
      180deg,
      hsla(200, 100%, 60%, 0.25) 0,
      hsla(200, 100%, 60%, 0.25)
    );

    :hover {
      color: hsl(354, 100%, 50%);
      background-image: linear-gradient(
        180deg,
        hsla(354, 100%, 50%, 0.25) 0,
        hsla(354, 100%, 50%, 0.25)
      );
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletHorizontal}) {
    grid-column-start: 2;
  }
`

const Linklist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 20rem;
  margin-top: 1rem;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 2rem;
  }
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
        <a
          href={`https://dribbble.com/${data.site.siteMetadata.dribbble}`}
          aria-label={`View ${data.site.siteMetadata.author}'s Dribbble profile`}
          rel="me"
        >
          Dribbble
        </a>
        <a
          href={`https://github.com/${data.site.siteMetadata.github}`}
          aria-label={`View ${data.site.siteMetadata.author}'s GitHub profile`}
          rel="me"
        >
          GitHub
        </a>
        <a
          href={`https://linkedin.com/in/${data.site.siteMetadata.linkedin}`}
          aria-label={`View ${data.site.siteMetadata.author}'s LinkedIn profile`}
          rel="me"
        >
          LinkedIn
        </a>
        <a
          href="/CV.pdf"
          aria-label={`Download ${data.site.siteMetadata.author}'s CV`}
        >
          CV
        </a>
      </Linklist>
    </Footer>
  )
}
