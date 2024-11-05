
import { Component } from 'react';
import { Event } from '../util/Event';

// components
import SectionManual from './SectionManual';
import SectionCalc from './SectionCalc';
import SectionCompare from './SectionCompare';

class Main extends Component {
  constructor(){
    super();
    this.changeTab = this.changeTab.bind(this);
    this.state={
      tab: 'calculator'
    }
    Event.on('changeTab', this.changeTab);
  }

  changeTab({ tab }){
    this.setState({ tab })
  }


  render(){
    const lang = this.props.lang;
    return (
      <main>
      { 
        (this.state.tab=='calculator')? <SectionCalc lang={lang}/>
        : (this.state.tab=='compare')? <SectionCompare lang={lang}/>
        : <SectionManual lang={lang}/>
      }
      </main>
     );
  }
}

export default Main;
