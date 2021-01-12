import React from "react";
import United from "./United";
import Item from "./Item";

class ItemNeed extends React.Component {
  render() {
    return (
      <li className="ItemNeed list-group-item need-list-item">
        <div className="align-items-center row">
          <div className="col-3">
            <div className="justify-content-around row need-btns">
              <button
                type
                className="btn col-auto col-sm-auto need-btn btn-primary"
              >
                +
              </button>
              <button
                type
                className="btn col-auto col-sm-auto need-btn btn-primary"
              >
                -
              </button>
            </div>
          </div>
          <div className="col-9">
            <div className="justify-content-around align-items-center row">
              <div className="col-sm3">
                <United></United>
              </div>
              <div className="col-sm-9">
                <Item></Item>
                {}
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ItemNeed;
