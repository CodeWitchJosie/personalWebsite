const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Code Witch',
    description: "Josie is a professional Code Witch. She loves JavaScript, CSS, and discussing usability. Go Hokies!",
    canonical: 'https://www.jocelynirwin.com',
    keywords: 'Developer,React,JavaScript,Female Engineer,Tech Lead, Manager'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass")
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jocelyn-irwin-code-witch`,
        short_name: `josie`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`, `300italic`, `400italic`]
          },
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    `gatsby-background-image`
  ]
};
