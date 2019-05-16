import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ReactImages = ({ data }) => {
  const images = data.getImages.edges
  return (
    <Layout>
      <SEO title="ReactImages" />

      <div className="container">
        <div className="row">
          {images.map(({ node }) => (
            <div
              className="col-sm-6"
              style={{ marginBottom: "20px" }}
              key={node.name}
            >
              <Img fluid={node.childImageSharp.fluid} alt={node.name} />
            </div>
          ))}
        </div>
      </div>

      <Link to="/">Go back to the homepage</Link>
      <br />
      <Link to="/page-2/">Visit Page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    getImages: allFile(filter: { relativeDirectory: { eq: "react_images" } }) {
      totalCount
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ReactImages
