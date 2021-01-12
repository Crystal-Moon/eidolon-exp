import React from "react";

class Lang extends React.Component {
  render() {
    return (
      <div className="Lang container list-group-item">
        <div className="row justify-content-center col-sm-12">
          <span data-lang="es" className="col-sm">
            Idioma
          </span>
          <span data-lang="en" className="col-sm">
            Languages
          </span>
          <span data-lang="fr" className="col-sm">
            Langues
          </span>
          <span data-lang="de" className="col-sm">
            Sprachen
          </span>
          <span data-lang="br" className="col-sm">
            Línguas
          </span>
          <div
            className="col-sm-auto"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="lang-input"
              name="btnradio"
              id="btnradio1b"
              autoComplete="off"
              defaultChecked
            />
            <label className="lang-lbl" htmlFor="btnradio1b">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/esp.svg"
                alt="es"
              />
            </label>
            <input
              type="radio"
              className="lang-input"
              name="btnradio"
              id="btnradio2b"
              autoComplete="off"
            />
            <label className="lang-lbl" htmlFor="btnradio2b">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/gbr.svg"
                alt="en"
              />
            </label>
            <input
              type="radio"
              className="lang-input"
              name="btnradio"
              id="btnradio3b"
              autoComplete="off"
            />
            <label className="lang-lbl" htmlFor="btnradio3b">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/fra.svg"
                alt="fr"
              />
            </label>
            <input
              type="radio"
              className="lang-input"
              name="btnradio"
              id="btnradio4b"
              autoComplete="off"
            />
            <label className="lang-lbl" htmlFor="btnradio4b">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/bra.svg"
                alt="br"
              />
            </label>
            <input
              type="radio"
              className="lang-input"
              name="btnradio"
              id="btnradio5b"
              autoComplete="off"
            />
            <label className="lang-lbl" htmlFor="btnradio5b">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/deu.svg"
                alt="de"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Lang;
