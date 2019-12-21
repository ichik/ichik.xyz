import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

type Props = {} & typeof defaultProps

const defaultProps = {
  title: "",
  desc: "",
  banner: "",
  pathname: "",
  node: {
    modifiedTime: "",
    birthTime: "",
  },
}

const Meta = ({ title, desc, banner, pathname, node }: Props) => {
  const { site } = useStaticQuery(query)
  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      siteLanguage,
      ogLanguage,
      author,
    },
  } = site
  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    // image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
  }
  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
    </Helmet>
  )
}

export default Meta

Meta.defaultProps = defaultProps

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
