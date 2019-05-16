import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <div className="container">
      <div className="row">
        <div className="col-6">Gatsby Docs</div>
        <div className="col-6">Gatsby Projects</div>
      </div>
    </div>

    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/images/react">Go to React Images</Link>
    <br />
    <Link to="/images/india">Go to India Images</Link>
  </Layout>
)

export default SecondPage
