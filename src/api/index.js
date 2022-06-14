import { MODE_ENV } from "../../env/env";

// let DOMAIN = MODE_ENV.local
let DOMAIN = { api: "" };
let PREFIX_BE = "/api/backend/";

switch (process.env.TARGET_ENV) {
    default:
        DOMAIN = MODE_ENV.local;
        DOMAIN.api = "";
        DOMAIN.cloudapi = "";
        break;
}

let ACCOUNT = {
    ACCOUNT_REGISTER: DOMAIN.api + PREFIX_BE + "v1/account/register/",
    ACCOUNT_LOGIN: DOMAIN.api + PREFIX_BE + "v1/login/",
    ACCOUNT_UPDATE: DOMAIN.api + PREFIX_BE + "v1/account/update_profile/",
    ACCOUNT_CHANGE_PASSWORD: DOMAIN.api + PREFIX_BE + "v1/account/change_password/",
    ACCOUNT_DELETE: DOMAIN.api + PREFIX_BE + "v1/account/delete/",
    ACCOUNT_ACTIVE: DOMAIN.api + PREFIX_BE + "v1/account/update_active/",
    ACCOUNT_DETAIL: DOMAIN.api + PREFIX_BE + "v1/account/info/",
    ACCOUNT_LIST: DOMAIN.api + PREFIX_BE + "v1/account/",
}

let ORDER = {
    ORDER_LIST: DOMAIN.api + PREFIX_BE + "v1/customer_shoes/",
    ORDER_DETAIL: DOMAIN.api + PREFIX_BE + "v1/customer_shoes/detail/",
    ORDER_MOST_BUY: DOMAIN.api + PREFIX_BE + "v1/customer_shoes/most_buy/",
    ORDER_UPDATE: DOMAIN.api + PREFIX_BE + "v1/customer_shoes/create_or_update/",
    ORDER_DELETE: DOMAIN.api + PREFIX_BE + "v1/customer_shoes/delete/",
}

let DISCOUNT = {
    DISCOUNT_LIST: DOMAIN.api + PREFIX_BE + "v1/discount/",
    DISCOUNT_DETAIL: DOMAIN.api + PREFIX_BE + "v1/discount/detail/",
    DISCOUNT_UPDATE: DOMAIN.api + PREFIX_BE + "v1/discount/update/",
    DISCOUNT_DELETE: DOMAIN.api + PREFIX_BE + "v1/discount/delete/",
}

let BRAND = {
    BRAND_LIST: DOMAIN.api + PREFIX_BE + "v1/brand/",
    BRAND_DETAIL: DOMAIN.api + PREFIX_BE + "v1/brand/detail/",
    BRAND_UPDATE: DOMAIN.api + PREFIX_BE + "v1/brand/create_or_update/",
    BRAND_DELETE: DOMAIN.api + PREFIX_BE + "v1/brand/delete/",
};

let CATEGORY = {
    CATEGORY_LIST: DOMAIN.api + PREFIX_BE + "v1/category/",
    CATEGORY_DETAIL: DOMAIN.api + PREFIX_BE + "v1/category/detail/",
    CATEGORY_UPDATE: DOMAIN.api + PREFIX_BE + "v1/category/create_or_update/",
    CATEGORY_DELETE: DOMAIN.api + PREFIX_BE + "v1/category/delete/",
};

let SHOES = {
    SHOES_LIST: DOMAIN.api + PREFIX_BE + "v1/shoes/",
    SHOES_DETAIL: DOMAIN.api + PREFIX_BE + "v1/shoes/detail/",
    SHOES_SAME: DOMAIN.api + PREFIX_BE + "v1/shoes/same_category/",
    SHOES_UPDATE: DOMAIN.api + PREFIX_BE + "v1/shoes/create_or_update/",
    SHOES_DELETE: DOMAIN.api + PREFIX_BE + "v1/shoes/delete/",
    SHOES_HOME: DOMAIN.api + PREFIX_BE + "v1/shoes/home/",
};

export default {
    ...BRAND,
    ...CATEGORY,
    ...SHOES,
    ...ACCOUNT,
    ...ORDER,
    ...DISCOUNT,
};
