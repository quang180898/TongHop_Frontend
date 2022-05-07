import { cartAction } from "store/actions";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("carts") || "[]"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartAction.ADD_TO_CART:
      const cartItems = [].concat(state.cartItems);

      let alreadyExists = false;  
      cartItems.forEach((x) => {
        if (x.id === action.params.id) {
          alreadyExists = true;
          x.count++;
        }
      });
      if (!alreadyExists) {
        cartItems.push({ ...action.params, count: 1 });
      }

      localStorage.setItem("carts", JSON.stringify(cartItems));

      return {
        cartItems: cartItems,
      };

      // let existed_item = cartItems.find((item) => action.params.id === item.id);

      // if (existed_item) {
      //   existed_item.count += 1;
      //   localStorage.setItem("carts", JSON.stringify([...cartItems]));
      //   return {
      //     cartItems: [...cartItems],
      //   };
      // }

      // action.params.count = action.params.count ? action.params.count : 1;

      // localStorage.setItem("carts", JSON.stringify([action.params, ...cartItems]));
      // return {
      //   cartItems: [action.params, ...cartItems],
      // };

    default:
      return state;
  }
};
