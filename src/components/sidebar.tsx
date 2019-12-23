import styled from "styled-components"

type SidebarProps = {
  backgroundcolor?: string
  color?: string
  index?: boolean
}

const Sidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.index ? "flex-end;" : "space-between")};
  padding-top: 3rem;
  background: hsl(${props => props.backgroundcolor || "0, 0%, 98%"});
  color: hsl(${props => props.color || "0, 0%, 0%"});
  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    position: fixed;
    height: 100%;
    width: ${props => props.theme.sidebar};
  }

  > * ~ * {
    margin-top: 1rem;
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
