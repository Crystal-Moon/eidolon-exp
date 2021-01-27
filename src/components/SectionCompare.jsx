
// style
import '../assets/css/compare.css';

// component
import Compare from './Compare';
import CompareGral from './CompareGral';

function SectionCompare(props) {
  return (
      <section className="SectionCompare bg-image">
        <div className="container-xl bg-image-pa">
          <div className="bg-image-pa justify-content-center row">
            <div className="bg-image-pa col-12">
              <Compare lang={props.lang}/>
            </div>
          </div>
          <div className="bg-image-pa justify-content-center row">
            <div className="bg-image-pa col-12">
              <CompareGral lang={props.lang}/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default SectionCompare;
