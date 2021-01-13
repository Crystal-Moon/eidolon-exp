
import { Component } from 'react';

class United extends Component {
  render() {
  	const unit='unit';
    return (
      <div className="text-center pack">
        <span className="badge">2</span>
        {unit=='pack'?
        <span className="badge">packs</span>
        :
        <span>
          <span className="badge" data-lang="es">unidades</span>
          <span className="badge" data-lang="en">units</span>
          <span className="badge" data-lang="de">aleman</span>
          <span className="badge" data-lang="fr">unités</span>
          <span className="badge" data-lang="br">unidades</span>
        </span>
        }
      </div>
    );
  }
}

export default United;
