const name = "COMMON";

const actions = {
  CHANGE_IMAGE_PRODUCT: name + "CHANGE_IMAGE_PRODUCT",

  CLEAR_DATA_COMMON: name + "CLEAR_DATA",

    //----------
    getImageProduct: (params) => ({
        type: actions.CHANGE_IMAGE_PRODUCT,
        params,
    }),

    //----------
    clearData: (params) => ({
        type: actions.CLEAR_DATA_COMMON,
        params: params,
    }),

};
export default actions;
