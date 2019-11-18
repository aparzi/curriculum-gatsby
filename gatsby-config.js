module.exports = {
  siteMetadata: {
    title: `angeloparziale.it`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl: `https://aparzialecv.netlify.com/it`,
    author: `Aparziale`,
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
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "0s5dww7k",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/404", "/*/404"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
                context {
                  alternateLinks {
                    language
                    path
                  }
                }
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
              links:
                edge.node.context.alternateLinks &&
                edge.node.context.alternateLinks.map(link => ({
                  lang: link.language,
                  url: site.siteMetadata.siteUrl + link.path,
                })),
            }
          }),
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
