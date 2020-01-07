import React from "react"
import styled from "styled-components"

const mp4 = require("./energyjourney.mp4")
const poster = require("./energyjourney.jpg")

const Player = styled.div`
  > video {
    max-width: 100%;
  }
`

const EnergyJourney = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsinline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default EnergyJourney
