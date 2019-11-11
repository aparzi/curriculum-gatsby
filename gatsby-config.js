module.exports = {
  siteMetadata: {
    title: `angeloparziale.it`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `AParziale`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Chi sono',
        link: '#about'
      },
      {
        name: 'Skills',
        link: '#skills'
      },
      {
        name: 'Lavori',
        link: '#works'
      },
      {
        name: 'Istruzione',
        link: '#education'
      },
      {
        name: 'Contatti',
        link: '#contact-form'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
