import { MODE_ENV } from "../../env/env";

// let DOMAIN = MODE_ENV.local
let DOMAIN = { api: "" };
let PREFIX_BE = "/api/backend/";

switch (process.env.TARGET_ENV) {
    default:
        DOMAIN = MODE_ENV.local;
        DOMAIN.api = "";
        break;
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
};

export default {
    ...BRAND,
    ...CATEGORY,
    ...SHOES,
};
