import React from "react"
import styled from "styled-components"

const gif = require("./images.gif")

const Wrapper = styled.div`
  > img {
    max-width: 400px;
  }
`

const Sidebar = () => (
  <Wrapper>
    <img src={gif} alt="Image layout of original SqncBrk" />
  </Wrapper>
)

export default Sidebar
