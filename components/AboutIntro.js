const AboutIntro = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <p className="color-black">* 10over10</p>
            <h3>We Are More Than</h3>
            <h1 className="bold">A Car Verification Company</h1>
            <p className="color-black">
              over 10 quisque sodales dui ut varius vestibulum drana tortor
              turpis porttiton tellus eu euismod nisl massa nutodio in the miss
              volume place urna lacinia eros nunta urna mauris vehicula rutrum
              in the miss on volume interdum.
            </p>
            <div className="mt-15">
              <div className="flex gap-10 align-center">
                <div className="icon-wrap wrap-primary">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <p className="color-black">Free VIN Check</p>
              </div>
              <div className="flex gap-10 align-center mt-15">
                <div className="icon-wrap wrap-primary">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <p className="color-black">Daily VIN Searches</p>
              </div>
              <div className="flex gap-10 align-center mt-15">
                <div className="icon-wrap wrap-primary">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
                <p className="color-black">Vehicle History Report</p>
              </div>
              <div className="mt-15">
                <button className="primary btn-pill">View Details</button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="into-image">
              <img
                src="https://images.unsplash.com/photo-1602306834394-6c8b7ea0ed9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="about-us"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
