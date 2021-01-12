import React from "react";
import Compare from "./Compare";
import CompareGral from "./CompareGral";

class SectionCompare extends React.Component {
  render() {
    return (
      <section
        className="SectionCompare bg-image"
        style={{
          display: "none"
        }}
      >
        <div className="container-xl bg-image-pa">
          <div className="bg-image-pa justify-content-center row">
            <div className="bg-image-pa col-12">
              <Compare></Compare>
              {}
            </div>
          </div>
          <div className="bg-image-pa justify-content-center row">
            <div className="bg-image-pa col-12">
              <CompareGral></CompareGral>
              {}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionCompare;
