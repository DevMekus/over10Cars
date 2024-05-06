import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarFilter from "@/components/CarFilter";
import AboutIntro from "@/components/AboutIntro";
import ServiceIntro from "@/components/ServiceIntro";
import TestimonialSection from "@/components/TestimonialSection";
import AppDownload from "@/components/AppDownload";
import ReachOut from "@/components/ReachOut";
import { homeUrl } from "@/app/lib/navigations";
import { carTypes, carBrands } from "@/app/lib/app";

const page = () => {
  return (
    <main>
      <header className="header-bg header-home vh-90">
        <Navbar links={homeUrl} login={true} />
        <div className="container ">
          <div className="row header-text">
            <div className="col-sm-6">
              <p>Verify your</p>
              <h1>Vehicle History</h1>
              <p>and save thousands</p>
              <div className="hero-cta">
                <button className="primary btn-pill">Learn More</button>
                <button className="btn-pill btn-outline hover-border-white color-yellow">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="business-summary">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card-bg">
                <div className="summary-step">
                  <div className="process-step">
                    <h1>1</h1>
                  </div>
                  <h4>Enter Your Car’s VIN</h4>
                  <p>
                    The VIN is the only thing you need to know. Your 17-digit
                    VIN can be found in car documents.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card-bg">
                <div className="summary-step">
                  <div className="process-step">
                    <h1>2</h1>
                  </div>
                  <h4>process bg-yellow</h4>
                  <p>
                    Report contains a vast amount of information! Just check it
                    out!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card-bg">
                <div className="summary-step">
                  <div className="process-step">
                    <h1>3</h1>
                  </div>
                  <h4>Get Vehicle History Report</h4>
                  <p>
                    Get detailed information, a full car history report, and
                    make an informed decision about your purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutIntro />
      <ServiceIntro />
      <section className="car-section header-bg section-starter">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="color-white">
                Don't know what are you looking for? Start with type
              </h3>
              <h1 className="bold color-yellow">Buy your dream car</h1>
              <div className="mt-40">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="filter bg-whites">
                      <h5 className="color-white">Select Type</h5>
                      <div className="items-yellow">
                        <CarFilter carInfo={carTypes} />
                      </div>
                      <div className="mt-15 items-yellow">
                        <h5 className="color-white">Select Brand</h5>
                        <CarFilter carInfo={carBrands} />
                      </div>
                      <div className="mt-15">
                        {" "}
                        <button className="primary btn-pill">View More</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="car-display">
                      <div className="product">
                        <div
                          className="car-image"
                          style={{
                            backgroundImage:
                              "url(https://images.unsplash.com/photo-1618863114786-d501cae6d853?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                          }}
                        ></div>
                        <div className="addToCart">
                          <button className="addCart">
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>
                        <div className="car-info">
                          <h5 className="color-white">
                            <span className="color-yellow">Used</span>{" "}
                            <span className="bold">2020 Ford Ranger</span>
                          </h5>
                          <div className="w-100 flex space-between align-center mt-15">
                            <i className="fas fa-gears color-yellow"></i>
                            <p className="color-white">1FTER4EH7LLA61477</p>
                          </div>
                          <div className="mt-15">
                            {" "}
                            <button className="primary btn-pill">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product">
                        <div
                          className="car-image"
                          style={{
                            backgroundImage:
                              "url(https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                          }}
                        ></div>
                        <div className="addToCart">
                          <button className="addCart">
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>
                        <div className="car-info">
                          <h5 className="color-white">
                            <span className="color-yellow">Used</span>{" "}
                            <span className="bold">2020 Ford Ranger</span>
                          </h5>
                          <div className="w-100 flex space-between align-center mt-15">
                            <i className="fas fa-gears color-yellow"></i>
                            <p className="color-white">1FTER4EH7LLA61477</p>
                          </div>
                          <div className="mt-15">
                            {" "}
                            <button className="primary btn-pill">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <AppDownload />
      <ReachOut />
      <Footer />
    </main>
  );
};

export default page;
