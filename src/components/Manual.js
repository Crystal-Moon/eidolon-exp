
import { Component } from 'react';

// lang
import LANG from '../lang/manual.json';

// style
import '../assets/css/manual.css';

function Manual(props) {
//  render() {
    const lang = props.lang;
    return (
      <div className="col-lg-10 col-md-11 col-sm-12 container-blur">
        <div className="card card-manual text-dark">
          <div className="card-header">
            <h5 className="card-title">Calculadora</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Calcula cuantos cristales necesitas
            </h6>
          </div>
          <div className="card-body">
            <p>
              Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)
            </p>
            <p>Distintos p con explcaciones</p>
          </div>
        </div>
      </div>
    );
//  }
}

export default Manual;
