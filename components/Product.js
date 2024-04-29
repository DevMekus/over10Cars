const Product = ({ data }) => {
  return (
    <div>
      <div className="product">
        <div
          className="car-image"
          style={{
            backgroundImage: `url(${data.imageUrl})`,
          }}
        ></div>
        <div className="addToCart">
          <button className="addCart">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="car-info">
          <h5 className="color-white">
            <span className="color-yellow">{data.status}</span>{" "}
            <span className="bold">{data.productName}</span>
          </h5>
          <div className="w-100 flex space-between align-center mt-15">
            <i className="fas fa-gears color-yellow"></i>
            <p className="color-white">{data.vin}</p>
          </div>
          <div className="mt-15">
            {" "}
            <button className="primary btn-pill">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
