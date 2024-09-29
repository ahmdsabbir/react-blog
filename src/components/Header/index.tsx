import { Link } from "react-router-dom";
function Header() {
  return(
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;