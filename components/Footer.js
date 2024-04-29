import Link from "next/link";
const Footer = () => {
  return (
    <section className="services-section section-starter bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo-section">
              <Link href="/">
                <img
                  src="/logo-black-edit.jpg"
                  alt="logo"
                  className="img-fluid nav-logo"
                />
              </Link>
            </div>
            <p className="mt-15">
              Rent a car imperdiet sapien porttito the bibenum ellentesue the
              commodo erat nesuen.
            </p>
            <div className="mt-15 flex gap-10 align-center">
              <div className="icon-wrap wrap-primary">
                <i className="fab fa-facebook"></i>
              </div>
              <div className="icon-wrap wrap-primary">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="icon-wrap wrap-primary">
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div>
              <h4 className="footer-heading color-yellow">Quick Links</h4>
              <ul className="quick-link mt-15">
                <li className="link-wrap">
                  <Link href="/about" className="footer-link">
                    About
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/cars" className="footer-link">
                    Cars
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/service" className="footer-link">
                    Services
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/team" className="footer-link">
                    Team
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/contact" className="footer-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div>
              <h4 className="footer-heading color-yellow">Resources</h4>
              <ul className="quick-link mt-15">
                <li className="link-wrap">
                  <Link href="/" className="footer-link">
                    About
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/" className="footer-link">
                    Cars
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/" className="footer-link">
                    Services
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/" className="footer-link">
                    Team
                  </Link>
                </li>
                <li className="link-wrap">
                  <Link href="/" className="footer-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
              <h4 className="footer-heading color-yellow">Subscribe</h4>
              <p className="mt-15">
                Want to be notified about our services. Just sign up and we'll
                send you a notification by email.
              </p>
              <div className="mt-15">
                <div className="flex gap-10 align-center">
                  <input type="text" placeholder="Email Address" />
                  <div className="icon-wrap wrap-primary">
                    <span className="material-symbols-outlined">
                      mark_email_read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
