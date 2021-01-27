
import { Component } from 'react';
import { Event } from './util/Event';
import userConfig from './util/userConfig';

// styles
import './assets/css/gral.css';

// components
import configIcon from './assets/imgs/config.svg';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.changeLang = this.changeLang.bind(this);
    this.state={
      lang: 'es',
      hasLang: false
    }
    Event.on('lang', this.changeLang)
  }

  componentDidMount(){
    let hasLang = userConfig.get('hasLang');
    this.setState({ hasLang })
  }

  changeLang({ lang }){
    this.setState({ lang })
  }

  render(){
   return (
    <div className="App">
      {
       !this.state.hasLang?
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          <span>You can select the language in the setting. <img src={configIcon} alt="cfg" className="spin"/></span>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" 
            onClick={()=>userConfig.set('hasLang',1)}></button>
        </div> : <div></div>
      }

      <Header lang={this.state.lang} />
      <Main lang={this.state.lang} />
      <Footer lang={this.state.lang} />
    </div>
   );
  }
}

export default App;
