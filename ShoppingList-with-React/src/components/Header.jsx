import logo from "./logo.png";

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>Shopping List</h1>
    </header>
  );
}

export default Header;
