import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav className="navbar">
    <ul className="navlinks">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/characters">CHARACTERS</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
