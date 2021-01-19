
import { Component, createRef } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';

import Item from "./Item";

class ComboboxItems extends Component {
  constructor(props){
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.refLi = createRef();
    this.state = {
      selected: {}
    }
  }

  componentDidMount(){
    db.getCrystals(10).then(selected=>this.setState({ selected }))
  }

  handlerChange(e){
   // e.stopPropagation();
   // e.preventDefault();
    //let id = this.refLi.current.dataset.id;
    let id = e.currentTarget.dataset.id;
    let lado = e.currentTarget.dataset.lado;
    console.log('el id del li', id)
    //let tar=this.refs;
    //console.log('los refts', tar)
    //console.log('el currentTarget', e.currentTarget)
    db.getCrystals(id).then(selected=>{
      this.setState({ selected })
      Event.emit('selected', { item: selected, lado })
    })
  }

  render() {
    const { lado ='A', items=[] } = this.props;
    return (
      <div className="btn-group w-100">
        <button
          className="btn btn-sm btn-select-item dropdown-toggle rounded-0 rounded-end"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="select-item small">
            <Item item={this.state.selected}></Item>
          </div>
        </button>
        <ul className="dropdown-menu">
          { items.map((i,k)=>
          <li className="dropdown-item small" key={k} 
            onClick={this.handlerChange} 
            data-id={i.id} data-lado={lado}>
            <Item item={i} />
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ComboboxItems;
