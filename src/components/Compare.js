
import { Component } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';

// component
import ComboboxItems from "./ComboboxItems";
import IsEqualsTo from "./IsEqualsTo";
import United from "./United";

class Compare extends Component {
  constructor(props){
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    //this.setItemSelected = this.setItemSelected.bind(this);
    this.state = {
      items: [],
      cant: 0,
      unit: 'unit',
      item: 10
    }

    //Event.on('selected', this.setItemSelected);
  }

  componentDidMount(){
    this.setState({ items: this.props.items })
    console.log('los items q llegan a compare', this.props)

    db.getCrystals().then(items=>{ 
      //console.log('el user_gral', items)
      this.setState({ items })
    })

  }

  /* sobra y no se porq :/ funciona sin esto
  setItemSelected({ item, lado }){
    this.setState({ item: item.id })
  }
  */

  handlerChange(e){
    let name=e.target.name;
    let value=e.target.value;

    console.log('el name y value', name, value);
    this.setState({ [name]:value })

  }

  render() {
    //const { items=[] } = this.props;
    return (
      <div className="Compare container-blur">
        <div className="card card-compare">
          <div className="card-header text-center">
            <h5 data-lang="es" className="card-title">
              Comparar
            </h5>
            <h5 data-lang="en" className="card-title">
              Comparar
            </h5>
            <h5 data-lang="fr" className="card-title">
              Comparar
            </h5>
            <h5 data-lang="de" className="card-title">
              Comparar
            </h5>
            <h5 data-lang="br" className="card-title">
              Comparar
            </h5>
            <h6 data-lang="es" className="card-subtitle mb-2 small">
              Puedes calcular equivalencias entre cristales
            </h6>
            <h6 data-lang="en" className="card-subtitle mb-2 small">
              Puedes calcular equivalencias entre cristales
            </h6>
            <h6 data-lang="fr" className="card-subtitle mb-2 small">
              Puedes calcular equivalencias entre cristales
            </h6>
            <h6 data-lang="de" className="card-subtitle mb-2 small">
              Puedes calcular equivalencias entre cristales
            </h6>
            <h6 data-lang="br" className="card-subtitle mb-2 small">
              Puedes calcular equivalencias entre cristales
            </h6>
          </div>
          <div className="card-body">
            <p>
              Indica el nivel actual del Eidolon y el nivel a cual quieres
              llegar para saber cuales y cuantos cristales necesitas (emoji)
            </p>
            <p>Distintos p con explcaciones</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control col-md-2 col-sm-2"
                    name="cant"
                    onChange={this.handlerChange}
                  />
                  <div className="col-md-3 col-sm-3">
                    <select
                      className="form-select rounded-0 h-100"
                      id="inputGroupSelect01"
                      name="unit"
                      onChange={this.handlerChange}
                    >
                      <option value="unit" data-lang="es">Unidades</option>
                      <option value="unit" data-lang="en">Units</option>
                      <option value="unit" data-lang="fr">Unités</option>
                      <option value="unit" data-lang="de">Einheiten</option>
                      <option value="unit" data-lang="br">Unidades</option>
                      <option value="pack" selected>Packs</option>
                    </select>
                  </div>
                  <div className="col-md-7 col-sm-7 btn-group">
                    <ComboboxItems items={this.state.items} lado="A"/>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <IsEqualsTo></IsEqualsTo>
              </div>
              <div className="col-md-5">
                <div className="input-group">
                  <div className="input-group-text col-md-4 col-sm-4" style={{backgroundColor:'white'}}>
                    <United />
                  </div>
                  <div className="col-md-8 col-sm-8 btn-group">
                    <ComboboxItems items={this.state.items} lado="B"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compare;
