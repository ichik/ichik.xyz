import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { ChildImageSharp } from "../types"

import reset from "../styles/reset"

const GlobalStyles = createGlobalStyle`
  ${reset}
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
`

const Sidebar = styled.div`
  position: fixed;
  height: 100%;
  width: 320px;
  background: #f9f9f9;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Main = styled.main`
  grid-column-start: 2;
`

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {}

interface QueryResult {
  photo: ChildImageSharp
}

const Layout = ({ children }: LayoutProps) => {
  const data: QueryResult = useStaticQuery(query)
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Sidebar>
          <Img fluid={data.photo.childImageSharp.fluid} />
        </Sidebar>
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}

export default Layout

Layout.defaultProps = defaultProps

export const query = graphql`
  query {
    photo: file(relativePath: { eq: "photo.png" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
