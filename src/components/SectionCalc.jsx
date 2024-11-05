
// style
import '../assets/css/calculator.css';

// component
import Calculator from './Calculator';
import Needs from './Needs';

function SectionCalc(props){
  return (
      <section className="SectionCalc align-items-start bg-image row">
        
          <div className="bg-image-pa col-12 justify-content-center row">
            <div className="bg-image-pa container-content container-lg justify-content-around row">
              <Calculator lang={props.lang}/>
              <Needs lang={props.lang}/>
            </div>
          </div>
       
      </section>
    );
}

export default SectionCalc;
