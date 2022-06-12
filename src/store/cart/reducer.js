import { addToCart, decreaseQuantity, removeFormCart } from "functions/Utils";
import { cartAction } from "store/actions";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("carts")) || {
        cart: [],
        total: 0,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case cartAction.ADD_TO_CART:
            return {
                cartItems: addToCart(state.cartItems, action.params),
            };

        case cartAction.DECREASE_QUANTITY:
            return {
                cartItems: decreaseQuantity(state.cartItems, action.params),
            };

        case cartAction.REMOVE_FROM_CART:
            return {
                cartItems: removeFormCart(state.cartItems, action.params),
            };

        default:
            return state;
    }
};
