import styled from "styled-components"

const Projects = styled.main`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 100vw);
  overflow: hidden;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-rows: repeat(auto-fill, 80vw);
  }

  @media (min-width: ${props => props.theme.breakpoints.tabletVertical}) {
    grid-column-start: 2;
    grid-template-rows: repeat(auto-fill, 40vw);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 25vw);
  }
`
export default Projects
