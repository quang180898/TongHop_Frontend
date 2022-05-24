const name = "FAVORITE";

const actions = {
  ADD_TO_FAVORITE: name + "ADD_TO_FAVORITE",

  REMOVE_FROM_FAVORITE: name + "REMOVE_FROM_FAVORITE",

  CLEAR_DATA_FAVORITE: name + "CLEAR_DATA_FAVORITE",

  //----------
  addToFavorite: (params) => ({
    type: actions.ADD_TO_FAVORITE,
    params,
  }),

  //----------
  removeFromFavorite: (params) => ({
    type: actions.REMOVE_FROM_FAVORITE,
    params,
  }),

  //----------
  clearDataFovarite: (params) => ({
    type: actions.CLEAR_DATA_FAVORITE,
    params: params,
  }),
};
export default actions;
