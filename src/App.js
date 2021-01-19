
import { Component } from 'react';
import { Event } from './util/Event';

// styles
import './assets/css/gral.css';

// componenst
import Header from './components/Header';
import SectionManual from './components/SectionManual';
import SectionCalc from './components/SectionCalc';
import SectionCompare from './components/SectionCompare';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.changeTab = this.changeTab.bind(this);
    this.state={
      tab: 'manual'
    }
    Event.on('changeTab', this.changeTab)
  }

  changeTab({ tab }){
    this.setState({ tab })
  }

  render(){
   return (
    <div className="App">
      <Header />
      <main>
      { 
        (this.state.tab=='calculator')? <SectionCalc />
        : (this.state.tab=='compare')? <SectionCompare />
        : <SectionManual />
      }
      </main>
      <Footer />
    </div>
   );
  }
}

export default App;
