import commonReducer from "./common/reducer"
import cartReducer from "./cart/reducer"
import favoriteReducer from "./favorite/reducer"
import brandReducer from "./brand/reducer"
import categoryReducer from "./category/reducer"
import shoesReducer from "./shoes/reducer"
import accountReducer from "./account/reducer"
import orderReducer from "./order/reducer"
import discountReducer from "./discount/reducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    commonReducer,
    cartReducer,
    favoriteReducer,
    brandReducer,
    categoryReducer,
    shoesReducer,
    accountReducer,
    orderReducer,
    discountReducer,
});

export default allReducers;