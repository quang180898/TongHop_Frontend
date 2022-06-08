import { MODE_ENV } from "../../env/env";

// let DOMAIN = MODE_ENV.local
let DOMAIN = { api: "" };
let PREFIX_BE = "/api/backend/";

switch (process.env.TARGET_ENV) {
    default:
        DOMAIN = MODE_ENV.local;
        // DOMAIN.api = "";
        break;
}

let BRAND = {
    BRAND_LIST: DOMAIN.api + PREFIX_BE + "v1/brand/",
    BRAND_DETAIL: DOMAIN.api + PREFIX_BE + "v1/brand/detail/",
    BRAND_UPDATE: DOMAIN.api + PREFIX_BE + "v1/brand/create_or_update/",
    BRAND_DELETE: DOMAIN.api + PREFIX_BE + "v1/brand/delete/",
};

export default {
    ...BRAND,
};
