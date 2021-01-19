
import { Component } from 'react';

// style
import '../assets/css/manual.css';

// component
import Manual from './Manual';

class SectionManual extends Component {
  render() {
    return (
      <section className="SectionManual row bg-image">
        <div className="bg-image-pa container-content container-md justify-content-lg-start justify-content-md-center">
          <Manual></Manual>
        </div>
      </section>
    );
  }
}

export default SectionManual;
