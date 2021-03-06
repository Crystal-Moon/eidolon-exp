
import { Component } from 'react';
import { Event } from '../util/Event';
import db from '../util/db';

// components
import Item from "./Item";

class ComboboxItems extends Component {
  constructor(props){
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      selected: {}
    }
  }

  componentDidMount(){
    db.getCrystals(10).then(selected=> this.setState({ selected }))
  }

  handlerChange(e){
    let id = e.currentTarget.dataset.id;
    let lado = e.currentTarget.dataset.lado;

    db.getCrystals(id).then(selected=>{
      this.setState({ selected })
      Event.emit('selected', { item: selected, lado })
    })
  }

  render() {
    const { lado ='A', items=[], lang } = this.props;
    return (
      <div className="btn-group w-100">
        <button
          className="btn btn-sm btn-select-item dropdown-toggle rounded-0 rounded-end"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="select-item small">
            <Item item={this.state.selected} lang={lang} />
          </div>
        </button>
        <ul className="dropdown-menu">
          { items.map((i,k)=>
          <li className="dropdown-item small" key={k} 
            onClick={this.handlerChange} 
            data-id={i.id} data-lado={lado}>
            <Item item={i} lang={lang} />
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ComboboxItems;
