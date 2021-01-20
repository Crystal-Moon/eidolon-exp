
//import { Component } from 'react';
import TXT from '../lang/mini.json';

function IsEqualsTo(props) {
  //render() {
  const lang = props.lang;
    return (
      <div className="IsEqualsTo text-center mb-2 mt-2">
        <span className="badge equals-to-text">{ TXT.isEquals[lang] }</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="img-thumbnail text-center equals-to-arrow equals-to-arrow-right bi bi-arrow-right-square-fill expand-md-hidden"
          viewBox="0 0 16 16"
        >
          <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="img-thumbnail text-center equals-to-arrow equals-to-arrow-down bi bi-arrow-down-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
        </svg>
      </div>
    );
  //}
}

export default IsEqualsTo;
