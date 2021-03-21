import React from "react"
import styled from "styled-components"

import mp4 from "./lamobileprototype.mp4"
import poster from "./lamobileprototype.jpg"

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
