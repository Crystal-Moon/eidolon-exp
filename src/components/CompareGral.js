
import { Component } from 'react';
import db from '../util/db';

// lang
import LANG from '../lang/compare.json';

// components
import Item from "./Item";

class CompareGral extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    db.getCompareGral().then(items=>{
      //console.log('el items', items)
      this.setState({ items })
    })
  }

  render(){
    //const { items=[] } = props;
    const lang = this.props.lang;
    return (
      <div className="CompareGral container-blur">
        <div className="card card-compare">
          <div className="card-header text-center">
            <h5 className="card-title">Generales</h5>
          </div>
          <div className="card-body">
            <p>Aqui tienes algunas equivalencias generales (emoji) (?</p>
            <div className="table-responsive-md" style={{backgroundColor: 'rgb(14,18,19,0.9)'}}>
              <table className="table">
                <thead>
                  <tr>
                    <td data-lang="es" colSpan={5} className="text-muted small">
                      *Las cantidades se expresan en unidades
                    </td>
                    <td data-lang="en" colSpan={5} className="text-muted small">
                      *Quantities are expressed in units
                    </td>
                    <td data-lang="fr" colSpan={5} className="text-muted small">
                      *Les quantités sont exprimées en unités
                    </td>
                    <td data-lang="de" colSpan={5} className="text-muted small">
                      *Mengen werden in Einheiten ausgedrückt
                    </td>
                    <td data-lang="br" colSpan={5} className="text-muted small">
                      *Quantidades são expressas em unidades
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map((i,k)=>
                  <tr key={k}>
                    <td>
                      <span className="badge">{i.cant_a} x</span>
                    </td>
                    <td>
                      <Item item={i.item_a} lang={lang} />
                    </td>
                    <td>
                      <b style={{color:'white'}}>=</b>
                    </td>
                    <td>
                      <span className="badge">{i.cant_b} x</span>
                    </td>
                    <td>
                      <Item item={i.item_b} lang={lang} />
                    </td>
                  </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompareGral;
