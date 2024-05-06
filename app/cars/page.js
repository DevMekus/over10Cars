import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { homeUrl } from "@/app/lib/navigations";
import CarFilter from "@/components/CarFilter";
import Product from "@/components/Product";
import ReachOut from "@/components/ReachOut";
import products from "@/app/lib/products";
import { carTypes, carBrands } from "@/app/lib/app";

const page = () => {
  return (
    <div>
      <header className="header-bg header-cars vh-70">
        <Navbar links={homeUrl} login={true} />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="header-page-title">
                <div>
                  <h3 className="color-white">Start with a search</h3>
                  <h1 className="bold color-yellow">Buy your dream car</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="section-starter bg-dark">
        <div className="container car-page flex gap-10">
          <div className="search-area">
            <div className="search-wrapper">
              <input
                type="text"
                className="car-search"
                placeholder="Search car"
              />
            </div>
            <div className="filter-region mt-15">
              <h5 className="color-white">Select Type</h5>
              <CarFilter carInfo={carTypes} />
              <div className="mt-15">
                <h5 className="color-white">Select Brand</h5>
                <CarFilter carInfo={carBrands} />
              </div>
            </div>
          </div>
          <div>
            <div className="car-display">
              {products.map((car) => (
                <Product data={car} />
              ))}
            </div>
            <div className="flex gap-10 flex-end mt-15">
              <div className="icon-wrap wrap-primary">
                <span className="material-symbols-outlined">
                  navigate_before
                </span>
              </div>
              <div className="icon-wrap wrap-primary">
                <span class="material-symbols-outlined">chevron_right</span>
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
