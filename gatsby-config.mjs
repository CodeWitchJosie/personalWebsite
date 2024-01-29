import { createRequire } from "module"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)

const config = {
  siteMetadata: {
    title: 'Code Witch',
    description:
      'Jocelyn Irwin - Code Witch | Solving real-world problems through intuitive interfaces, clean code, and collaborative team cultures. Explore my projects and expertise in web development, React, and more.',
    canonical: 'https://www.jocelynirwin.com',
    keywords:
      'Portfolio, Software Engineering, Web Development, React, TypeScript, Agile Methodologies, User Interface Design, User Experience, Developer Experience, Clean Code Practices, Prototyping, Lean Product Development, Technical Manager, Women in Computing',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-S5Q1TY8B2P', // Google Analytics ID
          '257417247',
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: join(__dirname, `src`, `images`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: join(__dirname, `src`, `data`),
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway\:300,400,700`, `Lato\:300,400,700,300i,400i`, `Allura\:400`],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-transformer-remark'
  ],
  flags: {
    // DEV_SSR: true,
  },
};
export default config;
