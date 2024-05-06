import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { adminUrl } from "@/app/lib/navigations";

const page = () => {
  return (
    <div>
      <header className="header-bg login-bg vh-50">
        <Navbar links={adminUrl} login={false} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">Admin</h3>
                  <h1 className="bold color-yellow">Products</h1>
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
              <div className="card">
                <div className="card-body">
                  <div className="flex space-between align-center">
                    <div>
                      <h3 className="bold">Product Lists</h3>
                      <h5 className="color-black">
                        Have you noticed it? You are out of reports.
                      </h5>
                      <p>
                        Get a few reports and regain the power of finding out
                        detailed histories of cars.
                      </p>
                    </div>
                    <button className="primary btn-pill">Add Product</button>
                  </div>
                  <div className="filter-con">
                    <input type="text" placeholder="Search..." />
                  </div>
                  <div className="mt-40">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">First</th>
                          <th scope="col">Last</th>
                          <th scope="col">Handle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-40">
                <div className="card-body">
                  <h3 className="color-yellow">Pending Product</h3>
                  <h5 className="color-white">
                    Have you noticed it? You are out of reports.
                  </h5>
                  <p>
                    These product where uploaded by the general public and
                    awaits approval.
                  </p>
                  <div className="filter-con">
                    <input type="text" placeholder="Search..." />
                  </div>
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
