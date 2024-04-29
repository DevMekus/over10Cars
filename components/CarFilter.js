const CarFilter = ({ carInfo }) => {
  return (
    <div>
      {carInfo.map((item) => (
        <div className="form-group car-filter-item" key={item.id}>
          <input
            type="radio"
            id={item.id}
            className="radio-btn"
            name="radio-group_one"
          />
          <label htmlFor={item.id}>{item.brand}</label>
        </div>
      ))}
    </div>
  );
};

export default CarFilter;
