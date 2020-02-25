import styled from "styled-components"

const Projects = styled.main`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 100vw);
  overflow-x: hidden;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 50vw);
  }

  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    grid-column-start: 2;
    /* grid-template-columns: 1fr; */
    grid-template-rows: repeat(auto-fill, 30vw);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 25vw);
  }
`
export default Projects
