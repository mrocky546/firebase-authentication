import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">LogIn</Link>
      <Link to="/login1">login1</Link>
      <Link to='/Login2' >Login2</Link>
      <Link to="/github">GitHub</Link>
    </div>
  );
};

export default Header;
