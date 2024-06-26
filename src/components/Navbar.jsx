function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero">
          Yohanes Damenta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#hero">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutSection">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projectSection">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonialSection">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#socialMediaSection">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
