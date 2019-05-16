import React from "react"
import "./section.css"

const section = () => {
  return (
    <section className="section">
      <div className="conatiner">
        <div className="row">
          <div className="col">
            <h2 className="section-title">Discover Gatsby</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">Static</div>
          <div className="col-sm-4">React</div>
          <div className="col-sm-4">Gatsby</div>
        </div>
      </div>
    </section>
  )
}

export default section
