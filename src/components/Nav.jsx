
import { Component, createRef } from 'react';
import { Event } from '../util/Event';

// lang
import TXT from '../lang/header';

// components
import logo from '../assets/imgs/logo.png';

const routes = [
  { name: 'navCalc', url: 'calculator' },
  { name: 'navComp', url: 'compare' },
  { name: 'navInfo', url: 'manual' },
];


class Nav extends Component {
  constructor(){
    super();
    this.floor = createRef();
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      tab: 'calculator'
    }
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('nav-link'))
      .forEach(x=>x.classList.remove('active'));

    let tab = e.currentTarget.dataset.to;
    let bound = e.currentTarget.getBoundingClientRect();

    e.currentTarget.classList.add('active')
    this.floor.current.style.width = bound.width+'px';
    this.floor.current.style.marginLeft = bound.left+'px';

    Event.emit('changeTab', { tab })
    this.setState({ tab })
  }

  render() {
    const lang = this.props.lang;
    return (
      <nav className={`Navv navbar navbar-expand-md navbar-light ${this.state.tab}`}>
        <div className="container-fluid justify-content-start">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-brand col-auto" href="#" data-content="Logo">
            <img src={logo} alt="logo" className="Logo col-auto" />
            <span>Eidolon Exp</span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {routes.map((l,k)=>
                <span className="nav-link" aria-current="page" 
                  data-to={l.url} key={k} onClick={this.selectTab}>
                  { TXT[l.name][lang] }
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="nav-floor expand-md-hidden" ref={this.floor} />
      </nav>
    );
  }
}

export default Nav;
