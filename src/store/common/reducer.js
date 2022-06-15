import { commonAction } from "store/actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {

    case commonAction.CHANGE_IMAGE_PRODUCT:
        return {
            ...state, 
            isChangeImage: action.params,
        }

    // sidebar
    case commonAction.TOGGLE_SIDEBAR:
      return {
          ...state,
          isShowSidebar: action.params,
      };
  case commonAction.TOGGLE_SIDEBAR_MOBILE:
      return {
          ...state,
          isShowSidebarMobile: action.params,
      };

    case commonAction.CLEAR_DATA_COMMON:
      return {
        ...state,
        isChangeImage: null
      };
    default:
      return state;
  }
};
