interface ThemeShape {
  breakpoints: {
    [key: string]: string
  }
  fontSizes: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  sidebar: string
}

const theme: ThemeShape = {
  breakpoints: {
    tablet: "601px",
    tabletVertical: "901px",
    desktop: "1200px",
    hd: "1800px",
  },
  fontSizes: {
    root: "16px",
    h1: "2.488rem",
    h2: "2.074rem",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebar: "320px",
}

export default theme
