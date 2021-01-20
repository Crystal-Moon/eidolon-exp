
import { Component } from 'react';
import { Event } from './util/Event';

// styles
import './assets/css/gral.css';

// componenst
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.changeLang = this.changeLang.bind(this);
    this.state={
      lang: 'es',
    }
    Event.on('lang', this.changeLang)
  }

  changeLang({ lang }){
    this.setState({ lang })
  }

  render(){
   return (
    <div className="App">
      <Header lang={this.state.lang} />
      <Main lang={this.state.lang} />
      <Footer lang={this.state.lang} />
    </div>
   );
  }
}

export default App;
