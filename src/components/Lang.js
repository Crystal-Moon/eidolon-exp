
import { Component } from 'react';
import { Helmet } from 'react-helmet';
import userConfig from '../util/userConfig';

const LANG = [
  { lang: 'es', flag: 'esp' }, 
  { lang: 'en', flag: 'gbr' }, 
  { lang: 'fr', flag: 'fra' }, 
  { lang: 'br', flag: 'bra' }, 
  { lang: 'de', flag: 'deu' }
]

class Lang extends Component {
  constructor(){
    super();
    this.changeLang = this.changeLang.bind(this);
    this.state = {
      lang:'es'
    }
  }

  componentDidMount(){
    let lang = userConfig.get('lang');
    this.setState({ lang })
  }

  changeLang(e){
    console.log('clck en cambiar')
    let lang = e.currentTarget.value;
    this.setState({ lang })
    userConfig.set('lang',lang)
  }

  render() {
    return (
      <div className="Lang container list-group-item">

        <Helmet>
          <link rel="stylesheet" type="text/css" href={`/assets/css/lang/${this.state.lang}.css`} />
          {/* luego quedara: '/eidolon-exp/assets/css/lang/${this.state.lang}.css' */}
        </Helmet>

        <div className="row justify-content-center col-sm-12">
          <span data-lang="es" className="col-sm">Idioma</span>
          <span data-lang="en" className="col-sm">Languages</span>
          <span data-lang="fr" className="col-sm">Langues</span>
          <span data-lang="de" className="col-sm">Sprachen</span>
          <span data-lang="br" className="col-sm">Línguas</span>

          <div className="col-sm-auto" role="group" aria-label="Languages">
            <div className="row">
            {LANG.map(({ lang, flag },k)=> <div className="col-auto" key={k}>
                <input type="radio" className="lang-input" name="lang"
                  id={"lang1"+lang} autoComplete="off" value={lang}
                  onChange={this.changeLang} checked={Boolean(this.state.lang==lang)}
                />
                <label className="lang-lbl" htmlFor={"lang1"+lang}>
                  <img
                    className="img-thumbnail fs-2 lang-flag"
                    src={`https://restcountries.eu/data/${flag}.svg`}
                    alt={lang}
                  />
                </label>
              </div>
            )}
            </div>


          {/*  <input type="radio" className="lang-input"
              name="lang" id="lang1" autoComplete="off" value="es"
              onChange={this.changeLang} checked={Boolean(this.state.lang=='es')}
            />
            <label className="lang-lbl" htmlFor="lang1">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/esp.svg"
                alt="es"
              />
            </label>
            <input type="radio" className="lang-input"
              name="lang" id="lang2" autoComplete="off" value="en"
              onChange={this.changeLang} checked={Boolean(this.state.lang=='en')}
            />
            <label className="lang-lbl" htmlFor="lang2">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/gbr.svg"
                alt="en"
              />
            </label>
            <input type="radio" className="lang-input"
              name="lang" id="lang3" autoComplete="off" value="fr"
              onChange={this.changeLang} checked={Boolean(this.state.lang=='fr')}
            />
            <label className="lang-lbl" htmlFor="lang3">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/fra.svg"
                alt="fr"
              />
            </label>
            <input type="radio" className="lang-input"
              name="lang" id="lang4" autoComplete="off" value="br"
              onChange={this.changeLang} checked={Boolean(this.state.lang=='br')}
            />
            <label className="lang-lbl" htmlFor="lang4">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/bra.svg"
                alt="br"
              />
            </label>
            <input type="radio" className="lang-input"
              name="lang" id="lang5" autoComplete="off" value="de"
              onChange={this.changeLang} checked={Boolean(this.state.lang=='de')}
            />
            <label className="lang-lbl" htmlFor="lang5">
              <img
                className="img-thumbnail fs-2 lang-flag"
                src="https://restcountries.eu/data/deu.svg"
                alt="de"
              />
            </label> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Lang;
