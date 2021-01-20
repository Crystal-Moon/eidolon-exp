
//import { Component } from 'react';

//lang
import LANG from '../lang/footer.json';

// style
import '../assets/css/Footer.css';
import '../assets/css/mobile.css';

// components
import cm_logo from '../assets/imgs/CM_logo.svg';
import bootstrap_logo from '../assets/imgs/Bootstrap.svg';
import react_logo from '../assets/imgs/React.svg';
import github_logo from '../assets/imgs/github.svg';

function Footer(props) {
  const lang = props.lang;
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
                Aplicación web creada sin fines de lucro. Toda información fue tomada 
                de <a href="https://www.aurakingdom-db.com/">aurakingdom-db.com</a>
              </p>
            </div>
            <div data-lang="en">
              <p>
                All game content and assets are trademarks and copyrights of
                X-Legend® or Aeria Games®. This site is not affiliated with
                X-Legend or Aeria Games.
              </p>
              <p>Non-profit web application created. All information was taken 
                from <a href="https://www.aurakingdom-db.com/">aurakingdom-db.com</a></p>
            </div>
            <div data-lang="fr">
              <p>
                Tous les contenus et ressources du jeu sont des marques commerciales et 
                des droits d'auteur de X-Legend® ou Aeria Games®. Ce site n'est pas affilié 
                à X-Legend ou Aeria Games.
              </p>
              <p>
                Application Web à but non lucratif créée. Toutes les informations ont été 
                tirées de <a href="https://www.aurakingdom-db.com/">aurakingdom-db.com</a>
              </p>
            </div>
            <div data-lang="de">
              <p>
                Alle Spielinhalte und Vermögenswerte sind Marken und Urheberrechte 
                von X-Legend® oder Aeria Games®. Diese Seite ist nicht mit X-Legend 
                oder Aeria Games verbunden.
              </p>
              <p>
                Gemeinsame Webanwendung erstellt. Alle Informationen stammen 
                von <a href="https://www.aurakingdom-db.com/">aurakingdom-db.com</a>
              </p>
            </div>
            <div data-lang="br">
              <p>
                Todo o conteúdo e ativos do jogo são marcas comerciais e direitos 
                autorais da X-Legend® ou Aeria Games®. Este site não é afiliado 
                a X-Legend ou Aeria Games.
              </p>
              <p>
                Aplicativo da web sem fins lucrativos criado. Todas as informações 
                foram retiradas de <a href="https://www.aurakingdom-db.com/">aurakingdom-db.com</a>
              </p>
            </div>
          </div>
          <div className="container">
            <div className="col-md-4 mb-3">
              <div className="contador-container">
                <span>Numero de visitas:</span>
                <div className="contador" id="elContadorEnSi">
                  <img
                    src="https://www.contadorvisitasgratis.com/cache_image/176.png"
                    alt="contador_demo"
                    style={{ height: "24px", width: "64px" }}
                  />
                </div>
                <span data-lang="es">Gracias &#128156;!</span>
                <span data-lang="en">Thank you &#128156;!</span>
                <span data-lang="fr">Je vous remercie &#128156;!</span>
                <span data-lang="de">Danke &#128156;!</span>
                <span data-lang="br">Obrigado &#128156;!</span>
              </div>
            </div>
            <div className="col-md-6">
              <p data-lang="es">
                  Las traducciones de este sitio fueron realizadas con
                  herramientas de internet. Cualquier inconsitencia que
                  encuentres no dudes reportarla a <span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span>
              </p>
              <p data-lang="en">
                  Las traducciones de este sitio fueron realizadas con
                  herramientas de internet. Cualquier inconsitencia que
                  encuentres no dudes reportarla a <span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span>
              </p>
              <p data-lang="fr">
                  Las traducciones de este sitio fueron realizadas con
                  herramientas de internet. Cualquier inconsitencia que
                  encuentres no dudes reportarla a <span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span>
              </p>
              <p data-lang="de">
                  Las traducciones de este sitio fueron realizadas con
                  herramientas de internet. Cualquier inconsitencia que
                  encuentres no dudes reportarla a <span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span>
              </p>
              <p data-lang="br">
                  Las traducciones de este sitio fueron realizadas con
                  herramientas de internet. Cualquier inconsitencia que
                  encuentres no dudes reportarla a <span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer_me small">
          <div className="nav navbar">
            <div className="container-fluid">
              <div className="col-auto">
                <span>Made with &#10084; by</span>
                <img
                  className="icon_logo cm_logo"
                  src={cm_logo}
                  alt="CM"
                />
                <span className="name_logo">CrystaIMoon [AKES]</span>
                <img
                  className="icon_logo cm_logo"
                  src="https://restcountries.eu/data/arg.svg"
                  alt="arg"
                />
              </div>
              <div className="col-auto">
                <span className="expand-sm-hidden">Powered By</span>
                <img
                  className="icon_logo"
                  src={react_logo}
                  alt="\u269B"
                  title="ReactJS"
                />
                <img
                  className="icon_logo"
                  src={bootstrap_logo}
                  alt="B"
                  title="Bootstrap"
                />
                <img
                  className="icon_logo"
                  src={github_logo}
                  alt="gh"
                  title="gh-pages"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
