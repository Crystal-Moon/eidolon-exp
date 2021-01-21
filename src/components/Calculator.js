
import { Component } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';

// lang
import TXT from '../lang/calculator.json';

// components
import SpecialInput from './SpecialInput';

class Calculator extends Component {
  constructor(){
    super();
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerInput = this.handlerInput.bind(this);
    this.setPercent = this.setPercent.bind(this);
    this.state = {
      lvl: '',
      percent: 0,
      lvlTo: '',
      noLvl: false
    }
    Event.on('percent', this.setPercent);
  }

  setPercent({ value }){
    //console.log('el valuee q llega', value, typeof value, value.length)
    let percent = parseInt(value.split('').concat(new Array(5 - value.length).fill('0')).join(''))
    //console.log('el value a state', percent)
    this.setState({ percent })
  }

  handlerInput(e){
    let name = e.target.name;
    let value = (e.target.validity.valid) ? e.target.value : this.state[name];

    //console.log('el name', name, 'el value', value);

    this.setState({ [name]: value })
  }

  async handlerSubmit(e){
    e.preventDefault();

    let lvl = this.state.lvl;
    let lvlTo = this.state.lvlTo;
    let percent = this.state.percent;

    const user = await db.getCrystalsUser().then(u=>u);
    const exp = await db.getExp().then(x=>x);

    let xpEido = exp[String(lvl)].total + ( exp[String(parseInt(lvl)+1)].xp / 100000 * percent );
    let xpNeed = exp[String(lvlTo)].total - xpEido;
    let expNecesaria = xpNeed;
    let N = {};

    let key='';
    let c=0;
    let needMore = false;
    this.setState({ noLvl: Boolean(xpNeed<=0) })

    while(xpNeed > 0){
      if(!user[c]){
        xpNeed -= user[c-1].xp
         N[key].cant++;
         needMore = Boolean(xpNeed > 0)
         xpNeed=0;
      }else{
        key=String(user[c].id);
        if(!N[key]) N[key] = { cant: 0, pack: 0, item: user[c] };
        //if(xpNeed >= user[c].xp || (change && N[key].cant <= change.cant)){
        if(xpNeed >= user[c].xp){
          N[key].cant++;
          xpNeed -= user[c].xp;

        //  if(change && N[key].cant >= change.cant && parseInt(change.id) >= parseInt(key)) c++;
         // else if(change && N[key].cant < change.cant && key == change.id){
       //   console.log('el el nuevo if', key, change)
          //N[key].cant = change.cant;
          //c++;
       // }
          //if(limits) console.log('el limits key en cada vuelta', limits[key])
          /*
          if(limits && N[key].cant>=limits[key].cant){
            //N[key].pack++;
            //N[key].cant=0;
            console.log('dentro de resto',limits[key])
            console.log('el key',key)
            console.log('echi string +1 ', (user[c+1]||user[c]).id)
            limits[String((user[c+1]||user[c]).id)].cant=100;
            
            let resto = N[key].cant % 100;
          console.log('el resto', resto)
          N[key].cant -= resto;

            xpNeed += user[c].xp * resto;


            c++;
          }*/
        }else if(N[key].cant>100){
          let resto = N[key].cant % 100;
          //console.log('el resto', resto)
          N[key].cant -= resto;

            xpNeed += user[c].xp * resto
          //N[key].cant=0;
            c++
        //}else if(change && change.cant > N[key].cant && change.id==key){
          //console.log('en el if',change)
       //   N[key].cant = change.cant;
        //  c++;

        }else c++
        //console.log('N en cada vuelta',N, expNecesaria)
      }
    }

    /*let obj = await calculator({ 
      xpEido: xpEido, 
      xpNeed: expNecesaria, 
      //percent: this.state.percent
    })*/

  //  console.log('el objs en calculator', obj)
    let need = [], limits={}
  //  let N=obj.need;
    for (let k in N){
      limits[String(k)] = N[k].cant;
      console.log('limits  en vueltta, calculator', limits)
      need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    }
    need.sort((a,b)=>b.id - a.id)

    console.log('el need ue va desde calcul a need',{ need, limits, needMore})

    Event.emit('needs', { need, xpEido, xpNeed: expNecesaria, limits });
  }

  render() {
    const { lang } = this.props;
    return (
      <div className="col-lg-5 container-blur">
        <div className="card card-calc text-light">
          <div className="card-header text-center">
            <h5 className="card-title">{TXT.title[lang]}</h5>
            <h6 className="card-subtitle mb-2 small">{TXT.subTitle[lang]}</h6>
          </div>
          <div className="card-body">
            <p>&#10145; { TXT.p1[lang] } &#128142;</p>
            <form onSubmit={this.handlerSubmit}>
              <div className="row g-3 mb-2 align-items-center">
                <div className="col-auto">
                  <label htmlFor="lvl" className="col-form-label">
                    <span>{ TXT.lbl1[lang] }:</span>
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
                    <span>{ TXT.lbl2[lang] }:
                      <span id="passwordHelpInline" className="small"> (optional)</span>
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
                    <span>{ TXT.lbl3[lang] }:</span>
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
                <button className="btn btn-primary mb-3" type="submit">
                  <span>{ TXT.btn[lang] }</span>
                </button>
              </div>
            </form>
            { this.state.noLvl?
              <div className="alert alert-danger" role="alert" style={{borderLeft: '3px solid #c80202'}}>
                <span>{ TXT.alert[lang] } &#128547; </span>
              </div>
              : <div></div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
