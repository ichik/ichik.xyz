import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { ChildImageSharp } from "../types"

const GridCell = styled(Link)`
  position: relative;

  > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

type GridItemProps = {
  key: string
  to: string
  title: string
  image: ChildImageSharp
}

const Meta = styled.div`
  position: absolute;
  z-index: 10;
`

const GridItem: React.FunctionComponent<GridItemProps> = props => {
  return (
    <GridCell key={props.key} to={props.to} title={props.title}>
      <Image fluid={props.image.childImageSharp.fluid} />
      <Meta>
        <h2>{props.title}</h2>
      </Meta>
    </GridCell>
  )
}

export default GridItem
