import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Shield = styled.div`
  padding: 0 1.25rem;
  max-width: 20rem;
  margin: 0 0 2rem 0;

  > h1 {
    border: 4px solid black;
    border-radius: 0 1rem 1rem 1rem;
    display: flex;
    flex-flow: column;

    > span {
      display: block;
      padding: 0.5rem 1.5rem;
    }

    > span:first-child {
      color: white;
      background-color: black;
    }
  }
`

const Lockup = () => (
  <Shield>
    <h1>
      <span>Portfolio of</span>
      <span>Vadim Mikhnov</span>
    </h1>
  </Shield>
)

type LogoProps = {
  index?: boolean
}

const Logo: React.FunctionComponent<LogoProps> = props =>
  props.index ? (
    <Lockup />
  ) : (
    <Link to="/">
      <Lockup />
    </Link>
  )

export default Logo
