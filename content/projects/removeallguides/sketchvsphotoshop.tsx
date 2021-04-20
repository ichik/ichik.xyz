import React from "react"
import styled from "styled-components"

import sketchOld from "./sketch-old.mp4"
import sketchNew from "./sketch-new.mp4"
import photoshop from "./photoshop.mp4"
import sketchOldPoster from "./sketch-old.jpg"
import sketchNewPoster from "./sketch-new.jpg"
import photoshopPoster from "./photoshop.jpg"

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

const SketchVsPhotoshop: React.FunctionComponent<ScreencastProps> = (props) =>
  props.sketch ? (
    props.new ? (
      <Wrapper>
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
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
          playsInline
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
