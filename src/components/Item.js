import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div className="row blue">
        <div className="col-auto col-sm-auto">
          <img src alt className="item_icon" title="nombre item" />
        </div>
        <div className="col col-sm">
          <span data-lang="es" className="item_name">
            Cristal de EXP de Eidolon Perfecto
          </span>
          <span data-lang="en" className="item_name">
            Cristal de EXP de Eidolon Perfecto
          </span>
          <span data-lang="fr" className="item_name">
            Cristal de EXP de Eidolon Perfecto
          </span>
          <span data-lang="de" className="item_name">
            Cristal de EXP de Eidolon Perfecto
          </span>
          <span data-lang="br" className="item_name">
            Cristal de EXP de Eidolon Perfecto
          </span>
        </div>
      </div>
    );
  }
}

export default Item;
