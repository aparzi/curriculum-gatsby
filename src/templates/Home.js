import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Skills from "./skills"
import Footer from "./footer"
import ReactTooltip from 'react-tooltip'
import Istruzione from "./istruzione"
import Instagram from "./instagram"
import WorkExperience from "./workExperience"

const IndexPage = props => {
  return (
    <Layout alternateLink={props.alternateLinks}>
      <SEO title="Home" />
      <About/>
      <Skills/>
      <WorkExperience/>
      <Istruzione/>
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
