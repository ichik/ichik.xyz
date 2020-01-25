import React from "react"
import styled from "styled-components"

const gif = require("./sidebar.gif")

const Wrapper = styled.div`
  > img {
    max-width: 400px;
  }
`

const Sidebar = () => (
  <Wrapper>
    <img src={gif} alt="Side menu of original SqncBrk" />
  </Wrapper>
)

export default Sidebar
