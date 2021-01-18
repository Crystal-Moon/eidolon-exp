
import { Component } from 'react';
import { Event } from '../util/Event';
import calculator from '../util/calculator';
import db from '../util/db';

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
      needMore: false,
      limits: {
      /*  '1': 0,
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
      change: {},
      user: []
    }

    Event.on('needs', this.needConst);

  }

  componentDidMount(){
    //db.getCrystalsUser().then(user=> this.setState({ user }));
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
    /*
    let action = parseInt(target.dataset.action);
    let id = String(target.dataset.id);
    console.dir('el limits de state', this.state.limits)

    let limits = this.state.limits;
    console.log('el limits de state en btn', limits)
 
    let change = { id, cant: limits[id] + action }
    limits[id] += action
    

    console.log('el change en btn', change)
    console.log('el limits de state en btn', limits)
    this.setState({ change, limits })
    //this.reCalculate({ limits, id, change })
    this.reCalculate()
    */
    let action = parseInt(target.dataset.action);
    let id = String(target.dataset.id);
    console.log('el limits de state', this.state.limits)

    let limits = this.state.limits;
    //console.log('el limits de state en btn', limits)
 
    let change ={} // seguro se borre todo change
    
    /*
    for(let l in limits) {
      if(parseInt(l)<parseInt(id)) limits[l]=Infinity;
    }
    */

    limits[id] += action
    

    //console.log('el change en btn', change)
    console.log('el limits de state en btn', limits)
    this.setState({ change, limits })
    //this.reCalculate({ limits, id, change })
    this.reCalculate(id)

  }

  async reCalculate(changeId){

   // console.log('el state con que empiezo recalculate ', this.state.limits)
    //let { user } = this.state; 
    const user = await db.getCrystalsUser().then(u=>u);
  
    //let limits= this.state.limits;
    //let xpNeed = this.state.xpNeed;

    let { limits, xpNeed } = this.state;

      
    for(let l in limits) {
      if(parseInt(l)<parseInt(changeId)) limits[l]=Infinity;
    }
 
    //console.log('el user', user)
  //console.log('ell change q llega', change)
    //console.log('los limit q llegan al calcul',limits)
        //console.log('el exp', exp)

    let needMore = false;
    let N = {};
    let k='';
    let c=0;


    while(xpNeed > 0){
        //console.log('el user c',user[c])
      if(!user[c]){
        console.log('entro al ultima vuelta', xpNeed, 'la k', k)
        console.log('el N es',N)
        xpNeed -= user[c-1].xp
        
        needMore = Boolean(xpNeed > 0)
        
        //console.log('sumo uno y resto la xp', xpNeed)

        //console.log('llege al final ', needMore)
        xpNeed=0;
      }else{
        k=String(user[c].id);

        if(!N[k]) N[k] = { id: k, cant: 0, item: user[c] };
        if(N[k].cant < limits[k] || (xpNeed >= user[c].xp && N[k].cant < limits[k])){
          N[k].cant++;
          xpNeed -= user[c].xp;

        
        
        }else if(N[k].cant>100){
          let resto = N[k].cant % 100;
          //console.log('el resto', resto)
          N[k].cant -= resto;

            xpNeed += user[c].xp * resto
      
            c++
     

        }else c++
       
      }
      //console.log('N en vuelta',N)
    }

      console.log('N',N)
  
  //---------------------------------------------

    let need = Object.values(N);

    need.sort((a,b)=>b.id - a.id)
    need.forEach(n=>{
      if(limits[n.id] > n.cant && limits[n.id] !== Infinity) n.cant=limits[n.id]
    })

    let newLimits = {}
    for (let k in N){
      newLimits[k]=N[k].cant;
    //  console.log('el limits en cada vuelta', limits1)
    }

    
    //console.log('el need a setear', need, needMore, xpNeed)
    //console.log('la exp de state', this.state.xpNeed)
    //console.log('los limit del state', this.state.limits)
    //console.log('newLimits', newLimits)
    need = need.filter(n=>n.cant>0) // necesario
    this.setState({ need, needMore, limits: newLimits })

    //console.log('el lkimist del state', this.state.limits)

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
                      >+</button>
                      <button
                        type="button" data-action={(i.cant>100?(100):(1))*(-1)} data-id={i.id} onClick={this.handlerBtn}
                        className="btn col-auto col-sm-auto need-btn btn-primary"
                      >-</button>
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
              <div className="alert-div">
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <span data-lang="es">Estos cristales no serán suficientes para el nivel que buscas. Aumenta alguno o selecciona más tipos en las configuraciones. (emoji)</span>
                  <span data-lang="en">Estos cristales no serán suficientes para el nivel que buscas. Aumenta alguno o selecciona más tipos en las configuraciones. (emoji)</span>
                  <span data-lang="de">Estos cristales no serán suficientes para el nivel que buscas. Aumenta alguno o selecciona más tipos en las configuraciones. (emoji)</span>
                  <span data-lang="fr">Estos cristales no serán suficientes para el nivel que buscas. Aumenta alguno o selecciona más tipos en las configuraciones. (emoji)</span>
                  <span data-lang="br">Estos cristales no serán suficientes para el nivel que buscas. Aumenta alguno o selecciona más tipos en las configuraciones. (emoji)</span>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
