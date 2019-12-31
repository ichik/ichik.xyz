import React from "react"
import styled from "styled-components"

const mp4 = require("./connection.mp4")
const poster = require("./connection.jpg")

const Wrapper = styled.div`
  > video {
    max-width: 100%;
    max-height: 540px;
  }
`

const Connection = () => (
  <Wrapper>
    <video preload="auto" autoPlay loop muted playsinline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Wrapper>
)

export default Connection
