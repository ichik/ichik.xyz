import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/layout"
import theme from "../../config/theme"
import Logo from "../components/logo"
import Meta from "../components/meta"
import "@openfonts/fjalla-one_latin"
import "@openfonts/cantarell_latin"

const ErrorMessage = styled.div`
  background: hsl(60, 9%, 6%);
  color: hsl(0, 0%, 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  > * {
    max-width: 30rem;
  }
`

const ErrorPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <ErrorMessage>
        <Meta title="Error" />
        <GlobalStyles linkcolor="200, 100%, 60%" linkhovercolor="0, 0%, 100%" />
        <Logo
          maincolor="200, 100%, 60%"
          cutoutcolor="60, 9%, 6%"
          hovercolor="0, 0%, 100%"
        />
        <p>This is an error page. Nothing to do here.</p>
      </ErrorMessage>
    </>
  </ThemeProvider>
)

export default ErrorPage
