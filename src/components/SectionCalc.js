import React from "react";
import Calculator from "./Calculator";
import Needs from "./Needs";

class SectionCalc extends React.Component {
  render() {
    return (
      <section
        className="SectionCalc row bg-image"
        style={{
          display: "none"
        }}
      >
        <div className="bg-image-pa row justify-content-center">
          <div className="bg-image-pa col-12 justify-content-center row">
            <div className="bg-image-pa container-content container-lg justify-content-around row">
              <Calculator></Calculator>
              <Needs></Needs>
              {}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionCalc;
