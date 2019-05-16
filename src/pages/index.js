import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../components/ui/button"
import { FaBeer } from "react-icons/fa"
import SiteInfo from "../components/siteInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SiteInfo />
    <h1>Hi people</h1>
    <h3>
      <Link to="/products/">Explore our Products</Link>
    </h3>
    <h3>and pair it together</h3>
    <h3>
      with some chilled{" "}
      <FaBeer
        style={{ color: "goldenrod", fontSize: "2rem", lineHeight: "-100%" }}
      />
    </h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button>
      <Link to="/page-2/">Go to page 2</Link>
    </Button>
    <Button>
      <Link to="/images/react">Go to React Images</Link>
    </Button>
    <Button>
      <Link to="/images/india">Go to India Images</Link>
    </Button>
  </Layout>
)

export default IndexPage
