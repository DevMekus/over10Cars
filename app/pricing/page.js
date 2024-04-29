import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import homeUrl from "@/lib/navLink";
import ReachOut from "@/components/ReachOut";
import myFunction from "@/lib/app";

const page = () => {
  return (
    <div>
      <header className="header-bg header-pricing vh-70">
        <Navbar links={homeUrl} login={true} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">PRICING PLAN</h3>
                  <h1 className="bold color-yellow">Pricing Packegas</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="pricing">
                <div className="absolute">
                  <div className="pricing-wrap wrap-primary">$150</div>
                </div>
                <h5>Standart Plan</h5>
                <p className="color-yellow">PER DAY</p>
                <div className="mt-40">
                  <ul>
                    <li>Lorem isum amet in the mis</li>
                    <li>Vestibulum drana silver</li>
                    <li>Elentesue habitant farmen</li>
                    <li>Vivamus esse nis drana</li>
                  </ul>
                </div>
                <div className="mt-40">
                  <button className="primary btn-pill">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing">
                <div className="absolute">
                  <div className="pricing-wrap wrap-primary">$150</div>
                </div>
                <h5>Standart Plan</h5>
                <p className="color-yellow">PER DAY</p>
                <div className="mt-40">
                  <ul>
                    <li>Lorem isum amet in the mis</li>
                    <li>Vestibulum drana silver</li>
                    <li>Elentesue habitant farmen</li>
                    <li>Vivamus esse nis drana</li>
                  </ul>
                </div>
                <div className="mt-40">
                  <button className="primary btn-pill">Get Started</button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="pricing">
                <div className="absolute">
                  <div className="pricing-wrap wrap-primary">$150</div>
                </div>
                <h5>Standart Plan</h5>
                <p className="color-yellow">PER DAY</p>
                <div className="mt-40">
                  <ul>
                    <li>Lorem isum amet in the mis</li>
                    <li>Vestibulum drana silver</li>
                    <li>Elentesue habitant farmen</li>
                    <li>Vivamus esse nis drana</li>
                  </ul>
                </div>
                <div className="mt-40">
                  <button className="primary btn-pill">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReachOut />
      <Footer />
    </div>
  );
};

export default page;
