import React from "react";
import Manual from "./Manual";

class SectionManual extends React.Component {
  render() {
    return (
      <section
        className="SectionManual row bg-image"
        style={{
          display: "none"
        }}
      >
        <div className="bg-image-pa container-content container-md justify-content-lg-start justify-content-md-center">
          <Manual></Manual>
        </div>
      </section>
    );
  }
}

export default SectionManual;
