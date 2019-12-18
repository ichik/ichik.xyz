import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { ChildImageSharp } from "../types"

type GridCellProps = {
  backgroundcolor: string
  color: string
  big?: boolean
}

const GridCell = styled(Link)<GridCellProps>`
  position: relative;
  min-height: 70vw;
  background: ${props => props.backgroundcolor || "#000"};
  color: ${props => props.color || "#fff"};

  &:hover {
    background: ${props => props.backgroundcolor || "#000"};
    color: ${props => props.color || "#fff"};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: 25vw;
    grid-column-end: ${props => (props.big ? "span 2" : "span 1")};
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
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem 2rem;
`

type GridItemProps = {
  key: string
  to: string
  title: string
  backgroundcolor: string
  color: string
  big?: boolean
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
      big={props.big}
    >
      <Image fluid={props.image.childImageSharp.fluid} />
      <Meta>
        <h2>{props.title}</h2>
      </Meta>
    </GridCell>
  )
}

export default GridItem
