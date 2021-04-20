import React from "react"
import styled from "styled-components"

import mp4 from "./connection.mp4"
import poster from "./connection.jpg"

const Wrapper = styled.div`
  > video {
    max-width: 100%;
    max-height: 477px;
  }
`

const Connection = () => (
  <Wrapper>
    <video preload="auto" autoPlay loop muted playsInline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Wrapper>
)

export default Connection
