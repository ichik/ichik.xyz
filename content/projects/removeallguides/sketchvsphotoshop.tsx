import React from "react"
import styled from "styled-components"

const sketchOld = require("./sketch-old.mp4")
const sketchNew = require("./sketch-new.mp4")
const photoshop = require("./photoshop.mp4")
const sketchOldPoster = require("./sketch-old.jpg")
const sketchNewPoster = require("./sketch-new.jpg")
const photoshopPoster = require("./photoshop.jpg")

const Wrapper = styled.div`
  box-shadow: 0 0 2rem hsla(153, 13%, 5%, 90%);
  > video {
    max-width: 100%;
  }
`

type ScreencastProps = {
  sketch?: boolean
  new?: boolean
}

const SketchVsPhotoshop: React.FunctionComponent<ScreencastProps> = props =>
  props.sketch ? (
    props.new ? (
      <Wrapper>
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsinline
          poster={sketchNewPoster}
        >
          <source src={sketchNew} type="video/mp4" />
        </video>
      </Wrapper>
    ) : (
      <Wrapper>
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsinline
          poster={sketchOldPoster}
        >
          <source src={sketchOld} type="video/mp4" />
        </video>
      </Wrapper>
    )
  ) : (
    <Wrapper>
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsinline
        poster={photoshopPoster}
      >
        <source src={photoshop} type="video/mp4" />
      </video>
    </Wrapper>
  )

export default SketchVsPhotoshop
