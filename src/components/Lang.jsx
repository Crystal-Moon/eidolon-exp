
import { Component } from 'react';
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
    let lang = e.currentTarget.value;
    this.setState({ lang })
    userConfig.set('lang',lang)
    userConfig.set('hasLang',true)
    Event.emit('lang',{ lang })
  }

  render() {
    return (
      <div className="Lang container list-group-item">
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
