
import { Component, createRef } from 'react';
import { Event } from '../util/Event';

const routes = [
  { name: { es: 'Home', en: 'Home', fr: 'Home', de:'Home', br: 'Home' }, url: 'manual' },
  { name: { es: 'Calculadora', en: 'Calculator', fr: 'Calculatrice', de:'Taschenrechner', br: 'Calculadora' }, url: 'calculator' },
  { name: { es: 'Comparar', en: 'Compare', fr: 'Comparer', de:'Vergleichen', br: 'Comparar' }, url: 'compare' }
];


class Nav extends Component {
  constructor(){
    super();
    this.floor = createRef();
    this.selectTab = this.selectTab.bind(this);
    this.state = {
      tab: 'manual'
    }
  }

  selectTab(e){
    Array.from(document.getElementsByClassName('nav-link active'))
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
          <div
            className="Logo navbar-brand col-auto"
            href="#"
            data-content="Logo"
          >
            <img src alt="logo" />
            <span data-lang="es">Nombre</span>
            <span data-lang="en">Nombre</span>
            <span data-lang="fr">Nombre</span>
            <span data-lang="de">Nombre</span>
            <span data-lang="br">Nombre</span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {routes.map((l,k)=>
                <li className="nav-link" aria-current="page" 
                  data-to={l.url} key={k} onClick={this.selectTab}>
                  <span data-lang="es">{l.name.es}</span>
                  <span data-lang="en">{l.name.en}</span>
                  <span data-lang="fr">{l.name.fr}</span>
                  <span data-lang="de">{l.name.de}</span>
                  <span data-lang="br">{l.name.br}</span>
                </li>
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
