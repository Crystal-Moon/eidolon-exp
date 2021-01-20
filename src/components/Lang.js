
import { Component } from 'react';
//import { Helmet } from 'react-helmet';
import userConfig from '../util/userConfig';
import { Event } from '../util/Event';

// lang
import TXT from '../lang/header.json';

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
    Event.emit('lang',{ lang })
  }

  changeLang(e){
    console.log('clck en cambiar')
    let lang = e.currentTarget.value;
    this.setState({ lang })
    userConfig.set('lang',lang)
    Event.emit('lang',{ lang })
  }

  render() {
    //const lang = this.props.lang;
    return (
      <div className="Lang container list-group-item">

      {/*  <Helmet>
          <link rel="stylesheet" type="text/css" href={`/assets/css/lang/${this.state.lang}.css`} />
           luego quedara: '/eidolon-exp/assets/css/lang/${this.state.lang}.css' 
        </Helmet>  */}

        <div className="row justify-content-center col-sm-12">
          <span className="col-sm">{ TXT.lang[this.state.lang] }</span>
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

          </div>
        </div>
      </div>
    );
  }
}

export default Lang;
