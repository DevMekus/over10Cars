import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dashUrl } from "@/app/lib/navigations";
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
                  <h1 className="bold color-yellow">Reports</h1>
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
              <div>
                <p className="color-black">
                  One of the functions of 10over10 Cars is to protect the
                  properties of citizens. This service is created for members of
                  the public to report their stolen and yet to be recovered
                  vehicles.
                </p>
                <Link href="/dashboard/theft-form">
                  <button className="primary btn-pill">Report theft</button>
                </Link>
              </div>
              <div className="card-dark mt-40">
                <div className="card-body">
                  <h3 className="color-yellow">Latest Reports</h3>
                  <h5 className="color-white">
                    Have you noticed it? You are out of reports.
                  </h5>
                  <p>
                    Get a few reports and regain the power of finding out
                    detailed histories of cars.
                  </p>
                  <button className="mb-20 primary btn-pill">
                    Check your car
                  </button>
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
