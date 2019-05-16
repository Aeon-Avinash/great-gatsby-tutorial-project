import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import IndImgGoa1 from "../../components/Imgs/Ind_Image_1"
import IndImgGoa2 from "../../components/Imgs/Ind_Image_2"

const IndiaImages = () => {
  return (
    <Layout>
      <SEO title="IndiaImages" />

      <div className="container">
        <div className="row">
          <div className="col-6" style={{ margin: "20px", maxWidth: "800px" }}>
            <IndImgGoa1 />
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "20px", maxWidth: "800px" }}>
            <IndImgGoa2 />
          </div>
        </div>
      </div>

      <Link to="/">Go back to the homepage</Link>
      <br />
      <Link to="/page-2/">Visit Page 2</Link>
    </Layout>
  )
}

export default IndiaImages
