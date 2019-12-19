import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Snackbar from "./snackbar"
import { ChildImageSharp } from "../types"

type GridCellProps = {
  backgroundcolor: string
  color: string
  size?: string
}

const GridCell = styled(Link)<GridCellProps>`
  position: relative;
  min-height: 70vw;
  background: ${props => props.backgroundcolor || "#000"};
  color: hsl(${props => props.color || "0, 0%, 100%"});

  &:hover {
    background: ${props => props.backgroundcolor || "#000"};
    color: hsl(${props => props.color || "0, 0%, 100%"});

    > div h2::after {
      transform: translate3d(110%, 0, 0);
      opacity: 1;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: 25vw;
    grid-column-end: ${props => (props.size == "big" ? "span 2" : "span 1")};
  }

  > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem 2rem;

  > h2 {
    display: inline-block;
    width: fit-content;
    position: relative;
  }

  > h2::after {
    content: "→";
    font-family: "Fira Mono", sans-serif;
    position: absolute;
    height: 1rem;
    width: 100%;
    margin-top: 0.125rem;
    right: 0;
    transform: translate3d(50%, 0, 0);
    opacity: 0;
    transition: transform 0.4s, opacity 0.4s;
    transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
  }

  &:hover {
    background: hsla(0, 0%, 0%, 5%);
  }
`

type GridItemProps = {
  key: string
  to: string
  title: string
  backgroundcolor: string
  color: string
  size?: string
  categories: string[]
  image: ChildImageSharp
}

const GridItem: React.FunctionComponent<GridItemProps> = props => {
  return (
    <GridCell
      to={props.to}
      title={props.title}
      aria-label={`View project "${props.title}"`}
      backgroundcolor={props.backgroundcolor}
      color={props.color}
      size={props.size}
    >
      <Image fluid={props.image.childImageSharp.fluid} />
      <Meta>
        <h2>{props.title}</h2>
        <Snackbar color={props.color} categories={props.categories} />
      </Meta>
    </GridCell>
  )
}

export default GridItem
