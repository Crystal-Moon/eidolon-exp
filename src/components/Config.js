
import { Component } from 'react';

// component
import configIcon from '../assets/imgs/config.svg';
//import ConfigIcon from "./ConfigIcon";
import ItemConfig from "./ItemConfig";
import Lang from "./Lang";

class Config extends Component {
  render() {
    return (
      <div className="Config container rounded-start hidden">
        <div className="align-items-end">
          {}
          {}
          {}
          {/* <ConfigIcon></ConfigIcon> */}
          <img src={configIcon} alt="" className="ConfigIcon bi bi-gear img-thumbnail spinner-border spin" onclick="hideShowConfig(this)" />
        </div>
        <div className="row list-group rounded-0">
          <ItemConfig></ItemConfig>
          {}
          {}
          <Lang></Lang>
          {}
        </div>
        {}
      </div>
    );
  }
}

export default Config;
