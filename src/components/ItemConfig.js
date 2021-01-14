
import { Component } from 'react';
import userConfig from '../util/userConfig';
import db from '../util/db';

import Item from "./Item";

class ItemConfig extends Component {
  constructor(){
    super();
    this.handlerItem = this.handlerItem.bind(this);
    this.state = {
      items: [],
      lang: 'es',
      empty_arr: 0
    }
  }

  componentDidMount(){
    let ids = userConfig.getCrystals();
    let lang = userConfig.get('lang');
    db.getCrystals().then(items=>{
      items.forEach(c=>{ c.selected = ids.includes(String(c.id)) });
      items=items.sort((a,b)=> b.id - a.id)
      //console.log('items para lista', items)
      this.setState({ items, lang })
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
              <span data-lang="es">Cristales a usar</span>
              <span data-lang="en">Crystals to use</span>
              <span data-lang="fr">Cristaux à utiliser</span>
              <span data-lang="de">Kristalle zu verwenden</span>
              <span data-lang="br">Cristais para usar</span>
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
                    <span data-lang="es">Debes tener al menos un item seleccionado.</span>
                    <span data-lang="en">Debes tener al menos un item seleccionado.</span>
                    <span data-lang="de">Debes tener al menos un item seleccionado.</span>
                    <span data-lang="fr">Debes tener al menos un item seleccionado.</span>
                    <span data-lang="br">Debes tener al menos un item seleccionado.</span>
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
                  <Item item={i} lang={this.state.lang} />
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
