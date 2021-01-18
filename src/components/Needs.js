
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
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0 
       },
      change: {},
      user: []
    }

    Event.on('needs', this.needConst);

  }

  componentDidMount(){
    db.getCrystalsUser().then(user=> this.setState({ user }));
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

  async reCalculate(/*{ limits, id, change }*/changeId){


    /*
    let obj = await calculator({ 
      xpEido: this.state.xpEido, 
      xpNeed: this.state.xpNeed, 
      limits, toq:id,
      change
    })
    //this.reCalculate({ limits })

    //console.log('el need de state', this.state.need)
    console.log('el obj  de calc', obj)
    */
    //-----------------------------------------
    console.log('el state con que empiezo recalculate ', this.state)
    let { user, change } = this.state; 
  //const exp = await db.getExp().then(x=>x);
    let { ...limits } = this.state.limits;
    let needMore = this.state.needMore;
    let xpNeed = this.state.xpNeed;

      
    for(let l in limits) {
      if(parseInt(l)<parseInt(changeId)) limits[l]=Infinity;
    }
 
    //console.log('el user', user)
  //console.log('ell change q llega', change)
    //console.log('los limit q llegan al calcul',limits)
        //console.log('el exp', exp)

  //  let expTotalEido = exp[String(lvl)].total + ( exp[String(parseInt(lvl)+1)].xp / 100000 * percent );
  //  let expNecesaria = exp[String(lvlTo)].total - expTotalEido;
    //let expNecesaria1 = xpNeed;
    let N = {};

    let k='';
    let c=0;
   // needMore = false;

    while(xpNeed > 0){
        //console.log('el user c',user[c])
      if(!user[c]){
        console.log('entro al ultima vuelta', xpNeed, 'la k', k)
        console.log('el N es',N)
        xpNeed -= user[c-1].xp
        
        //N[k].cant++;
       // if(N[k].cant < limits[k]) N[k].cant++;
        //else needMore=true;
        needMore = Boolean(xpNeed > 0)
        
        console.log('sumo uno y resto la xp', xpNeed)

        //needMore = Boolean(xpNeed > 0)
        console.log('llege al final ', needMore)
        xpNeed=0;
      }else{
        k=String(user[c].id);

        if(!N[k]) N[k] = { id: k, cant: 0, item: user[c] };
        //if(xpNeed >= user[c].xp || (change && N[k].cant <= change.cant)){
        if(xpNeed >= user[c].xp || N[k].cant < limits[k]){
          N[k].cant++;
          xpNeed -= user[c].xp;

        
        
        }else if(N[k].cant>100){
          let resto = N[k].cant % 100;
          //console.log('el resto', resto)
          N[k].cant -= resto;

            xpNeed += user[c].xp * resto
          //N[k].cant=0;
            c++
        //}else if(change && change.cant > N[k].cant && change.id==k){
          //console.log('en el if',change)
       //   N[k].cant = change.cant;
        //  c++;

        }else c++
        //console.log('N en cada vuelta',N, expNecesaria)
      }
      //console.log('N en vuelta',N)
    }

/*
    if(change && change.cant > N[change.id].cant && change.id == k){
      console.log('en el if final',change)
      N[change.id].cant=change.cant;
    }
*/
      //console.log('despues del for')
      ///console.log(xpEido, expNecesaria1)
      console.log('N',N)
  
  //---------------------------------------------

    let need = Object.values(N);
/*
    let need = [], limits1 = {}
    let N = obj.need;
    for (let k in N){
      limits1[k]=N[k].cant;
      console.log('el limits en cada vuelta', limits1)
      need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    }
    */
    need.sort((a,b)=>b.id - a.id)
    let newLimits = {}
    for (let k in N){
      newLimits[k]=N[k].cant;
    //  console.log('el limits en cada vuelta', limits1)
     // need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    }
    //let { ...limits1 } = limits
    //console.log('el limit que se seta', limits1)
    console.log('el need a setear', need, needMore, xpNeed)
    console.log('la exp de state', this.state.xpNeed)
    console.log('newLimits', newLimits)
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
                      >+{i.cant>=100?100:1}</button>
                      <button
                        type="button" data-action={(i.cant>100?(100):(1))*(-1)} data-id={i.id} onClick={this.handlerBtn}
                        className="btn col-auto col-sm-auto need-btn btn-primary"
                      >-{(i.cant>100?(100):(1))*(-1)}</button>
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
