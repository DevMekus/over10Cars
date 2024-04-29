"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { dashUrl } from "@/lib/app";
import { useEffect } from "react";

const page = () => {
  function openReportCard() {
    const reportCard = document.querySelectorAll(".report-card");
    const reportCont = document.querySelectorAll(".report-content");

    for (let i = 0; i < reportCard.length; i++) {
      reportCard[i].addEventListener("click", () => {
        let id = reportCard[i].getAttribute("id");

        for (let j = 0; j < reportCont.length; j++) {
          let conId = reportCont[j].getAttribute("data-content");

          if (id == conId) {
            reportCont[j].classList.add("active-content");
          } else {
            reportCont[j].classList.remove("active-content");
          }
        }
      });
    }
  }

  useEffect(() => {
    openReportCard();
  }, []);

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
                  <h1 className="bold color-yellow">Vehicle Report</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="card-dark report-card" id="summary">
                <div className="card-body">
                  <h5 className="color-yellow">Summary</h5>
                  <div className="report-content" data-content="summary">
                    <div className="report-details">
                      <div className="report-summary">
                        <div className="summary-wrap sectionHover">
                          <div className="summary">
                            <span className="material-symbols-outlined greenColor">
                              task_alt
                            </span>
                            <div className="info">
                              <h5>Odometer</h5>
                              <p>No problem found</p>
                            </div>
                          </div>
                        </div>
                        <div className="summary-wrap sectionHover">
                          <div className="summary">
                            <span className="material-symbols-outlined redColor redColor">
                              warning
                            </span>
                            <div className="info">
                              <h5>Accidents</h5>
                              <p>3 problem found</p>
                            </div>
                          </div>
                        </div>
                        <div className="summary-wrap sectionHover">
                          <div className="summary">
                            <span className="material-symbols-outlined greenColor">
                              task_alt
                            </span>
                            <div className="info">
                              <h5>Sales History</h5>
                              <p>7 records found</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="report-summary">
                        <div className="summary-wrap sectionHover">
                          <div className="summary">
                            <span className="material-symbols-outlined greenColor">
                              task_alt
                            </span>
                            <div className="info">
                              <h5>Open Safety Recalls</h5>
                              <p>No problem found</p>
                            </div>
                          </div>
                        </div>
                        <div className="summary-wrap sectionHover">
                          <div className="summary">
                            <span className="material-symbols-outlined redColor">
                              warning
                            </span>
                            <div className="info">
                              <h5>Mileage</h5>
                              <p>9,920 Last reading</p>
                            </div>
                          </div>
                        </div>
                        <div className="summary-wrap sectionHover">
                          <div className="summary">
                            <span className="material-symbols-outlined greenColor">
                              task_alt
                            </span>
                            <div className="info">
                              <h5>Owners</h5>
                              <p>7 records found</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-40">
                        <div className="car-report-summary row">
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    calendar_month
                                  </span>
                                  <div className="info">
                                    <h5>2002</h5>
                                    <p>Year</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    brand_family
                                  </span>
                                  <div className="info">
                                    <h5>BMW</h5>
                                    <p>Make</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    model_training
                                  </span>
                                  <div className="info">
                                    <h5>X5</h5>
                                    <p>Model</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    content_cut
                                  </span>
                                  <div className="info">
                                    <h5>xDrive35i</h5>
                                    <p>Trim</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    developer_mode
                                  </span>
                                  <div className="info">
                                    <h5>3L</h5>
                                    <p>Engine</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    engineering
                                  </span>
                                  <div className="info">
                                    <h5>Made</h5>

                                    <p>USA</p>
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
              </div>
              <div className="card-dark mt-15 report-card" id="ownership">
                <div className="card-body">
                  <h5 className="color-yellow">Ownership history</h5>
                  <div className="report-content" data-content="ownership">
                    <div className="report-details">
                      <div className="owner-wrap">
                        <div className="flex gap-10 fullwidth align-center">
                          <div className="icon-wrap wrap-primary border-bottom-primary">
                            <span className="material-symbols-outlined">
                              person
                            </span>
                          </div>
                          <h4 className="color-white">1st owner</h4>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>Miles driven per year:</p>
                          </div>
                          <div className="value">
                            <p className="bold redColor">4,469 mi</p>
                          </div>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>Odometer reading:</p>
                          </div>
                          <div className="value">
                            <p className="bold greenColor">2,622 mi</p>
                          </div>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>Purchased in:</p>
                          </div>
                          <div className="value">
                            <p className="bold">2008</p>
                          </div>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>Estimate length of use:</p>
                          </div>
                          <div className="value">
                            <p className="bold">0yrs. 7mo.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="odometer">
                <div className="card-body">
                  <h5 className="color-yellow">Odometer Check</h5>
                  <div className="report-content" data-content="odometer">
                    {" "}
                    <div className="report-details">
                      <div className="odometer-check sectionSpace">
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>
                              <span className="bold">Odometer:</span> Not Actual
                            </p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor icon"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>
                              <span className="bold">Odometer:</span> Tampering
                              Verified
                            </p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor icon"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>
                              <span className="bold">Odometer:</span> Replaced
                            </p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor icon"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                        <div className="flex fullwidth space-between align-center">
                          <div className="data">
                            <p>
                              <span className="bold">Odometer:</span> Reading at
                              Time of Renewal
                            </p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor icon"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="safety">
                <div className="card-body">
                  <h5 className="color-yellow">Open Safety</h5>
                  <div className="report-content" data-content="safety">
                    <div className="report-details">
                      <div className="sectionSpace">
                        <div className="check sectionSpace border-bottom-primary">
                          <p>
                            <span className="bold redColor"> Jul 30, 2021</span>
                            <br />
                            21V586000
                          </p>
                          <p className="greenColor bold">
                            FUEL SYSTEM, DIESEL:DELIVERY:FUEL PUMP
                          </p>
                          <p className="sectionSpace">
                            BMW of North America, LLC (BMW) is recalling certain
                            2014-2018 328d, 328d xDrive, X5 xDrive35d, 2014-2016
                            535d, 535d xDrive, 2015 740Ld xDrive, and 2015-2017
                            X3 xDrive28d vehicles. The high-pressure fuel pump
                            may fail.
                          </p>
                        </div>
                        <div className="check sectionSpace border-bottom-primary">
                          <p>
                            <span className="bold redColor"> Jul 30, 2021</span>
                            <br />
                            21V586000
                          </p>
                          <p className="greenColor bold">
                            EQUIPMENT:ELECTRICAL
                          </p>
                          <p className="sectionSpace">
                            BMW of North America, LLC (BMW) is recalling certain
                            2018 BMW 330e iPerformance, i3 Rex, i3 Sport Rex, X5
                            xDrive40e, i3 BEV, i3 Sport BEV and 2019 i8 and i8
                            Roadster vehicles and 2018-2019 530e iPerformance,
                            530e xDrive iPerformance and 740Le xDrive
                            iPerformance vehicles. Capacitors within the
                            TurboCord Portable Chargers may fail, possibly
                            resulting in a shock hazard or a fire.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="thistory">
                <div className="card-body">
                  <h5 className="color-yellow">Title History Information</h5>
                  <div className="report-content" data-content="thistory">
                    <div className="report-details">
                      <div className="sectionSpace">
                        <h5 className="greenColor">
                          Current Title Information
                        </h5>
                        <table id="myTable" className="table sectionSpace">
                          <thead>
                            <tr>
                              <th scope="col">Title Issue Date</th>
                              <th scope="col">State</th>
                              <th scope="col">Mileage</th>
                              <th scope="col">Event</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Jun 11, 2019</th>
                              <td>Abuja</td>
                              <td>6,251 mi</td>
                              <td>Title and Registration</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="sectionSpace">
                        <h5 className="greenColor">
                          Historical Title Information
                        </h5>
                        <table className="table sectionSpace">
                          <thead>
                            <tr>
                              <th scope="col">Title Issue Date</th>
                              <th scope="col">State</th>
                              <th scope="col">Mileage</th>
                              <th scope="col">Event</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">Jun 11, 2019</th>
                              <td>Abuja</td>
                              <td>6,251 mi</td>
                              <td>Title and Registration</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="sectionSpace">
                        If you will to obtain additional title information from
                        the state of title - please click{" "}
                        <a href="#" className="bold">
                          HERE
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="theft">
                <div className="card-body">
                  <h5 className="color-yellow">Theft verification</h5>
                  <div className="report-content " data-content="theft">
                    <div className="report-details">
                      <p>
                        <i className="fas fa-check-circle greenColor margin-right-10"></i>
                        No records found
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="title">
                <div className="card-body">
                  <h5 className="color-yellow">Title brand check</h5>
                  <div className="report-content" data-content="title">
                    <div className="report-details">
                      <div className="sectionSpace">
                        <div className="flex fullwidth align-center space-between">
                          <div className="data">
                            <p className="bold">Salt water damage</p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                        <div className="flex fullwidth align-center space-between">
                          <div className="data">
                            <p className="bold">Vandalism</p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                        <div className="flex fullwidth align-center space-between">
                          <div className="data">
                            <p className="bold">Kit</p>
                          </div>
                          <div className="value">
                            <p>
                              <i className="fas fa-check-circle greenColor"></i>{" "}
                              No problems found
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="sales">
                <div className="card-body">
                  <h5 className="color-yellow">Sales history</h5>
                  <div className="report-content" data-content="sales">
                    <div className="report-details car-report-summary">
                      <div className="sectionSpace">
                        <h5 className="color-white">
                          Jun 20, 2018 -{" "}
                          <span className="color-yellow">classNameified</span>
                        </h5>
                        <p>
                          Here is the information that was provided when the
                          vehicle was put on sale in 2018
                        </p>

                        <div className="flex gap-10 sectionSpace">
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    monetization_on
                                  </span>
                                  <div className="info">
                                    <h5>$61,795</h5>
                                    <p>Cost</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    explore
                                  </span>
                                  <div className="info">
                                    <h5>Abuja</h5>
                                    <p>Location</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="report-summary">
                              <div className="summary-wrap">
                                <div className="summary">
                                  <span className="material-symbols-outlined">
                                    explore
                                  </span>
                                  <div className="info">
                                    <h5>2,607</h5>
                                    <p>Odometer</p>
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
              </div>
              <div className="card-dark mt-15 report-card" id="analysis">
                <div className="card-body">
                  <h5 className="color-yellow">Market price analysis</h5>
                  <div className="report-content" data-content="analysis">
                    <p>
                      Market price analysis is based on a vehicle's history such
                      as vehicle class and age, number of owners, accident and
                      damage history, title brands, odometer readings, etc. This
                      information is used to compare the vehicle's favorability
                      against the entire market of vehicles with
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-dark mt-15 report-card" id="gallery">
                <div className="card-body">
                  <h5 className="color-yellow">Gallery</h5>
                  <div className="report-content" data-content="gallery">
                    <div className="mt-40">
                      <h4 className="color-yellow">Car Gallery</h4>
                      <div className="image-flex flex gap-10 mt-15 car-reports">
                        <div className="car-wrap">
                          <div
                            className="car-image"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1618863114786-d501cae6d853?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            }}
                          ></div>
                        </div>
                        <div className="car-wrap">
                          <div
                            className="car-image"
                            style={{
                              backgroundImage:
                                "url(https://images.unsplash.com/photo-1618863114786-d501cae6d853?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <input type="text" placeholder="Enter Vin number" />
                  <button className="primary btn-pill">Check Vin</button>
                </div>
              </div>
              <div className="card mt-15">
                <div className="card-bodyx">
                  <ul className="list-group">
                    <a href="#summary" className="text-deco-none">
                      <li className="list-group-item">Summary</li>
                    </a>
                    <a href="#ownership" className="text-deco-none">
                      <li className="list-group-item">Ownership History</li>
                    </a>
                    <a href="#odometer" className="text-deco-none">
                      <li className="list-group-item">Odometer Check</li>
                    </a>
                    <a href="#safety" className="text-deco-none">
                      <li className="list-group-item">
                        Open Safety Recall Check
                      </li>
                    </a>
                    <a href="#thistory" className="text-deco-none">
                      <li className="list-group-item">
                        Title History Information
                      </li>
                    </a>
                    <a href="#theft" className="text-deco-none">
                      <li className="list-group-item">Stolen Vehicle Check</li>
                    </a>
                    <a href="#title" className="text-deco-none">
                      <li className="list-group-item">Title Brand Check</li>
                    </a>
                    <a href="#sales" className="text-deco-none">
                      <li className="list-group-item">Sales History</li>
                    </a>
                    <a href="#analysis" className="text-deco-none">
                      <li className="list-group-item">Market Price Analysis</li>
                    </a>
                    <a href="#gallery" className="text-deco-none">
                      <li className="list-group-item">Gallery</li>
                    </a>
                  </ul>
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
