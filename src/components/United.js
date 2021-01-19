
import { Component } from 'react';

function United(props) {

  	//const unit='unit';
    let { cant=1 } = props;
    let pack = Boolean(cant>=100)
    cant= pack? Math.trunc(cant/100) : cant
    return ( pack?
      <div className="text-center pack">
        <span className="badge">{cant}</span>
        <span className="badge">packs</span>
      </div>
      :
      <div className="text-center">
        <span className="badge">{cant}</span>
        <span className="badge">
          <span data-lang="es">unidades</span>
          <span data-lang="en">units</span>
          <span data-lang="de">einheiten</span>
          <span data-lang="fr">unités</span>
          <span data-lang="br">unidades</span>
        </span>
      </div>
    );
  
}

export default United;

/*
return ( pack?
      <div className="text-center pack">
        <span className="badge">{pack}</span>
        <span className="badge">packs</span>
      </div>
      :
      <div className="text-center">
        <span className="badge">{cant}</span>
        <span>
          <span className="badge" data-lang="es">unidades</span>
          <span className="badge" data-lang="en">units</span>
          <span className="badge" data-lang="de">einheiten</span>
          <span className="badge" data-lang="fr">unités</span>
          <span className="badge" data-lang="br">unidades</span>
        </span>
      </div>
    );
    */