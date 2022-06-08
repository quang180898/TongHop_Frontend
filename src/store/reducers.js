import commonReducer from "./common/reducer"
import cartReducer from "./cart/reducer"
import favoriteReducer from "./favorite/reducer"
import brandReducer from "./brand/reducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    commonReducer,
    cartReducer,
    favoriteReducer,
    brandReducer,
});

export default allReducers;