import styled from "styled-components"

const Projects = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 70vw);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-rows: repeat(auto-fill, 25vw);
    grid-column-start: 2;
  }

  @media (min-width: ${props => props.theme.breakpoints.tabletVertical}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 25vw);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 25vw);
  }
`
export default Projects
