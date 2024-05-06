import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { homeUrl } from "@/app/lib/navigations";
import AboutIntro from "@/components/AboutIntro";
import ServiceIntro from "@/components/ServiceIntro";
import TestimonialSection from "@/components/TestimonialSection";
import AppDownload from "@/components/AppDownload";
import ReachOut from "@/components/ReachOut";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <header className="header-bg header-about vh-70">
        <Navbar links={homeUrl} login={true} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">We Are More Than</h3>
                  <h1 className="bold color-yellow">
                    A Car Verification Company
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <h3 className="color-white">10over10 Cars</h3>
              <h1 className="bold color-yellow">
                Your Go-To for Buying, Selling and Owning a Vehicle
              </h1>
              <div className="mt-15">
                <h4 className="color-white">
                  What if you had a digital dashboard for your car ownership
                  needs?
                </h4>
                <p>
                  A place where you can access regularly updated vehicle history
                  reports, compare vehicles, shop for the best auto insurance
                  rates, get instant market value appraisal and so much more.
                  Whether you’re shopping for a new car, comparing auto
                  insurance policies or looking to sell an existing vehicle,
                  Bumper has you covered every step of the way.
                </p>
              </div>
            </div>
            <div className="col-sm-5">
              <img
                src="http://localhost/10over10cars/assets/about-main-image.png"
                alt="about-image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutIntro />
      <ServiceIntro />
      <section className="section-starter bg-dark">
        <div className="container">
          <div className="row flex flex-center">
            <div className="col-sm-6">
              <h3 className="color-white">Service..</h3>
              <h1 className="bold color-yellow">Run vehicle history reports</h1>
              <div className="mt-15">
                <p>
                  10over10 Cars compiles reliable, up-to-date information from
                  NMVTIS, JD Power, NHTSA, and many other top industry leaders
                  data sources, including government agencies, insurance
                  providers and car industry partners. Search by license plate,
                  vehicle identification number (VIN) or make and model to find
                  vehicle history reports, market value data, in-depth ownership
                  costs and more.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src="http://localhost/10over10cars/assets/history-reports.png"
                alt="service-image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row flex flex-center">
            <div className="col-sm-4">
              <img
                src="http://localhost/10over10cars/assets/exclusive-features.png"
                alt="service-image"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6">
              <h3 className="color-white">Service..</h3>
              <h1 className="bold color-yellow">
                Get exclusive features available through 10over10 Cars
              </h1>
              <div className="mt-15">
                <p>
                  Your 10over10 Cars subscription includes access to Bumper
                  Connect, a powerful tool that lets you monitor real-time data
                  from your Wi-Fi enabled car. Get suggested car maintenance
                  reminders, tire pressure gauge, odometer readings and so much
                  more right from your smartphone.
                </p>
              </div>
            </div>
          </div>
          <div className="row flex flex-center">
            <div className="col-sm-6">
              <h3 className="color-white">Service..</h3>
              <h1 className="bold color-yellow">
                Shop Marketplace for your next vehicle
              </h1>

              <div className="mt-15">
                <p>
                  Browse and monitor new and used cars from more than 50,000
                  dealerships nationwide. Set up alerts to receive real-time
                  updates on any vehicles you may be considering buying.
                </p>
                <Link href="/cars">
                  <button className="btn-pill btn-outline hover-border-white color-yellow mt-15">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="service-image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <AppDownload />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default page;
