import styled from "styled-components"

const Sidebar = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    height: 100%;
    width: 320px;
  }
  background: #f9f9f9;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export default Sidebar
