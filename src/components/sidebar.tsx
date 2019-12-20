import styled from "styled-components"

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 2rem;
  background: ${props => props.color || "#f9f9f9"};
  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    position: fixed;
    height: 100%;
    width: ${props => props.theme.sidebar};
  }

  > h1 {
    max-width: 25rem;
    padding: 0 1.25rem;
  }
  > p {
    max-width: 25rem;
    padding: 0 1.25rem;
  }

  > .gatsby-image-wrapper {
    max-width: 400px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 55%;
      margin-top: -20%;
    }

    @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
      margin-left: 0;
      margin-top: 0;
    }
  }
`
export default Sidebar
