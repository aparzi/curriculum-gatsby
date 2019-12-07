import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import About from "./about"
import Skills from "./skills"
import Footer from "./footer"
import ReactTooltip from 'react-tooltip'

const IndexPage = props => {
  const { t, i18n } = useTranslation("home")
  return (
    <Layout alternateLink={props.alternateLinks}>
      <SEO title="Home" />
      <About/>
      <Skills/>
      <Footer/>
      <ReactTooltip />
    </Layout>
  )
}

export const query = graphql`
  query Homepage($language: String) {
    allSanityShop {
      edges {
        node {
          slug {
            translate(language: $language)
          }
          name {
            translate(language: $language)
          }
        }
      }
    }
  }
`

export default IndexPage
