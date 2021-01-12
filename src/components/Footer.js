import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <div className="nav navbar">
          <div className="container">
            <div data-lang="es">
              <p>
                Todo el contenido y los activos del juego son marcas comerciales
                y derechos de autor de X-Legend® o Aeria Games®. Este sitio no
                está afiliado a X-Legend o Aeria Games.
              </p>
              <p>
                Toda información es tomada de{" "}
                <a href="https://www.aurakingdom-db.com/">aurakingdom-db.com</a>
              </p>
            </div>
            <div data-lang="en">
              <p>
                All game content and assets are trademarks and copyrights of
                X-Legend® or Aeria Games®. This site is not affiliated with
                X-Legend or Aeria Games.
              </p>
            </div>
            <div data-lang="fr">
              <p />
            </div>
            <div data-lang="de">
              <p />
            </div>
            <div data-lang="br">
              <p />
            </div>
          </div>
          <div className="container">
            <div className="col-md-4 mb-3">
              <div className="contador-container">
                <span>Numero de visitas:</span>
                <div className="contador" id="elContadorEnSi">
                  <img
                    src="https://www.contadorvisitasgratis.com/cache_image/584.png"
                    alt
                    style={{
                      height: "24px",
                      width: "64px",
                      border: "1px solid black"
                    }}
                  />
                </div>
                <span>Gracias 💜!</span>
              </div>
            </div>
            <div className="col-md-6">
              <div data-lang="es">
                <p>
                  Las traducciones de este sitio fueron realizadas con
                  herramientas de internet. Cualquier inconsitencia que
                  encuentres no dudes reportarla a{" "}
                  <span
                    style={{
                      color: "#673AB7"
                    }}
                  >
                    crystal.marino345@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_me small">
          <div className="nav navbar">
            <div className="container-fluid">
              <div className="col-auto">
                <span>Made with ❤ by</span>
                <img
                  className="icon_logo cm_logo"
                  src="../../src/assets/imgs/CM_logo.svg"
                  alt="CM"
                />
                <span className="name_logo">CrystaIMoon [AKES]</span>
              </div>
              <div className="col-auto">
                <span className="expand-sm-hidden">Powered By </span>
                <img
                  className="icon_logo"
                  src="../../src/assets/imgs/React.svg"
                  alt="\u269B"
                  title="ReactJS"
                />
                <img
                  className="icon_logo"
                  src="../../src/assets/imgs/Bootstrap.svg"
                  alt="B"
                  title="Bootstrap"
                />
              </div>
            </div>
          </div>
        </div>
        {}
      </footer>
    );
  }
}

export default Footer;
