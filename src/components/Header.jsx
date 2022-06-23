import { Link } from "react-router-dom";
import { Nav } from "./HeaderStyles";

const Header = () => {
  return (
    <>
    <Nav>
      <h4>Chicho ReactJS</h4>
      <div className="links">
        <Link className="link" to="first">First Challenge</Link>
        <Link className="link" to="second">Second Challenge</Link>
        <Link className="link" to="third">Third Challenge</Link>
        <Link className="link" to="fourth">Fourth Challenge</Link>
      </div>
    </Nav>
    </>
  );
};

export default Header;
