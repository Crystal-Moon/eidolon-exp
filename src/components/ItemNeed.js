
import { Component } from 'react';
import { Event } from '../util/Event';

// component
import United from "./United";
import Item from "./Item";

class ItemNeed extends Component {
  constructor(){
    super();
    this.handlerBtn = this.handlerBtn.bind(this);
    this.reCalculate = this.reCalculate.bind(this);
    this.needConst = this.needConst.bind(this);
    this.state = {
      need: [],
      xpEido: 0,
      xpNeed: 0
    }

    Event.on('needs', this.needConst);

  }

  handlerBtn(e){

  }

  needConst({ N, xpEido, xpNeed }){
    let need = []
    for (let k in N) {
      need.push({ id: k, cant: N[k].cant, pack: N[k].pack, item: N[k].item })
    }
    this.setState({ need, xpNeed, xpEido })
  }

  reCalculate({ target }){

    console.log('el target', target)

  }

  render() {
    return (
      <ul className="list-group">
      { this.state.need.map((i,k)=>
      <li className="ItemNeed list-group-item need-list-item" key={k}>
        <div className="align-items-center row">
          <div className="col-3">
            <div className="justify-content-around row need-btns">
              <button
                type="button" data-action={1} data-id={i.id} onClick={this.handlerBtn}
                className="btn col-auto col-sm-auto need-btn btn-primary"
              >+</button>
              <button
                type="button" data-action={-1} data-id={i.id} onClick={this.handlerBtn}
                className="btn col-auto col-sm-auto need-btn btn-primary"
              >-</button>
            </div>
          </div>
          <div className="col-9">
            <div className="justify-content-around align-items-center row">
              <div className="col-sm3">
                <United unit={{}} />
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
    );
  }
}

export default ItemNeed;
