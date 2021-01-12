import React from "react";
import Item from "./Item";

class ItemConfig extends React.Component {
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
              <span data-lang="en">crystals to use</span>
              <span data-lang="fr">cristaux à utiliser</span>
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  <Item></Item>
                  {}
                </label>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default ItemConfig;
