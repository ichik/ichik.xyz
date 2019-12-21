import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "../styles/reset"
import theme from "../../config/theme"
import Footer from "./footer"
import "@openfonts/fjalla-one_latin"
import "@openfonts/cantarell_latin"
import "@openfonts/fira-mono_latin"

const GlobalStyles = createGlobalStyle`
  ${reset}
  ::selection {
    background-color: hsl(200, 100%, 80%);
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
  
  a {
    color: hsl(200, 100%, 35%);
    text-decoration: none;
    background-image: linear-gradient(180deg, hsla(200, 100%, 35%, 0.25) 0, hsla(200, 100%, 35%, 0.25));
    background-repeat: repeat-x;
    background-position: 0 90%;
    background-size: 1px 1px;
    transition: all 0.3s ease;

    &:hover {
      color: rgb(226, 0, 22);
      background-image: linear-gradient(180deg, rgba(226, 0, 22, 0.25) 0, rgba(226, 0, 22, 0.25));
    }
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    grid-template-columns: ${props => props.theme.sidebar} 1fr;
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
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
