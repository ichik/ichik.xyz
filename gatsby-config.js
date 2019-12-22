module.exports = {
  siteMetadata: {
    siteLanguage: `en`,
    siteUrl: `https://ichik.xyz`,
    title: `Portfolio of Vadim Mikhnov`,
    description: `Select case studies.`,
    author: `Vadim Mikhnov`,
    intro: `Clarity and meaning for products and services with tools ranging from
micro-animations to smart color palette choices.`,
    email: `hi@ichik.xyz`,
    linkedin: `ichik`,
    github: `ichik`,
    dribbble: `ichik`,
    ogLanguage: `en_US`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [`gatsby-remark-unwrap-images`, `gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: `transparent`,
              linkImagesToOriginal: false,
              maxWidth: 2500,
              quality: 90,
              withWebp: true,
              tracedSVG: true,
              loading: "lazy",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        backgroundColor: `transparent`,
        linkImagesToOriginal: false,
        maxWidth: 2500,
        quality: 90,
        withWebp: true,
        tracedSVG: true,
        loading: "lazy",
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ichik.xyz — Vadim Mikhnov's Portfolio`,
        short_name: `ichik.xyz`,
        start_url: `/`,
        icon: `src/images/site-icon.png`,
        icons: [
          {
            src: `assets/favicon.ico`,
            sizes: `16x16`,
          },
          {
            src: `assets/icon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `assets/icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
