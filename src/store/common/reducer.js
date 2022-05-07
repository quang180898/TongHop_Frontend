import { commonAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {

    case commonAction.CHANGE_IMAGE_PRODUCT:
        return {
            ...state, 
            isChangeImage: action.params,
        }

    case commonAction.CLEAR_DATA_COMMON:
      return {
        ...state,
        isChangeImage: null
      };
    default:
      return state;
  }
};
