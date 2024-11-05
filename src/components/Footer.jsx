
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
            <p>{ TXT.p2[lang] } <a href="https://www.aurakingdom-db.com/" target="_blank" rel="noreferrer">aurakingdom-db.com</a></p>
          </div>
          <div className="container">
            <div className="col-md-4 mb-3">
              <div className="contador-container">
                <span>{ TXT.number[lang] }:</span>
                <div id="sfckj3hrfmdd23u7s48fyuxp1ajsj1eg5me" className="contador"></div>
                <span>{ TXT.thank[lang] } &#128156;!</span>
              </div>
            </div>
            <div className="col-md-6">
              <p>*{ TXT.p3[lang] } <span style={{color:"#673AB7"}}>crystal.marino345@gmail.com</span></p>
              <p>Thanks <a className="thanks" href="https://github.com/haruka98" target="_blank" rel="noreferrer">Haruka</a> for the german corrections.</p>
            </div>
          </div>
        </div>
        <div className="footer_me small">
          <div className="nav navbar">
            <div className="container-fluid justify-content-center justify-content-sm-between">
              <div className="col-auto">
                <span>Made with &#10084; by</span>
                <img
                  className="icon_logo cm_logo"
                  src={cm_logo}
                  alt="CM"
                />
                <span className="name_logo">CrystalMoon [AKES]</span>
                <img
                  className="icon_logo cm_logo" style={{width:'1em'}}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png"
                  alt="arg" title="Argentina"
                />
              </div>
              <div className="col-auto">
                <span>2021 v{process.env.REACT_APP_VERSION}</span>
              </div>
              <div className="col-auto">
                <span style={{marginLeft:'0.8em'}}>Powered By</span>
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
