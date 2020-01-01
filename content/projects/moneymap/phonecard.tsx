import React from "react"
import styled from "styled-components"

const Background = require("./phonecardbg.png")
const Front = require("./phonefront.png")
const Back = require("./phoneback.png")

const Card = styled.div`
  background-image: url(${Background});
  background-size: contain;
  width: 704px;
  height: 248px;
  margin: 1rem 0;
  transition: all 0.1s ease-in;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transform: translateY(-0.5rem);
  }
`

const Phonecard = () => {
  console.log(Background)
  return <Card></Card>
}

export default Phonecard
