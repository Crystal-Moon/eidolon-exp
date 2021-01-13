
import { Component } from 'react';
import { Event } from '../util/Event';

import SpecialInput from './SpecialInput';

class Calculator extends Component {
  constructor(){
    super();
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerInput = this.handlerInput.bind(this);
    this.setPercernt = this.setPercernt.bind(this);
    this.state = {
      lvl: '',
      percent: '',
      lvlTo: ''
    }
    Event.on('percent', this.setPercernt);
  }

  setPercernt({ percent }){
    this.setState({ percent })
  }

  handlerInput(e){
    let name = e.target.name;
    let value = (e.target.validity.valid) ? e.target.value : this.state[name];

    //console.log('el name', name, 'el value', value);

    this.setState({ [name]: value })
  }

  handlerSubmit(e){
    e.preventDefault();
    //console.log('el target en submit', e.target);
    console.log('el json', this.state)

  }

  render() {
    return (
      <div className="col-lg-5 container-blur">
        <div className="card card-calc text-light">
          <div data-lang="es" className="card-header text-center">
            <h5 className="card-title">Calculadora</h5>
            <h6 className="card-subtitle mb-2 small">Calcula cuántos cristales necesitas</h6>
          </div>
          <div data-lang="en" className="card-header text-center">
            <h5 className="card-title">Calculator</h5>
            <h6 className="card-subtitle mb-2 small">Calculate how many crystals you need</h6>
          </div>
          <div data-lang="fr" className="card-header text-center">
            <h5 className="card-title">Calculatrice</h5>
            <h6 className="card-subtitle mb-2 small">Calculez le nombre de cristaux dont vous avez besoin</h6>
          </div>
          <div data-lang="de" className="card-header text-center">
            <h5 className="card-title">Taschenrechner</h5>
            <h6 className="card-subtitle mb-2 small">Berechnen Sie, wie viele Kristalle Sie benötigen</h6>
          </div>
          <div data-lang="br" className="card-header text-center">
            <h5 className="card-title">Calculadora</h5>
            <h6 className="card-subtitle mb-2 small">Calcule quantos cristais você precisa</h6>
          </div>
          <div className="card-body">
            <p data-lang="es">Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)</p>
            <p data-lang="en">Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)</p>
            <p data-lang="fr">Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)</p>
            <p data-lang="de">Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)</p>
            <p data-lang="br">Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)</p>
            <form onSubmit={this.handlerSubmit}>
              <div className="row g-3 mb-2 align-items-center">
                <div className="col-auto">
                  <label htmlFor="lvl" className="col-form-label">
                    <span data-lang="es">Nivel del Eidolon:</span>
                    <span data-lang="en">Nivel del Eidolon:</span>
                    <span data-lang="de">Nivel del Eidolon:</span>
                    <span data-lang="fr">Nivel del Eidolon:</span>
                    <span data-lang="br">Nivel del Eidolon:</span>
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="tel"
                    pattern="[0-9]{0,2}"
                    id="lvl"
                    name="lvl"
                    className="form-control input-dark"
                    placeholder={60}
                    value={this.state.lvl}
                    onChange={this.handlerInput}
                  />
                </div>
              </div>
              <div className="row g-3 mb-2 align-items-center">
                <div className="col-auto">
                  <label htmlFor="percent" className="col-form-label">
                    <span data-lang="es">Porcentaje del nivel:
                      <span id="passwordHelpInline" className="small"> (opcional)</span>
                    </span>
                    <span data-lang="en">Percentage of level:
                      <span id="passwordHelpInline" className="small"> (optional)</span>
                    </span>
                    <span data-lang="fr">Pourcentage du niveau:
                      <span id="passwordHelpInline" className="small"> (optionnel)</span>
                    </span>
                    <span data-lang="de">Prozentsatz des Niveaus:
                      <span id="passwordHelpInline" className="small"> (freiwillig)</span>
                    </span>
                    <span data-lang="br">Porcentagem de nível:
                      <span id="passwordHelpInline" className="small"> (opcional)</span>
                    </span>
                  </label>
                </div>
                <div className="col-sm-5">
                  <SpecialInput />
                </div>
              </div>
              <div className="row g-3 mb-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="lvlTo" className="col-form-label">
                    <span data-lang="es">Nivel a alcanzar:</span>
                    <span data-lang="en">Level to reach:</span>
                    <span data-lang="fr">Niveau à atteindre:</span>
                    <span data-lang="de">Level zu erreichen:</span>
                    <span data-lang="br">Nível para alcançar:</span>
                  </label>
                </div>
                <div className="col-sm-3">
                  <input
                    type="tel"
                    pattern="[0-9]{0,2}"
                    id="lvlTo"
                    name="lvlTo"
                    className="form-control input-dark"
                    placeholder={99}
                    value={this.state.lvlTo}
                    onChange={this.handlerInput}
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  <span data-lang="es">Calcular</span>
                  <span data-lang="en">Calculate</span>
                  <span data-lang="fr">Calculer</span>
                  <span data-lang="de">Berechnen</span>
                  <span data-lang="br">Calcular</span>
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
