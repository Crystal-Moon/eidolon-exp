import React from "react";
import ItemNeed from "./ItemNeed";

class Needs extends React.Component {
  render() {
    return (
      <div className="col-lg-5 container-blur">
        <div className="card card-calc text-light">
          <div className="card-header text-center">
            <h5 className="card-title">Cristales necesarios</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Necesitarás todos los siguientes items para llegar al nivel
              deseado
            </h6>
          </div>
          <div className="card-body">
            <p>
              Aumenta o disminuye según lo que ya tengas en tu inventario, el
              sistema calculará nuevamente según tus preferencias.
            </p>
            <p>
              [P para sin ul] Aquí verás los items que necesitas para subir de
              nivel tu Eidolon (emoji)
            </p>
            <ul className="list-group">
              <ItemNeed></ItemNeed>
              {}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Needs;
