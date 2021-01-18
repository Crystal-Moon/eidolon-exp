
import { Component } from 'react';
import { Event } from '../util/Event';
import calculator from '../util/calculator';

// component
import United from "./United";
import Item from "./Item";

class Needs extends Component {
  constructor(){
    super();
    this.handlerBtn = this.handlerBtn.bind(this);
    this.reCalculate = this.reCalculate.bind(this);
    this.needConst = this.needConst.bind(this);
    this.state = {
      need: [],
      xpEido: 0,
      xpNeed: 0,
      needMore: 0,
      limits: { 
      /*  tag: 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0 */
       },
      change: {}
    }

    Event.on('needs', this.needConst);

  }

  needConst({ need, xpEido, xpNeed, limits }){
    //let need = []
    //for (let k in N){
    //  need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    //}
    console.log('lo que llega en needCons', { need, limits })
    this.setState({ need, xpNeed, xpEido, limits })
  }

  handlerBtn({ target }){
    let action = parseInt(target.dataset.action);
    let id = String(target.dataset.id);

    let limits = this.state.limits;
    console.log('el limits de state en btn', limits)
 
    let change = { id, cant: limits[id] + action }
    limits[id] += action
    

    console.log('el change en btn', change)
    console.log('el limits de state en btn', limits)
    this.setState({ change })
    this.reCalculate({ limits, id, change })

  }

  async reCalculate({ limits, id, change }){


    let obj = await calculator({ 
      xpEido: this.state.xpEido, 
      xpNeed: this.state.xpNeed, 
      limits, toq:id,
      change
    })
    //this.reCalculate({ limits })

    //console.log('el need de state', this.state.need)
    console.log('el obj  de calc', obj)

    let need = [], limits1 = {}
    let N = obj.need;
    for (let k in N){
      limits1[k]=N[k].cant;
      console.log('el limits en cada vuelta', limits1)
      need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    }
    need.sort((a,b)=>b.id - a.id)

    //let { ...limits1 } = limits
    console.log('el limit que se seta', limits1)
    this.setState({ limits: limits1, need })


  }

  render() {
    return (
      <div className="col-lg-5 container-blur">
        <div className="card card-calc text-light">
          <div className="card-header text-center">
            <h5 data-lang="es" className="card-title">Cristales necesarios</h5>
            <h5 data-lang="en" className="card-title">Cristales necesarios</h5>
            <h5 data-lang="fr" className="card-title">Cristales necesarios</h5>
            <h5 data-lang="de" className="card-title">Cristales necesarios</h5>
            <h5 data-lang="br" className="card-title">Cristales necesarios</h5>
            <h6 data-lang="es" className="card-subtitle mb-2 small"> Necesitarás todos los siguientes items para llegar al nivel deseado</h6>
            <h6 data-lang="en" className="card-subtitle mb-2 small"> Necesitarás todos los siguientes items para llegar al nivel deseado</h6>
            <h6 data-lang="fr" className="card-subtitle mb-2 small"> Necesitarás todos los siguientes items para llegar al nivel deseado</h6>
            <h6 data-lang="de" className="card-subtitle mb-2 small"> Necesitarás todos los siguientes items para llegar al nivel deseado</h6>
            <h6 data-lang="br" className="card-subtitle mb-2 small"> Necesitarás todos los siguientes items para llegar al nivel deseado</h6>
          </div>
          <div className="card-body">
          { this.state.need.length?
            <div>
              <p data-lang="es">Aumenta o disminuye según lo que ya tengas en tu inventario, el sistema calculará nuevamente según tus preferencias.</p>
              <p data-lang="en">Aumenta o disminuye según lo que ya tengas en tu inventario, el sistema calculará nuevamente según tus preferencias.</p>
              <p data-lang="de">Aumenta o disminuye según lo que ya tengas en tu inventario, el sistema calculará nuevamente según tus preferencias.</p>
              <p data-lang="fr">Aumenta o disminuye según lo que ya tengas en tu inventario, el sistema calculará nuevamente según tus preferencias.</p>
              <p data-lang="br">Aumenta o disminuye según lo que ya tengas en tu inventario, el sistema calculará nuevamente según tus preferencias.</p>
            </div>
            :
            <div>
              <p data-lang="es">Aquí verás los items que necesitas para subir de nivel tu Eidolon (emoji)</p>
              <p data-lang="en">Aquí verás los items que necesitas para subir de nivel tu Eidolon (emoji)</p>
              <p data-lang="de">Aquí verás los items que necesitas para subir de nivel tu Eidolon (emoji)</p>
              <p data-lang="fr">Aquí verás los items que necesitas para subir de nivel tu Eidolon (emoji)</p>
              <p data-lang="br">Aquí verás los items que necesitas para subir de nivel tu Eidolon (emoji)</p>
            </div>
          }
            <ul className="list-group mb-3">
              { this.state.need.map((i,k)=>
              <li className="ItemNeed list-group-item need-list-item" key={k}>
                <div className="align-items-center row">
                  <div className="col-3">
                    <div className="justify-content-around row need-btns">
                      <button
                        type="button" data-action={i.cant>=100?100:1} data-id={i.id} onClick={this.handlerBtn}
                        className="btn col-auto col-sm-auto need-btn btn-primary"
                      >+{i.cant}</button>
                      <button
                        type="button" data-action={(i.cant>100?(100):(1))*(-1)} data-id={i.id} onClick={this.handlerBtn}
                        className="btn col-auto col-sm-auto need-btn btn-primary"
                      >-{i.cant}</button>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="justify-content-around align-items-center row">
                      <div className="col-sm3">
                        <United cant={i.cant} />
                      </div>
                      <div className="col-sm-9">
                        <Item item={i.item}></Item>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              )}
            </ul>

            { this.state.needMore?
              <div class="alert-div">
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <span data-lang="es">Estos cristales no serán suficientes para el nivel que buscas.</span>
                  <span data-lang="en"></span>
                  <span data-lang="de"></span>
                  <span data-lang="fr"></span>
                  <span data-lang="br"></span>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              </div>
              : <div></div>
            }

          </div>
        </div>
      </div>
    );
  }
}

export default Needs;
