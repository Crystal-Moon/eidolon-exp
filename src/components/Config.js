
import { Component } from 'react';

// component
import configIcon from '../assets/imgs/config.svg';
import ItemConfig from './ItemConfig';
import Lang from './Lang';

class Config extends Component {
  constructor(){
    super();
    this.handlerConfig = this.handlerConfig.bind(this);
    this.state = {
      hidden: true
    }
  }

  handlerConfig(){
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    const lang = this.props.lang;
    return (
      <div className={`Config container rounded-start ${this.state.hidden?'hidden':''}`}>
        <div className="align-items-end">
          <img src={configIcon} alt="cfg" className="ConfigIcon bi bi-gear img-thumbnail spinner-border spin" 
            onClick={this.handlerConfig} />
        </div>
        <div className="row list-group rounded-0">
          <ItemConfig lang={lang} />
          <Lang lang={lang} />
        </div>
      </div>
    );
  }
}

export default Config;
