
//import { Component } from 'react';

//lang
import TXT from '../lang/footer.json';

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
            <p>{ TXT.p1[lang] }</p>
            <p>{ TXT.p2[lang] } <a href="https://www.aurakingdom-db.com/" target="_blank">aurakingdom-db.com</a></p>
          </div>
          <div className="container">
            <div className="col-md-4 mb-3">
              <div className="contador-container">
                <span>{ TXT.number[lang] }:</span>
                <div className="contador" id="elContadorEnSi">
                  <img
                    src="https://www.contadorvisitasgratis.com/cache_image/176.png"
                    alt="contador_demo"
                    style={{ height: "24px", width: "64px" }}
                  />
                </div>
                <span>{ TXT.thank[lang] } &#128156;!</span>
              </div>
            </div>
            <div className="col-md-6">
              <p>{ TXT.p3[lang] }<span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span></p>
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
