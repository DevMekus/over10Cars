export const dashUrl = [
  {
    id: 1,
    name: "Home",
    url: "/dashboard",
  },
  {
    id: 2,
    name: "Reports",
    url: "/dashboard/reports",
  },
  {
    id: 3,
    name: "Transactions",
    url: "/dashboard/transactions",
  },
  {
    id: 4,
    name: "Cars4Sale",
    url: "/dashboard/cars",
  },
  {
    id: 5,
    name: "Settings",
    url: "/dashboard/settings",
  },
];

export const carTypes = [
  {
    id: 1372,
    brand: "SUV",
    price: "300,000,000",
    vin: "3483dhdj9290",
  },
  {
    id: 2362,
    brand: "Mini Van",
    price: "300,000,000",
    vin: "3483dhdj9290",
  },
  {
    id: 33637,
    brand: "Hatchback",
    price: "300,000,000",
    vin: "3483dhdj9290",
  },
  {
    id: 43526,
    brand: "Wagon",
    price: "300,000,000",
    vin: "3483dhdj9290",
  },
];
export const carBrands = [
  { id: 1, brand: "Toyota" },
  { id: 2, brand: "Honda" },
  { id: 3, brand: "Ford" },
  { id: 4, brand: "Chevrolet" },
  { id: 5, brand: "Volkswagen" },
  { id: 6, brand: "BMW" },
  // { id: 7, brand: "Mercedes-Benz" },
  // { id: 8, brand: "Audi" },
  // { id: 9, brand: "Nissan" },
  // { id: 10, brand: "Hyundai" },
  // { id: 11, brand: "Kia" },
  // { id: 12, brand: "Subaru" },
  // { id: 13, brand: "Tesla" },
  // { id: 14, brand: "Lexus" },
  // { id: 15, brand: "Porsche" },
  // { id: 16, brand: "Mazda" },
  // { id: 17, brand: "Jeep" },
  // { id: 18, brand: "Volvo" },
  // { id: 19, brand: "Cadillac" },
  // { id: 20, brand: "GMC" },
];
export const adminUrl = [
  {
    id: 1,
    name: "Home",
    url: "/admin",
  },
  {
    id: 11,
    name: "Accounts",
    url: "/admin/accounts",
  },
  {
    id: 2,
    name: "Reports",
    url: "/admin/reports",
  },
  {
    id: 3,
    name: "Transactions",
    url: "/admin/transactions",
  },
  {
    id: 4,
    name: "Products",
    url: "/admin/products",
  },
  {
    id: 5,
    name: "Gallery",
    url: "/admin/gallery",
  },
  {
    id: 6,
    name: "Settings",
    url: "/admin/settings",
  },
];

export const closeError = (errOpen, setErrorOpen) => {
  if (errOpen) {
    setErrorOpen(false);
  }
};
