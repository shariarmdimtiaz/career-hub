// use local storage to manage cart data
const getJobCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const addToDb = (id) => {
  let shoppingCart = getJobCart();
  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("job-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const shoppingCart = getJobCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("job-cart", JSON.stringify(shoppingCart));
  }
};
const deleteShoppingCart = () => {
  localStorage.removeItem("job-cart");
};

export { addToDb, removeFromDb, getJobCart, deleteShoppingCart };
