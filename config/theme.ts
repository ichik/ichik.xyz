interface ThemeShape {
  breakpoints: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: {
    tablet: "601px",
    tabletVertical: "901px",
    desktop: "1200px",
    hd: "1800px",
  },
}

export default theme
