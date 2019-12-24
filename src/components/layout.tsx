import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import reset from "../styles/reset"
import theme from "../../config/theme"
import Footer from "./footer"
import "@openfonts/fjalla-one_latin"
import "@openfonts/cantarell_latin"
import "@openfonts/fira-mono_latin"

type GlobalStyle = {
  linkcolor: string
  linkhovercolor: string
}

export const GlobalStyles = createGlobalStyle<GlobalStyle>`
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
    text-decoration: none;
    background-repeat: repeat-x;
    background-position: 0 90%;
    background-size: 1px 1px;
    transition: all 0.3s ease;

    color: hsl(${props => props.linkcolor});
    background-image: linear-gradient(
      180deg,
      hsla(${props => props.linkcolor}, 0.25) 0,
      hsla(${props => props.linkcolor}, 0.25)
    );

    &:hover {
      color: hsl(${props => props.linkhovercolor});
      background-image: linear-gradient(
        180deg,
        hsla(${props => props.linkhovercolor}, 0.25) 0,
        hsla(${props => props.linkhovercolor}, 0.25)
      );
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

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

const defaultProps = {
  linkcolor: "200, 100%, 35%",
  linkhovercolor: "354, 100%, 44%",
}

const Layout = ({ children, linkcolor, linkhovercolor }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Wrapper>
          <GlobalStyles linkcolor={linkcolor} linkhovercolor={linkhovercolor} />
          {children}
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

Layout.defaultProps = defaultProps

export default Layout
