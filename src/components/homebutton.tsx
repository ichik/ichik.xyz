import { Link } from "gatsby"
import styled from "styled-components"

type ButtonProps = {
  backgroundcolor: string
  color: string
}

const HomeButton = styled(Link)<ButtonProps>`
  padding: 1rem;
  background: hsl(${props => props.backgroundcolor || "0, 0%, 100%"});
  color: hsl(${props => props.color || "0, 0%, 0%"});
  border-radius: 0.25rem;
  width: fit-content;
  align-self: center;
`

export default HomeButton
