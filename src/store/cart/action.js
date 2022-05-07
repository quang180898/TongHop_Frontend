const name = "CART";

const actions = {
  ADD_TO_CART: name + "ADD_TO_CART",

  REMOVE_FROM_CART: name + "REMOVE_FROM_CART",

  DECREASE_QUANTITY: name + "DECREASE_QUANTITY",

  CLEAR_DATA_CART: name + "CLEAR_DATA_CART",

  //----------
  addToCart: (params) => ({
    type: actions.ADD_TO_CART,
    params,
  }),

  //----------
  removeFromCart: (params) => ({
    type: actions.REMOVE_FROM_CART,
    params,
  }),
  //----------
  DecreaseQuantity: (params) => ({
    type: actions.DECREASE_QUANTITY,
    params,
  }),

  //----------
  clearDataCart: (params) => ({
    type: actions.CLEAR_DATA_CART,
    params: params,
  }),
};
export default actions;
