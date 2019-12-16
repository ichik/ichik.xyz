module.exports = {
  siteMetadata: {
    title: `Portfolio of Vadim Mikhnov`,
    description: `Select case studies.`,
    author: `@ichikumer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-normalize-paths`,
            options: {
              pathFields: ["cover"],
            },
          },
        ],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
