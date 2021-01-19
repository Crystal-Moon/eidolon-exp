
import { Component } from 'react';
import db from '../util/db';

// style
import '../assets/css/compare.css';

// component
import Compare from './Compare';
import CompareGral from './CompareGral';

class SectionCompare extends Component {
/*  constructor(){
    super();
    this.state = {
      compare_gral: [],
      user_gral: []
    }
  }

  componentDidMount(){
    db.getCompareGral().then(compare_gral=>{
      //console.log('el compare_gral', compare_gral)
      this.setState({ compare_gral })
    })
    db.getCrystalsUser().then(user_gral=>{ 
      console.log('el user_gral', user_gral)
      this.setState({ user_gral })
    })
    
  }
*/
  render() {
    return (
      <section className="SectionCompare bg-image">
        <div className="container-xl bg-image-pa">
          <div className="bg-image-pa justify-content-center row">
            <div className="bg-image-pa col-12">
              <Compare />
            </div>
          </div>
          <div className="bg-image-pa justify-content-center row">
            <div className="bg-image-pa col-12">
              <CompareGral />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionCompare;
