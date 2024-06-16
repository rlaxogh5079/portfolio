import "../styles/NavBar.css";

const NavBar = ({ index }) => {
  return (
    <nav className="navbar is-primary" role="navigation">
      <div className="navbar-menu">
        <div className="is-flex is-justify-content-space-between is-full">
          <a
            className={`navbar-item is-one-quater has-text-white ${
              index === 0 ? "active" : ""
            }`}
          >
            Intro
          </a>
          <a
            className={`navbar-item is-one-quater has-text-white ${
              index === 1 ? "active" : ""
            }`}
          >
            Skills
          </a>
          <a
            className={`navbar-item is-one-quater has-text-white ${
              index === 2 ? "active" : ""
            }`}
          >
            Career
          </a>
          <a
            className={`navbar-item is-one-quater has-text-white ${
              index === 3 ? "active" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
