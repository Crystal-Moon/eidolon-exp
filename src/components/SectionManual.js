
import { Component } from 'react';

// style
import '../assets/css/manual.css';

// component
import Manual from './Manual';

function SectionManual(props) {
//  render() {
    return (
      <section className="SectionManual row bg-image">
        <div className="bg-image-pa container-content container-md justify-content-lg-start justify-content-md-center">
          <Manual lang={props.lang}/>
        </div>
      </section>
    );
//  }
}

export default SectionManual;
