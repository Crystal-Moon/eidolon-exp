
import TXT from '../lang/mini.json';

function United(props) {
  const lang = props.lang;
  let { cant=1 } = props;
  let pack = Boolean(cant>=100)
  cant = pack? Math.trunc(cant/100) : cant
  return ( 
    pack?
      <div className="text-center pack">
        <span className="badge">{cant}</span>
        <span className="badge">{ TXT.pack[lang] }</span>
      </div>
      :
      <div className="text-center">
        <span className="badge">{cant}</span>
        <span className="badge">{ TXT.united[lang] }</span>
      </div>
  );
}

export default United;
