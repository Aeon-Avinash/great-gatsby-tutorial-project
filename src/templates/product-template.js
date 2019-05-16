import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/ui/button"

const ProductTemplate = ({ data }) => {
  const { title, price, description, image } = data.contentfulProduct
  return (
    <Layout>
      <SEO title="Product" keywords={[`gatsby`, `application`, `react`]} />
      <div style={{ maxWidth: "100%" }}>
        <Img fluid={image.fluid} alt={title} />
      </div>
      <h1>
        {title}{" "}
        <span style={{ color: "grey", marginLeft: "2rem" }}>${price}</span>
      </h1>
      <p>{description.description}</p>
      <hr />
      <Button>
        <Link to="/products/">Back to all products</Link>
      </Button>
      <Button>
        <Link to="/">Go to home</Link>
      </Button>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      id
      title
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default ProductTemplate
