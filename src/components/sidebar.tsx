import styled from "styled-components"

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 2rem;
  background: ${props => props.color || "#f9f9f9"};
  @media (min-width: ${props => props.theme.breakpoints.tabletVertical}) {
    position: fixed;
    height: 100%;
    width: ${props => props.theme.sidebar};
  }

  > h1 {
    max-width: 30rem;
    padding: 0 1.25rem;
  }
  > p {
    max-width: 30rem;
    padding: 0 1.25rem;
  }

  > .gatsby-image-wrapper {
    max-width: 400px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 25%;
    }

    @media (min-width: ${props => props.theme.breakpoints.tabletVertical}) {
      margin-left: 0;
    }
  }
`
export default Sidebar
