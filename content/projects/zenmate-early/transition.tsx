import React from "react"
import styled from "styled-components"

const mp4 = require("./transition.mp4")
const poster = require("./disabled.png")

const Player = styled.div`
  > video {
    max-width: 100%;
  }
`

const Transition = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsInline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default Transition
