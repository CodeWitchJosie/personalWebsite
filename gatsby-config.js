const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'Code Witch',
    description: 'Josie is a professional Code Witch. She loves JavaScript, CSS, and discussing usability. Go Hokies!',
    canonical: 'https://www.jocelynirwin.com',
    keywords: 'Developer,React,JavaScript,TypeScript,Female Engineer,Tech Lead,Manager',
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-111111111-1',
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
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
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `Raleway\:300,400,700`,
            `Lato\:300,400,700,300i,400i`,
            `Allura\:400`
        ],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    `gatsby-background-image`,
  ],
};
