
import { Component } from 'react';

// style
import '../assets/css/calculator.css';

// component
import Calculator from './Calculator';
import Needs from './Needs';

class SectionCalc extends Component {
  render() {
    return (
      <section className="SectionCalc row bg-image">
        <div className="bg-image-pa row justify-content-center">
          <div className="bg-image-pa col-12 justify-content-center row">
            <div className="bg-image-pa container-content container-lg justify-content-around row">
              <Calculator></Calculator>
              <Needs></Needs>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionCalc;
