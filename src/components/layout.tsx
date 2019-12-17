import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ChildImageSharp } from "../types"
import reset from "../styles/reset"
import theme from "../../config/theme"

const GlobalStyles = createGlobalStyle`
  ${reset}
`

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 320px 1fr;
  }
`

type LayoutProps = { children: React.ReactNode }

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <GlobalStyles />
          {children}
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
