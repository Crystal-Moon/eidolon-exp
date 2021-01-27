
// style
import '../assets/css/Header.css';

// components
import Nav from './Nav';
import Config from './Config';

function Header(props) {
  const lang = props.lang;
  return (
    <header className="Header">
      <Nav lang={lang} />
      <Config lang={lang} />
    </header>
  );
}

export default Header;
