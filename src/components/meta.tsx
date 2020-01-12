import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Helmet from "react-helmet"

type Props = {} & typeof defaultProps

const defaultProps = {
  title: "",
  description: "",
  banner: "",
  pathname: "",
  node: {
    modifiedTime: "",
    birthTime: "",
  },
}

const Meta = ({ title, banner, pathname, description }: Props) => {
  const { site } = useStaticQuery(query)
  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteLanguage,
      author,
    },
  } = site
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
  }
  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
      <meta name="image" content={seo.image} />
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
        defaultBanner: banner
        defaultDescription: description
        siteLanguage
        author
      }
    }
  }
`
