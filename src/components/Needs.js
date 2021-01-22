
import { Component } from 'react';
import { Event } from '../util/Event';
//import calculator from '../util/calculator';
import db from '../util/db';

// lang
import TXT from '../lang/need.json';

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
    const { lang } = this.props;
    return (
      <div className="col-lg-5 container-blur">
        <div className="card card-calc text-light">
          <div className="card-header text-center">
            <h5 className="card-title">{ TXT.title[lang] }</h5>
          </div>
          <div className="card-body">
          { this.state.need.length==0?
            <div>
              <p>&#10145; { TXT.p0[lang] }</p>
            </div>
            :
            <div>
              <p>{ TXT.p1[lang] } &#128170;</p>
              <p>{ TXT.p2[lang] }</p>
            </div>
          }
            <ul className="list-group mb-3">
              { this.state.need.map((i,k)=>
              <li className="ItemNeed list-group-item need-list-item" key={k}>
                <div className="align-items-center row">
                  <div className="col-3">
                    <div className="justify-content-around row need-btns">
                      <button
                        className="btn col-auto col-sm-auto need-btn btn-primary"
                        type="button" data-action={i.cant>=100?100:1} 
                        data-id={i.id} onClick={this.handlerBtn}
                      >+</button>
                      <button
                        className="btn col-auto col-sm-auto need-btn btn-primary"
                        type="button" data-action={(i.cant>100?100:1)*(-1)} 
                        data-id={i.id} onClick={this.handlerBtn}
                      >-</button>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="justify-content-around align-items-center row">
                      <div className="col-sm3">
                        <United cant={i.cant} lang={lang} />
                      </div>
                      <div className="col-sm-9">
                        <Item item={i.item} lang={lang} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              )}
            </ul>

            { this.state.needMore?
              <div className="alert alert-warning" role="alert" style={{borderLeft: '3px solid #f9b115'}}>
                <span>{ TXT.alert[lang] } &#x2699;</span>
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
