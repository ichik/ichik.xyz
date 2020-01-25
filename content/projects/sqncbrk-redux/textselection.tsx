import React from "react"
import styled from "styled-components"

const mp4 = require("./textselection.mp4")
const poster = require("./textselection.jpg")

const Player = styled.div`
  max-width: 100%;
`

const Textselection = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsinline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default Textselection
