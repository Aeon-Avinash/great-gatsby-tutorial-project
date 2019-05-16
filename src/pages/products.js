import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/ui/button"

const products = ({ data }) => {
  const items = data.products.edges
  return (
    <Layout>
      <SEO title="Products" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Our Products</h1>
      <div className="product-list">
        {items.map(({ node: product }) => (
          <div key={product.id} style={{ padding: "1rem", margin: "1rem 0" }}>
            <Img fixed={product.image.fixed} alt={product.title} />
            <Link to={`/products/${product.title}/`}>
              <h3 style={{ marginBottom: "0.5rem" }}>
                {product.title}{" "}
                <span style={{ color: "grey", marginLeft: "2rem" }}>
                  ${product.price}
                </span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <Button>
        <Link to="/">Back to home</Link>
      </Button>
      <Button>
        <Link to="/page-2/">Go to page 2</Link>
      </Button>
    </Layout>
  )
}

export const query = graphql`
  query {
    products: allContentfulProduct {
      totalCount
      edges {
        node {
          id
          title
          price
          image {
            fixed(width: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default products
