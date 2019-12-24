import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Logolink = styled(Link)`
  background: none;
  max-width: 20rem;

  &:hover {
    background: none;
  }
`

type ShieldProps = {
  maincolor?: string
  cutoutcolor?: string
  hovercolor?: string
}

const Shield = styled.div<ShieldProps>`
  padding: 0 1.25rem;
  margin: 0 0 2rem 0;
  max-width: 20rem;

  > h1 {
    border: 0.25rem solid hsl(${props => props.maincolor || "0, 0%, 0%"});
    border-radius: 0 1rem 1rem 1rem;
    color: hsl(${props => props.maincolor || "0, 0%, 0%"});
    display: flex;
    flex-flow: column;
    transition: all 0.3s ease;

    > span {
      display: block;
      padding: 0.75rem 1.5rem;
    }

    > span:first-child {
      color: hsl(${props => props.cutoutcolor || "0, 0%, 100%"});
      background-color: hsl(${props => props.maincolor || "0, 0%, 0%"});
      transition: all 0.3s ease;
      border-radius: 0 0.6rem 0 0;
    }

    ${Logolink}:hover & {
      border-color: hsl(${props => props.hovercolor || "0, 0%, 20%"});
      color: hsl(${props => props.hovercolor || "0, 0%, 20%"});

      > span:first-child {
        background-color: hsl(${props => props.hovercolor || "0, 0%, 20%"});
      }
    }
  }
`

const Lockup: React.FunctionComponent<ShieldProps> = props => (
  <Shield
    maincolor={props.maincolor}
    cutoutcolor={props.cutoutcolor}
    hovercolor={props.hovercolor}
  >
    <h1>
      <span>Portfolio of</span>
      <span>Vadim Mikhnov</span>
    </h1>
  </Shield>
)

type LogoProps = {
  index?: boolean
  maincolor?: string
  cutoutcolor?: string
  hovercolor?: string
}

const Logo: React.FunctionComponent<LogoProps> = props =>
  props.index ? (
    <Lockup />
  ) : (
    <Logolink to="/">
      <Lockup
        maincolor={props.maincolor}
        cutoutcolor={props.cutoutcolor}
        hovercolor={props.hovercolor}
      />
    </Logolink>
  )

export default Logo
