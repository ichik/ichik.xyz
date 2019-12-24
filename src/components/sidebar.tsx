import styled from "styled-components"

type SidebarProps = {
  backgroundcolor?: string
  color?: string
}

const Sidebar = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  background: hsl(${props => props.backgroundcolor || "0, 0%, 98%"});
  color: hsl(${props => props.color || "0, 0%, 0%"});
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    align-items: normal;
  }
  @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
    position: fixed;
    height: 100%;
    width: ${props => props.theme.sidebar};
  }
`

export const Colophon = styled.div`
  padding: 0 1.25rem;

  > * ~ * {
    margin-top: 1rem;
  }

  > h1 {
    max-width: 25rem;
  }
  > p {
    max-width: 25rem;
  }

  > .gatsby-image-wrapper {
    max-width: 400px;

    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 55%;
      margin-top: -30%;
    }

    @media (min-width: ${props => props.theme.breakpoints.tabletHorizontal}) {
      margin-left: 0;
      margin-top: 0;
    }
  }

  > p::first-letter {
    text-transform: capitalize;
  }
`

export default Sidebar
