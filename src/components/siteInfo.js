import React from "react"

import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    getSitedata: site {
      siteMetadata {
        title
        description
        author
        info
      }
    }
  }
`

const siteInfo = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        const { title, info, author } = data.getSitedata.siteMetadata
        return (
          <div style={{ margin: "20px auto" }}>
            <h3>{title}</h3>
            <h5>
              <em>{info}</em>
              &nbsp; - &nbsp;
              <strong>{author}</strong>
            </h5>
          </div>
        )
      }}
    />
  )
}

export default siteInfo
