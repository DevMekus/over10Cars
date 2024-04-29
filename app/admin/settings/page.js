import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { adminUrl } from "@/lib/app";
import Link from "next/link";

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
              <div className="card-dark">
                <div className="card-body">
                  <h3 className="color-yellow">New Admin</h3>

                  <form>
                    <div className="mt-40">
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
                        <button className="primary btn-pill">Add Admin</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mt-40">
                <div className="card-body">
                  <h3 className="bold">Administration List</h3>
                  <p className="color-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae repudiandae rem sint repellat. Tempora quod tempore
                    debitis sapiente fuga magnam quae, temporibus totam placeat
                  </p>
                  <div className="mt-15">
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
