import React from "react"
import styled from "styled-components"

const mp4 = require("./screenreveal.mp4")
const poster = require("./screenreveal.jpg")

const Wrapper = styled.div`
  > video {
    max-width: 100%;
    max-height: 540px;
  }
`

const Screenreveal = () => (
  <Wrapper>
    <video preload="auto" autoPlay loop muted playsInline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Wrapper>
)

export default Screenreveal
