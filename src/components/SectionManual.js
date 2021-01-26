
// style
import '../assets/css/manual.css';

// lang
import TXT from '../lang/manual.json';

function SectionManual(props) {
  const lang = props.lang;
  return (
    <section className="SectionManual row bg-image">
      <div className="bg-image-pa container-content container-md justify-content-lg-start justify-content-md-center">

      <h1 className="col-md-8">{ TXT.welcome[lang] }</h1>
      <h4 className="col-md-8">{ TXT.h4[lang] } 😗</h4>
      <h6 className="col-md-8">{ TXT.h6[lang] }</h6>

       <div className="col-lg-10 col-md-11 col-sm-12 container-blur">
        <div className="card card-manual text-dark">
          <div className="card-header">
            <h5 className="card-title">📟 { TXT.title1[lang] }</h5>
          </div>
          <div className="card-body">
            <p>{ TXT.p1_1[lang] }</p>
            <img className="col-lg-6 col-md-6 col-sm-11 col-xl-5 img-fluid mb-3" src="https://imgur.com/0wwehDR.png" alt="tuto1_lvl" title="form_level"/>
            <p>{ TXT.p1_2[lang] }</p>
            <p>{ TXT.p1_3[lang] }</p>
            <p>{ TXT.p1_4[lang] }</p>
            <img className="col-lg-6 col-md-6 col-sm-11 col-xl-5 img-fluid mb-3" src="https://imgur.com/qNHZS41.png" alt="tuto2_btn" title="btns_calc"/>
            <p>{ TXT.p1_5[lang] } &#x2699;</p>
          </div>
        </div>
       </div>

       <div className="col-lg-10 col-md-11 col-sm-12 container-blur">
        <div className="card card-manual text-dark">
          <div className="card-header">
            <h5 className="card-title">🔄 { TXT.title2[lang] }</h5>
          </div>
          <div className="card-body">
            <p>{ TXT.p2_1[lang] }</p>
            <p>{ TXT.p2_2[lang] }</p>
            <img className="col-lg-6 col-md-6 col-sm-11 col-xl-5 img-fluid mb-3" src="https://imgur.com/HerFHkG.png" alt="tuto_compare" title="tuto_compare"></img>
          </div>
        </div>
       </div>

      </div>
    </section>
  );
}

export default SectionManual;
