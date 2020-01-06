import React from "react"
import styled from "styled-components"

const Background = require("./phonecardbg.png")
const Front = require("./phonefront.png")
const Back = require("./phoneback.png")

const Wrapper = styled.div`
  max-width: 704px;
  width: 100%;
`

const Card = styled.div`
  background-image: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 0;
  width: 100%;
  padding-top: calc(31 / 88 * 100%);
  margin: 1rem 0;
  transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in;
  position: relative;

  &:hover {
    box-shadow: 0 0 24px hsla(248, 45%, 30%, 0.8);
    cursor: pointer;
    transform: translate3d(0, -0.5rem, 0);
  }
`

const Doors = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FrontSlider = styled.div`
  background-image: url(${Front});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0;
  height: 0;
  width: calc(105.5 / 704 * 100%);
  padding-top: calc(27 / 88 * 100%);
  transition: transform 0.3s ease-in-out;
  transform: translate3d(-45%, 0, 0);
  z-index: 1;

  ${Doors}:hover & {
    transform: translate3d(-10%, 0, 0);
  }
`

const BackSlider = styled(FrontSlider)`
  background-image: url(${Back});
  width: calc(107.5 / 704 * 100%);
  transform: translate3d(15%, 0, 0);
  z-index: 2;

  ${Doors}:hover & {
    transform: translate3d(-15%, 0, 0);
  }
`

const Phonecard = () => {
  return (
    <Wrapper>
      <Card>
        <Doors>
          <BackSlider />
          <FrontSlider />
        </Doors>
      </Card>
    </Wrapper>
  )
}

export default Phonecard
