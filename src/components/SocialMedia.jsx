function SocialMedia() {
  return (
    <section id="socialMediaSection">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <h3 className="text-center">My Social Media</h3>
        </div>
        <div className="row text-center">
          <div className="col-6 col-lg-2 p-4">
            <a
              href="http://www.tiktok.com"
              className="text-no-style"
              target="_blank"
            >
              <i className="fa-brands fa-tiktok social-media-icons"></i>
              <p className="lead">Tiktok</p>
            </a>
          </div>
          <div className="col-6 col-lg-2 p-4">
            <a
              href="http://www.instagram.com/ydginting"
              className="text-no-style"
              target="_blank"
            >
              <i className="fa-brands fa-instagram social-media-icons"></i>
              <p className="lead">Instagram</p>
            </a>
          </div>
          <div className="col-6 col-lg-2 p-4">
            <a
              href="https://www.facebook.com/yohanes.damenta.16"
              className="text-no-style"
              target="_blank"
            >
              <i className="fa-brands fa-facebook social-media-icons"></i>
              <p className="lead">Facebook</p>
            </a>
          </div>
          <div className="col-6 col-lg-2 p-4">
            <a
              href="https://www.linkedin.com/in/ydamenta/"
              className="text-no-style"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin social-media-icons"></i>
              <p className="lead">LinkedIn</p>
            </a>
          </div>
          <div className="col-6 col-lg-2 p-4">
            <a
              href="https://www.youtube.com/channel/UCoZYvNWnbD1MTtmNEqUknJw"
              className="text-no-style"
              target="_blank"
            >
              <i className="fa-brands fa-youtube social-media-icons"></i>
              <p className="lead">Youtube</p>
            </a>
          </div>
          <div className="col-6 col-lg-2 p-4">
            <a
              href="http://www.gmail.com"
              className="text-no-style"
              target="_blank"
            >
              <i className="fa-solid fa-envelope social-media-icons"></i>
              <p className="lead">Email</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
