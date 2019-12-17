interface ThemeShape {
  breakpoints: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: {
    mobile: "601px",
    tablet: "901px",
    desktop: "1200px",
    hd: "1800px",
  },
}

export default theme
