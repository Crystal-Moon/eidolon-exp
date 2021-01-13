
import { Component } from 'react';

import Item from "./Item";

class CompareGral extends Component {
  render() {
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
                  <tr>
                    <td>
                      <span className="badge">10 x</span>
                    </td>
                    <td>
                      <Item item={{}}></Item>
                    </td>
                    <td>
                      <b style={{color:'white'}}>=</b>
                    </td>
                    <td>
                      <span className="badge">100 x</span>
                    </td>
                    <td>
                      <Item item={{}}></Item>
                    </td>
                  </tr>
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
