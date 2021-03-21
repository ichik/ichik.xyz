import React from "react"
import styled from "styled-components"

import mp4 from "./responsive.mp4"
import poster from "./responsive.jpg"

const Player = styled.div`
  > video {
    max-width: 100%;
  }
`

const Responsive = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsInline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default Responsive
