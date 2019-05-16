import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Ind_Image_2 = () => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "india_images/Goa-Tourism.jpg" }) {
          name
          relativePath
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div>
          <Img fixed={data.file.childImageSharp.fixed} alt={data.file.name} />
        </div>
      )
    }}
  />
)

export default Ind_Image_2
