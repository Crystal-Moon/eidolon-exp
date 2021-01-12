
import { Component } from 'react';

import Item from "./Item";

class ComboboxItems extends Component {
  render() {
    return (
      <div className="btn-group w-100">
        <button
          className="btn btn-sm btn-select-item dropdown-toggle rounded-0 rounded-end"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="select-item small">
            <Item></Item>
            {}
          </div>
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item small">
            <Item></Item>
            {}
          </li>
          <li className="dropdown-item small"></li>
        </ul>
      </div>
    );
  }
}

export default ComboboxItems;
