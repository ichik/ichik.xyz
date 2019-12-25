import React from "react"
import styled from "styled-components"

const iphone = require("./avito-gallery-assets/iphone-wireframe.png")
const mp4 = require("./avito-gallery-assets/avito-gallery-screencap.mp4")
const webm = require("./avito-gallery-assets/avito-gallery-screencap.webm")
const poster = require("./avito-gallery-assets/gallery.jpg")

const Player = styled.div`
  background: #fff url(${iphone}) 0 0 / 384px 804px no-repeat;
  padding: 120px 30px 116px 34px;
  margin: 40px auto 60px auto;
`

const AvitoGallery = () => (
  <Player>
    <video
      preload="auto"
      autoPlay
      loop
      muted
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
