import React from "react"
import styled from "styled-components"

const mp4 = require("./responsive.mp4")
const poster = require("./responsive.jpg")

const Player = styled.div`
  > video {
    max-width: 100%;
  }
`

const Responsive = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsinline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default Responsive
