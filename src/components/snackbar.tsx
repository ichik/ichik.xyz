import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`

const Snack = styled.span`
  font-family: "Fira Mono", monospace;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: hsla(${props => props.color || "0, 0%, 100%"}, 15%);
  margin: 0 0.25rem 0.25rem 0;
`

type Snackbarprops = {
  categories: string[]
  color: string
}

const Snackbar: React.FunctionComponent<Snackbarprops> = props => {
  return (
    <Wrapper>
      {props.categories &&
        props.categories.length > 0 &&
        props.categories.map(category => (
          <Snack color={props.color} key={category}>
            {category}
          </Snack>
        ))}
    </Wrapper>
  )
}

export default Snackbar
