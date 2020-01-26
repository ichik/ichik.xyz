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
      ogLanguage,
      author,
      twitter,
    },
  } = site
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ""}`,
  }
  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:locale" content={ogLanguage} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={seo.title} />}
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
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
        ogLanguage
        author
        twitter
      }
    }
  }
`
