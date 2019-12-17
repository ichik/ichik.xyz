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
  
  a {
    color: #4a6de8;
    text-decoration: none;
    background-image: linear-gradient(180deg, rgba(72, 100, 234, 0.2) 0, rgba(72, 100, 234, 0.2));
    background-repeat: repeat-x;
    background-position: 0 90%;
    background-size: 1px 1px;
  }
  
  a:hover {
    color: rgb(226, 0, 22);
    background-image: linear-gradient(180deg, rgba(226, 0, 22, 0.2) 0, rgba(226, 0, 22, 0.2));
  }
`

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
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
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
