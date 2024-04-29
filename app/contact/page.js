import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import homeUrl from "@/lib/navLink";
import ReachOut from "@/components/ReachOut";
import AppDownload from "@/components/AppDownload";

const page = () => {
  return (
    <div>
      <header className="header-bg header-contact vh-70">
        <Navbar links={homeUrl} login={true} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">Get in touch</h3>
                  <h1 className="bold color-yellow">Contact us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter bg-dark" id="about">
        <div className="contact-box">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="process bg-yellow">
                  <div className="process-step">
                    <h1>
                      <i className="fas fa-clock"></i>
                    </h1>
                  </div>
                  <div>
                    <h4 className="process-title">Opening Hours</h4>
                    <p>Mon-Sun: 8 AM - 7 PM</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="process bg-yellow active">
                  <div className="process-step">
                    <h1>
                      <i className="fas fa-phone"></i>
                    </h1>
                  </div>
                  <div>
                    <h4 className="process-title">Call us</h4>
                    <p>+971 52-333-4444</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-3">
                <div className="process bg-yellow">
                  <div className="process-step">
                    <h1>
                      <i className="fas fa-home"></i>
                    </h1>
                  </div>
                  <div>
                    <h4 className="process-title">Our address</h4>
                    <p>Dubai, Water Tower, Office 123</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="process bg-yellow active">
                  <div className="process-step">
                    <h1>
                      <i className="fas fa-envelope"></i>
                    </h1>
                  </div>
                  <div>
                    <h4 className="process-title">Email us</h4>
                    <p>info@renax.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-starter contact-form-bg">
        <div className="contact-form-area">
          <div className="container">
            <div className="row flex flex-center">
              <div className="col-sm-5">
                <div>
                  <h3>Get in touch</h3>
                  <h1 className="bold color-yellow">Contact us</h1>
                </div>
                <form className="contact-form mt-40">
                  <div className="flex gap-10">
                    <input type="text" placeholder="Your Name*" className="" />
                    <input type="text" placeholder="Your Email*" className="" />
                  </div>
                  <div className="flex gap-10">
                    <input
                      type="text"
                      placeholder="Your Number*"
                      className=""
                    />
                    <input type="text" placeholder="Subject*" className="" />
                  </div>
                  <div className="flex gap-10">
                    <textarea placeholder="Message*" rows="6"></textarea>
                  </div>
                  <div className="hero-cta mt-15">
                    <button className="btn-dw btn-pill primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <div className="contact-form into-image">
                  <img
                    src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="contact"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppDownload />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default page;
