import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOut from "@/components/ReachOut";

import { dashUrl } from "@/app/lib/navigations";

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
                  <h1 className="bold color-yellow">Transactions</h1>
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
                  <h3 className="color-yellow">Latest Transaction</h3>
                  <h5 className="color-white">
                    You haven't made any transactions yet
                  </h5>
                  <p>
                    Make a transactions now to get a detailed information and a
                    complete history report of your vehicle.
                  </p>
                  <p>
                    Get a few reports and regain the power of finding out
                    detailed histories of cars.
                  </p>
                  <button className="mb-20 primary btn-pill">
                    Check your car
                  </button>
                </div>
              </div>
              <div className="card mt-15">
                <div className="card-body">
                  <h3>Buy a Car</h3>
                  <p className="color-black">
                    Get a few reports and regain the power of finding out
                    detailed histories of cars.
                  </p>
                  <button className="mb-20 primary btn-pill">Buy Now</button>
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
