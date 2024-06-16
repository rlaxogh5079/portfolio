import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar is-primary" role="navigation">
      <div className="navbar-menu">
        <div className="is-flex is-justify-content-space-between is-full">
          <a className="navbar-item is-one-quater has-text-white">Intro</a>
          <a className="navbar-item is-one-quater has-text-white">Skills</a>
          <a className="navbar-item is-one-quater has-text-white">Career</a>
          <a className="navbar-item is-one-quater has-text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
