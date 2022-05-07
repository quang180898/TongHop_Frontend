import commonReducer from "./common/reducer"
import cartReducer from "./cart/reducer"

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    commonReducer,
    cartReducer,
});

export default allReducers;