
import { Component } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';
import calculator from '../util/calculator';

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
      lvlTo: ''
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
    //console.log('el target en submit', e.target);
    //console.log('el json', this.state)
    let lvl = this.state.lvl;
    let lvlTo = this.state.lvlTo;
    let percent = this.state.percent;

    const exp = await db.getExp().then(x=>x);

    let expTotalEido = exp[String(lvl)].total + ( exp[String(parseInt(lvl)+1)].xp / 100000 * percent );
    let expNecesaria = exp[String(lvlTo)].total - expTotalEido;
    

    let obj = await calculator({ 
      xpEido: expTotalEido, 
      xpNeed: expNecesaria, 
      //percent: this.state.percent
    })

    let need = []
    let N=obj.need;
    for (let k in N){
      need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    }
    need.sort((a,b)=>b.id - a.id)

    console.log('el need ue va desde calcul a need', need)

    Event.emit('needs', { need, xpEido: expTotalEido, xpNeed:expNecesaria });

    /*
    db.getCrystalsUser()
      .then(user=> new Promise(d=>d({ user, exp: db.getExp().then(a=>a) })))
      .then(({ user, exp})=>{

        console.log('el user', user)
        console.log('el exp', exp)
        */
      /*
      
      */
/*
      let user = await db.getCrystalsUser().then(u=>u);
      let exp = await db.getExp().then(x=>x);
      
      let lvl = this.state.lvl || 1;
      let lvlTo = this.state.lvlTo || 1;
      let percent = this.state.percent;


    console.log('el user', user)
        //console.log('el exp', exp)

      let expTotalEido = exp[String(lvl)].total + ( exp[String(parseInt(lvl)+1)].xp / 100000 * percent );
      let expNecesaria = exp[String(lvlTo)].total - expTotalEido;
      let expNecesaria1 = expNecesaria;
      let N = {};

      let key='';
      let c=0
      for (; expNecesaria > 0;){
        //console.log('el user c',user[c])
      if(!user[c]){
        console.log('no hay user c',c, user[c], user[c-1])

        //if(N[key].cant) N[key].cant++
        //else N[key].pack++
        N[key].cant++
        expNecesaria=0;
      }else{
        key=String(user[c].id);


        if(!N[key]) N[key] = { cant: 0, pack: 0, item: user[c] };
        if(expNecesaria >= user[c].xp){
          N[key].cant++;
          expNecesaria -= user[c].xp;
          if(N[key].cant>=100){
            N[key].pack++;
            N[key].cant=0;
          }
        }else if(N[key].cant>0 && N[key].pack){
          expNecesaria += user[c].xp * N[key].cant
          N[key].cant=0;
          c++
        }else c++
        //console.log('N en cada vuelta',N, expNecesaria)
      }
    }

      console.log('despues del for')
      console.log(expTotalEido, expNecesaria1)
      console.log(N)
  
*/
    console.log('el obj', obj)
      //Event.emit('needs', { N, xpEido: expTotalEido, xpNeed: expNecesaria1 });

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
            <p data-lang="en">Indicate the current level of the Eidolon and the level you want 
              to reach to know which and how many crystals you need (emoji)</p>
            <p data-lang="fr">Indiquez le niveau actuel de l'Eidolon et le niveau que vous 
            souhaitez atteindre pour savoir de quels cristaux et combien de cristaux vous avez besoin (emoji)</p>
            <p data-lang="de">Geben Sie die aktuelle Stufe des Eidolons und die Stufe an, 
              die Sie erreichen möchten, um zu wissen, welche und wie viele Kristalle Sie benötigen (emoji)</p>
            <p data-lang="br">Indique o nível atual do Eidolon e o nível que você deseja atingir 
              para saber quais e quantos cristais você precisa (emoji)</p>
            <form onSubmit={this.handlerSubmit}>
              <div className="row g-3 mb-2 align-items-center">
                <div className="col-auto">
                  <label htmlFor="lvl" className="col-form-label">
                    <span data-lang="es">Nivel del Eidolon:</span>
                    <span data-lang="en">Level of Eidolon:</span>
                    <span data-lang="de">Eidolon-Spiegel:</span>
                    <span data-lang="fr">Niveau d'Eidolon:</span>
                    <span data-lang="br">Nível de Eidolon:</span>
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
