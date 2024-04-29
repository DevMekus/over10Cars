const ReachOut = () => {
  return (
    <div>
      <section className="action-section section-starter flex flex-center align-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Contact us</h3>
              <h1 className="bold">Reach Out To Us</h1>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-sm-4 flex flex-center">
              <div className="flex gap-10">
                <div className="icon-wrap wrap-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h5>Call us</h5>
                  <p>33673728263836</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 flex flex-center">
              <div className="flex gap-10">
                <div className="icon-wrap wrap-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h5>Write to us</h5>
                  <p>Info@over10cars.com</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 flex flex-center">
              <div className="flex gap-10">
                <div className="icon-wrap wrap-primary">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <div>
                  <h5>Address</h5>
                  <p>298 Wuse Crescent, Abuja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReachOut;
