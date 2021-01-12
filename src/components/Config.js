import React from "react";
import ConfigIcon from "./ConfigIcon";
import ItemConfig from "./ItemConfig";
import Lang from "./Lang";

class Config extends React.Component {
  render() {
    return (
      <div className="Config container rounded-start hidden">
        <div className="align-items-end">
          {}
          {}
          {}
          <ConfigIcon></ConfigIcon>
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
