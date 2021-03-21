import React from "react"
import styled from "styled-components"

import gif from "./robots.gif"

const Wrapper = styled.div`
  > img {
    max-width: 400px;
  }
`

const Robots = () => (
  <Wrapper>
    <img src={gif} alt="Help bot avatars showcase" />
  </Wrapper>
)

export default Robots
