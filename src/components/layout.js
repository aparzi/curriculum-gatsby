/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
                  menuLinks {
                      name
                      link
                  }
              }
          }
      }
  `)

  return (
    <>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <div>
        <main>{children}</main>
        {/*<footer>*/}
        {/*  <span style={{color: 'white'}}>© {new Date().getFullYear()}, Built with{` `}</span>*/}
        {/*  <a href="https://www.gatsbyjs.org" target='_blank' rel="noopener noreferrer">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
