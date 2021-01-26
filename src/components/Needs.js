
import { Component } from 'react';
import { Event } from '../util/Event';
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
      limits: {},
    }

    Event.on('needs', this.needConst);
  }

  needConst({ need, xpEido, xpNeed, limits }){
    this.setState({ need, xpNeed, xpEido, limits })
  }

  handlerBtn({ target }){
    let action = parseInt(target.dataset.action);
    let id = String(target.dataset.id);
    let limits = this.state.limits;

    limits[id] += action

    this.setState({ limits })
    this.reCalculate(id)
  }

  async reCalculate(changeId){
    const user = await db.getCrystalsUser().then(u=>u);
    let { limits, xpNeed } = this.state;
    let needMore=false, N={}, k='', c=0;

    for(let l in limits) {
      if(parseInt(l)<parseInt(changeId)) limits[l]=Infinity;
    }

    while(xpNeed > 0){
      if(!user[c]){
        xpNeed -= user[c-1].xp
        needMore = Boolean(xpNeed > 0)
        xpNeed=0;
      }else{
        k=String(user[c].id);
        if(!N[k]) N[k] = { id: k, cant: 0, item: user[c] };
        if(N[k].cant < limits[k] || (xpNeed >= user[c].xp && N[k].cant < limits[k])){
          N[k].cant++;
          xpNeed -= user[c].xp;
        }else if(N[k].cant>100){
          let resto = N[k].cant % 100;
          N[k].cant -= resto;
          xpNeed += user[c].xp * resto
          c++
        }else c++
      }
    }

    let need = Object.values(N);
    need.sort((a,b)=>b.id - a.id)
    need.forEach(n=>{
      if(limits[n.id] > n.cant && limits[n.id] !== Infinity) n.cant=limits[n.id]
    })

    let newLimits = {}
    for (let k in N){
      newLimits[k]=N[k].cant;
    }

    need = need.filter(n=>n.cant>0)
    this.setState({ need, needMore, limits: newLimits })
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
