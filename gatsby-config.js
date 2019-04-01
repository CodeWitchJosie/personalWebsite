const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Code Witch :: Jocelyn Irwin',
    name: "hello world",
    tagline: "with typescript"
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
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ]
};
