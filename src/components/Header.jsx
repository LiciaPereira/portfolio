import logo from "../assets/logo2.png";
import "./Layout.scss";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
