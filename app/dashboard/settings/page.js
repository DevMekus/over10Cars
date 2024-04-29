import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOut from "@/components/ReachOut";
import AppDownload from "@/components/AppDownload";
import { dashUrl } from "@/lib/app";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <header className="header-bg login-bg vh-50">
        <Navbar links={dashUrl} login={false} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">Dashboard</h3>
                  <h1 className="bold color-yellow">Account Settings</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="card-dark mt-40">
                <div className="card-body">
                  <h3 className="color-yellow">Settings</h3>
                  <p className="color-whites">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae repudiandae rem sint repellat. Tempora quod tempore
                    debitis sapiente fuga magnam quae, temporibus totam placeat
                  </p>

                  <form>
                    <div className="mt-40">
                      <h5 className="color-white">Edit your personal data</h5>
                      <p>
                        Provide us with some information about you. <br />
                      </p>
                      <div className="mt-15 container">
                        <div className="row">
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="First name"
                              required
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="Last name"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="Email address"
                              required
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="Phone number"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-15">
                        <button className="primary btn-pill">
                          Save settings
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
