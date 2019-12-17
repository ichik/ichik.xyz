import styled from "styled-components"

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 2rem;
  background: ${props => props.color || "#f9f9f9"};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    height: 100%;
    width: 320px;
  }

  > h1 {
    max-width: 400px;
    padding: 0 20px;
  }
  > p {
    max-width: 20rem;
    padding: 0 20px;
  }
`
export default Sidebar
