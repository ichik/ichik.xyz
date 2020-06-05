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
    tablet: "600px",
    tabletHorizontal: "900px",
    desktop: "1200px",
    hd: "1800px",
  },
  fontSizes: {
    root: "16px",
    h1: "2.074rem",
    h2: "2.074rem",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  sidebar: "320px",
}

export default theme
