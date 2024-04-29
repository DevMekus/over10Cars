"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReachOut from "@/components/ReachOut";
import AppDownload from "@/components/AppDownload";
import { dashUrl } from "@/lib/app";
import useAuth from "@/hooks/useAuth";

const Dashboard = () => {
  const router = useRouter();
  const { isLoading, isLoggedIn } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    setTimeout(() => {
      router.push("/auth/login?auth=f");
    }, 2000);
    return <div>Access Denied. Please log in to access the dashboard.</div>;
  }

  return (
    <div>
      <header className="header-bg login-bg vh-50">
        <Navbar links={dashUrl} login={false} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white"> Welcome Nnaji Nnaemeka</h3>
                  <h1 className="bold color-yellow">Dashboard</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="card-dark">
                <div className="card-body">
                  <h3 className="color-yellow">Latest Reports</h3>
                  <p>You don’t have any purchased reports yet</p>
                  <button className="mb-20 primary btn-pill">
                    Check your car
                  </button>
                </div>
              </div>
              <div className="card card-dark mt-15">
                <div className="card-body">
                  <h3 className="color-yellows">Transactions</h3>
                  <p>You don’t have any transaction reports yet</p>
                  <button className="mb-20 primary btn-pill">
                    Check your car
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <div className="flex space-between">
                    <h4>Prepaid Reports</h4>
                    <h4>0</h4>
                  </div>
                  <p>prepaid vehicle history reports available to you.</p>
                </div>
              </div>
              <div className="card mt-15">
                <div className="card-body">
                  <div className="flex space-between">
                    <h4>Checked your vehicles</h4>
                  </div>
                  <p>
                    Don't miss your chance to get a complete vehicle history.
                  </p>
                  <div className="mt-15">
                    <input type="text" placeholder="Enter Vin Number" />
                    <button className="mb-20 primary btn-pill">
                      Check Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReachOut />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Dashboard;
