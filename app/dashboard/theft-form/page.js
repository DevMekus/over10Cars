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
                  <h1 className="bold color-yellow">Report Car Theft</h1>
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
                  <h3 className="color-yellow">Report Theft</h3>
                  <p className="color-whites">
                    One of the functions of 10over10 Cars is to protect the
                    properties of citizens. This service is created for members
                    of the public to report their stolen and yet to be recovered
                    vehicles.
                  </p>

                  <form>
                    <div className="mt-40">
                      <h5 className="color-white">Personal Information</h5>
                      <p>
                        Provide us with some information about you. <br />
                        This information will help us verify the authenticity of
                        your claims and documents.
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
                        <h5 className="color-white">Car Information</h5>
                        <p>
                          Provide us with some information about the car. <br />
                          Vim, Type, Color etc will help us identify.
                        </p>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="firstName"
                            placeholder="Chassis number"
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="Type"
                              required
                            />
                          </div>
                          <div className="col-sm-3">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="Model"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-15">
                        <h5 className="color-white">Theft Information</h5>
                        <p>
                          Provide us with some information about the car. <br />
                          Vim, Type, Color etc will help us identify.
                        </p>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="firstName"
                            placeholder="Location"
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-sm-2">
                            <input
                              type="text"
                              className="Day"
                              placeholder="Day"
                              required
                            />
                          </div>
                          <div className="col-sm-2">
                            <input
                              type="text"
                              className="firstName"
                              placeholder="Month"
                              required
                            />
                          </div>
                          <div className="col-sm-2">
                            <input
                              type="text"
                              className="Year"
                              placeholder="Year"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-15">
                        <p>
                          By submitting this form, You agree to the Terms &
                          Conditions guiding this exercise, and certify that the
                          information provided is true and authentic
                        </p>
                        <p>
                          I agree with the
                          <Link href="/dashboard/theft-form">
                            Terms & Condition
                          </Link>
                        </p>
                        <button className="primary btn-pill">
                          Report theft
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
