import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import homeUrl from "@/lib/navLink";
import AboutIntro from "@/components/AboutIntro";
import ServiceIntro from "@/components/ServiceIntro";
import TestimonialSection from "@/components/TestimonialSection";
import AppDownload from "@/components/AppDownload";
import ReachOut from "@/components/ReachOut";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <header className="header-bg header-service vh-70">
        <Navbar links={homeUrl} login={true} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">We Are More Than</h3>
                  <h1 className="bold color-yellow">Excellent Services</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ServiceIntro />
      <section className="section-starter bg-dark">
        <div className="container">
          <div className="row flex flex-center">
            <div className="col-sm-6">
              <h1 className="bold color-yellow">
                Stolen Vehicles & Ownership Verification
              </h1>
              <div className="mt-15">
                <p>
                  This service is most suitable for users buying locally-used
                  vehicles. Using a vehicle’s Vehicle Identification Number
                  (VIN), a search can be made on our web application
                  (legitcar.ng) to determine if a vehicle has been reported
                  stolen. The vehicle’s License Plate Number is also required to
                  verify the vehicle’s registration and confirm authorisation to
                  sell the vehicle from the registered owner.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src="https://media.istockphoto.com/id/1152628702/photo/car-jacking.jpg?s=612x612&w=0&k=20&c=3kctnQ3cxq7HVBNDyFe1Bc78hI_gmn5gnR_g2Kuqcus="
                alt="service-image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row flex flex-center">
            <div className="col-sm-4">
              <img
                src="https://images.unsplash.com/photo-1611760357505-922600d8ffa6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="service-image"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6">
              <h1 className="bold color-yellow">Vehicle History Report</h1>
              <div className="mt-15">
                <p>
                  We have the Carfax and ClearVin Vehicle History Reports
                  available. This service is most suitable for buyers of
                  foreign-used vehicles that have not been used locally. A
                  vehicle history report chronicles the life of a vehicle
                  abroad, and contains information such as Accident History,
                  Actual Mileage, Maintenance History, Date of Shipping to
                  Nigeria or another destination, type and number of users, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="row flex flex-center">
            <div className="col-sm-6">
              <h1 className="bold color-yellow">
                Vehicle Pre-purchase Inspection
              </h1>
              <div className="mt-15">
                <p>
                  This is the only service where physical contact with a vehicle
                  by a LegitCar team member is required. Before a vehicle
                  purchase is made, a LegitCar Vehicle Inspector physically
                  examines the vehicle, scans all the electronic systems of the
                  vehicle with our state-of-the-art OBD II equipment, and
                  generates an initial report. After analysing the vehicle’s
                  Carfax Report and registration data, a final report which also
                  contains expert purchase advise is issued. This service is
                  suitable for discerning car buyers who need every available
                  information about a vehicle to make an informed vehicle
                  purchase decision.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <img
                src="https://media.istockphoto.com/id/493339728/photo/auto-repair-shop.jpg?s=612x612&w=0&k=20&c=vh4Qm3UrXYpw9OevE3AIeMc3OjLntkM_sSIvSyU9vx0="
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row flex flex-center">
            <div className="col-sm-4">
              <img
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="service-image"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-6">
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
          </div>
        </div>
      </section>
      <AboutIntro />
      <AppDownload />
      <TestimonialSection />
      <ReachOut />
      <Footer />
    </div>
  );
};

export default Services;
