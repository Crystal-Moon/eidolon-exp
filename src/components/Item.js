
import { Component } from 'react';

class Item extends Component {
  constructor(){
    super();
  }
  render() {
    //console.log('props',this.props)
    const { icon='', name={}, id=0, qlty='white' } = this.props.item;
    const lang = this.props.lang;

    return (
      <div className={`row ${qlty}`}>
        <div className="col-auto col-sm-auto">
          <img src={icon} alt='' className="item_icon" title={name[lang]} />
        </div>
        <div className="col col-sm">
        {/*  <span className="item_name">{name[lang]}</span> */}
          <span data-lang="es" className="item_name">{name.es}</span>
          <span data-lang="en" className="item_name">{name.en}</span>
          <span data-lang="fr" className="item_name">{name.fr}</span>
          <span data-lang="de" className="item_name">{name.de}</span>
          <span data-lang="br" className="item_name">{name.br}</span>
        </div>
      </div>
    );
  }
}

export default Item;
