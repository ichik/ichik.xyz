import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

const Meta = () => {
  const { site } = useStaticQuery(query)
  return <Helmet title={site.siteMetadata.defaultTitle}></Helmet>
}

export default Meta

const query = graphql`
  query Meta {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        siteLanguage
        ogLanguage
        author
      }
    }
  }
`
