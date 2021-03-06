
import { Component } from 'react';
import userConfig from '../util/userConfig';
import db from '../util/db';

// lang
import TXT from '../lang/header.json';

// components
import Item from "./Item";

class ItemConfig extends Component {
  constructor(){
    super();
    this.handlerItem = this.handlerItem.bind(this);
    this.state = {
      items: [],
      empty_arr: 0
    }
  }

  componentDidMount(){
    let ids = userConfig.getCrystals();
    db.getCrystals().then(items=>{
      items.forEach(c=>{ c.selected = ids.includes(String(c.id)) });
      items.sort((a,b)=> b.id - a.id)
      this.setState({ items })
    })
  }

  handlerItem(e){
    let id = e.currentTarget.value;
    let empty_arr = userConfig.setCrystals(id, e.currentTarget.checked)
    let items = this.state.items;

    items.forEach(i=>{
      if(i.id==id) i.selected= !i.selected;
      if(i.id==empty_arr) i.selected=true;
    });
    this.setState({ items, empty_arr })
  }

  render() {
    const lang = this.props.lang;
    return (
      <div
        className="ItemConfig accordion accordion-flush container list-group-item"
        id="accordionConfigItem"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#accordionItemOne"
              aria-expanded="false"
              aria-controls="accordionItemOne"
            >
              <span>{ TXT.crystals[lang] }</span>
            </button>
          </h2>
          <div
            id="accordionItemOne"
            className="accordion-collapse collapse"
            aria-labelledby="headOne"
            data-bs-parent="#accordionConfigItem"
          >
            <div className="accordion-body">
              { this.state.empty_arr?
              <div class="alert-container">
                <div class="alert-div">
                  <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <span>{ TXT.crystalsAlert[lang] }</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                </div>
              </div>
              : <div></div>
              }

              { this.state.items.map((i,k)=>
              <div className="form-check" key={k}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={i.selected}
                  id={"flexCheckDefault"+i.id}
                  value={i.id}
                  onChange={this.handlerItem}
                />
                <label className="form-check-label" htmlFor={"flexCheckDefault"+i.id}>
                  <Item item={i} lang={lang} />
                </label>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemConfig;
