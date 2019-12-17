import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "../styles/reset"
import theme from "../../config/theme"
import "@openfonts/fjalla-one_latin"
import "@openfonts/cantarell_latin"

const GlobalStyles = createGlobalStyle`
  ${reset}
  ::selection {
    background-color: #9adeff;
  }
  html {
    font-size: ${theme.fontSizes.root};
  }
  body {
    font-family: "Cantarell", sans-serif;
  }
  h1, h2, h3 {
    font-family: "Fjalla One", sans-serif;
    font-weight: ${theme.fontWeights.bold};
  }
  h1 {
    font-size: ${theme.fontSizes.h1};
  }
  h2 {
    font-size: ${theme.fontSizes.h2}
  }
  p {
    font-size: 1rem;
    font-weight: ${theme.fontWeights.normal};
  }
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
