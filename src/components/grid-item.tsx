import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Snackbar from "./snackbar"
import { ChildImageSharp } from "../types"

type GridCellProps = {
  backgroundcolor: string
  color: string
  size?: string
}

type GridItemProps = {
  backgroundcolor: string
  categories: string[]
  color: string
  image: ChildImageSharp
  key: string
  title: string
  to: string

  client?: string
  size?: string
  subtitle?: string
  year?: string
}

const GridCell = styled(Link)<GridCellProps>`
  position: relative;
  min-height: 100vw;
  background: hsl(${(props) => props.backgroundcolor || "0, 0%, 0%"});
  background-image: none;
  color: hsl(${(props) => props.color || "0, 0%, 100%"});
  z-index: 1;

  &:hover {
    background: hsl(${(props) => props.backgroundcolor || "0, 0%, 0%"});
    color: hsl(${(props) => props.color || "0, 0%, 100%"});

    > div h2::after {
      transform: translate3d(104%, 0, 0);
      opacity: 1;
    }
  }

  &:focus {
    outline: 0.5rem solid hsla(${(props) => props.color || "0, 0%, 100%"}, 20%);
    outline-offset: -0.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    min-height: 50vw;
    grid-column-end: ${(props) => (props.size == "big" ? "span 2" : "span 1")};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tabletHorizontal}) {
    min-height: 30vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    min-height: 25vw;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.hd}) {
    min-height: 20vw;
  }

  > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
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
  padding: 0.5rem 1rem 0 1rem;

  > h2 {
    display: inline-block;
    width: fit-content;
    position: relative;

    &::after {
      content: "→";
      font-family: "Fira Mono", monospace;
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
  }

  &:hover {
    background: hsla(0, 0%, 100%, 5%);
  }
`

const GridItem: React.FunctionComponent<GridItemProps> = (props) => {
  return (
    <GridCell
      aria-label={`View project "${props.title}"`}
      backgroundcolor={props.backgroundcolor}
      color={props.color}
      size={props.size}
      title={props.title}
      to={props.to}
    >
      <GatsbyImage
        image={props.image.childImageSharp.gatsbyImageData}
        alt={props.title}
      />
      <Meta>
        <h2>{props.title}</h2>
        {props.client && (
          <p>
            for {props.client}, {props.year}
          </p>
        )}
        {props.subtitle && (
          <p>
            {props.subtitle}, {props.year}
          </p>
        )}
        <Snackbar color={props.color} categories={props.categories} />
      </Meta>
    </GridCell>
  )
}

export default GridItem
