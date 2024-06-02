function Footer() {
  return (
    <section id="footerWebSection" className="p-3 bg-secondary">
      <div className="container">
        <ul className="nav text-center justify-content-center flex-column flex-md-row">
          <li className="nav-item">
            <a className="nav-link text-white" href="#hero">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#aboutSection">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projectSection">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#testimonialSection">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
