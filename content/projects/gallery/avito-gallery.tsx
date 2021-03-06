import React from "react"
import styled from "styled-components"

import iphone from "./iphone-wireframe.png"
import mp4 from "./screencap.mp4"
import webm from "./screencap.webm"
import poster from "./gallery.jpg"

const Player = styled.div`
  @media (min-width: 388px) {
    background: #fff url(${iphone}) 0 0 / 384px 804px no-repeat;
    padding: 120px 30px 116px 34px;
    margin: 40px auto 60px auto;
  }
`

const AvitoGallery = () => (
  <Player>
    <video
      preload="auto"
      autoPlay
      loop
      muted
      playsInline
      width="320"
      height="568"
      poster={poster}
    >
      <source src={webm} type='video/webm;codecs="vp8, vorbis"' />
      <source src={mp4} type="video/mp4" />
    </video>
  </Player>
)

export default AvitoGallery
