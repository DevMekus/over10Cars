const ServiceIntro = () => {
  return (
    <div>
      <section className="services-section section-starter bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="color-white">What We Do</h3>
              <h1 className="color-yellow bold">Our Services</h1>
              <div className="mt-40">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="service">
                      <div className="service-step">
                        <h1>1</h1>
                      </div>
                      <div>
                        <h4 className="service-title color-white">
                          Theft verification
                        </h4>
                        <p>
                          The VIN is the only thing you need to know. Your
                          17-digit VIN can be found in car documents.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="service">
                      <div className="service-step">
                        <h1>2</h1>
                      </div>
                      <div>
                        <h4 className="service-title color-white">
                          History Report
                        </h4>
                        <p>
                          The VIN is the only thing you need to know. Your
                          17-digit VIN can be found in car documents.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    {" "}
                    <div className="service">
                      <div className="service-step">
                        <h1>3</h1>
                      </div>
                      <div>
                        <h4 className="service-title color-white">
                          Inspection
                        </h4>
                        <p>
                          The VIN is the only thing you need to know. Your
                          17-digit VIN can be found in car documents.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="service">
                      <div className="service-step">
                        <h1>4</h1>
                      </div>
                      <div>
                        <h4 className="service-title color-white">
                          Car Marketplace{" "}
                        </h4>
                        <p>
                          The VIN is the only thing you need to know. Your
                          17-digit VIN can be found in car documents.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceIntro;
