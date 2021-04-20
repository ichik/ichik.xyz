import React from "react"
import styled from "styled-components"

import mp4 from "./footer.mp4"
import poster from "./footer.jpg"

const Player = styled.div`
  > video {
    max-width: 100%;
  }
`

const Footer = () => (
  <Player>
    <video preload="auto" autoPlay loop muted playsInline poster={poster}>
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default Footer
