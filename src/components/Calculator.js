
import { Component } from 'react';

import SpecialInput from './SpecialInput';

class Calculator extends Component {
  render() {
    return (
      <div className="col-lg-5 container-blur">
        <div className="card card-calc text-light">
          <div className="card-header text-center">
            <h5 className="card-title">Calculadora</h5>
            <h6 className="card-subtitle mb-2 small">
              Calcula cuantos cristales necesitas
            </h6>
          </div>
          <div className="card-body">
            <p>
              Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)
            </p>
            <form>
              <div className="row g-3 mb-2 align-items-center">
                <div className="col-auto">
                  <label htmlFor="lvl" className="col-form-label">
                    Nivel del Eidolon:
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="number"
                    id="lvl"
                    name="lvl"
                    className="form-control input-dark"
                    placeholder={88}
                  />
                </div>
              </div>
              <div className="row g-3 mb-2 align-items-center">
                <div className="col-auto">
                  <label htmlFor="percent" className="col-form-label">
                    Porcentaje del nivel:
                    <span id="passwordHelpInline" className="small"> (opcional)</span>
                  </label>
                </div>
                <div className="col-sm-5">
                  <SpecialInput />
                </div>
              </div>
              <div className="row g-3 mb-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="lvl-to" className="col-form-label">
                    Nivel a alcanzar:
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="number"
                    id="lvl-to"
                    name="lvl-to"
                    className="form-control input-dark"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" type="button">
                  Calcular
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
