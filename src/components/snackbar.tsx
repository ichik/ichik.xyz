import React from "react"
import styled from "styled-components"

const Wrapper = styled.div``

const Chip = styled.span``

const Snackbar = ({ categories }: { categories: string[] }) => {
  return (
    <Wrapper>
      {categories &&
        categories.length > 0 &&
        categories.map(category => <Chip key={category}>{category}</Chip>)}
    </Wrapper>
  )
}

export default Snackbar
