import commonReducer from "./common/reducer"
import cartReducer from "./cart/reducer"
import favoriteReducer from "./favorite/reducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    commonReducer,
    cartReducer,
    favoriteReducer,
});

export default allReducers;