import React from "react"
import styled from "styled-components"

const mp4 = require("./lamobileprototype.mp4")
const poster = require("./lamobileprototype.jpg")

const Player = styled.div`
  max-width: 380px;
`

const LAMobilePrototype = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsInline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default LAMobilePrototype
