
import { Component } from 'react';
import userConfig from '../util/userConfig';
import db from '../util/db';

import Item from "./Item";

class ItemConfig extends Component {
  constructor(){
    super();

    this.state = {
      items: [],
      lang: 'es'
    }
  }

  componentDidMount(){
    let ids = userConfig.get('crystals').split(',');
    let lang = userConfig.get('lang');
    db.getCrystals().then(items=>{
      items.forEach(c=>{
        c.selected = ids.includes(String(c.id));
        
      });
      console.log('items para lista', items)
      this.setState({ items, lang })
    })
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
              { this.state.items.map((i,k)=>
              <div className="form-check" key={k}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={Boolean(i.selected)}
                  id={"flexCheckDefault"+i.id}
                  value={i.id}
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
