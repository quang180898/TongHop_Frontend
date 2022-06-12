import React, { lazy, useState } from "react";
import { message, notification, Pagination } from "antd";

import * as moment from "moment";
import "moment/locale/vi";
import "moment/locale/en-au";
import "moment/locale/zh-cn";
import vi_VN from "antd/es/date-picker/locale/vi_VN";
import en_US from "antd/es/date-picker/locale/en_US";
import zh_CN from "antd/es/date-picker/locale/zh_CN";
import { ModalNotification } from "components/base/Modal";

const LIMITED_AGE = 18;

export const paginationTable = (tableList, limit) => {
    if (tableList && tableList.length > 0) {
        const array = [].concat(tableList);

        const subPage = (array, limit) => {
            let results = [];
            while (array && array.length) {
                results.push(array.splice(0, limit));
            }
            return results;
        };
        let PageSize = subPage(array, limit);

        return PageSize;
    }
};

export const getLocalStore = (text, remove = false) => {
    let data = localStorage.getItem(text);
    if (data) {
        if (remove) {
            localStorage.removeItem(text);
        }
        try {
            return JSON.parse(data);
        } catch {
            return null;
        }
    }
    return false;
};

// token
const tokenAdmin = () => {
    if (getLocalStore("user")) {
        let token = getLocalStore("user").permission_code;
        if (token === 1) {
            console.log(token);
            return token;
        } else {
            return null;
        }
    }
    return null;
}; // Production
export const TOKENADMIN = tokenAdmin();

const token = () => {
    if (getLocalStore("user")) {
        let token = getLocalStore("user");
        if (token) {
            return token;
        }
    }
    return null;
}; // Production
export const TOKEN = token();

// date format
export const DATEFORMAT = {
    DDMMYY_HHMM: "dd/MM/yyyy HH:mm",
    DDMMYY_HHMM_NEW: "dd/MM/yyyy '-' HH:mm",
    DDMMYY_HHMMSS: "dd/MM/yyyy HH:mm:ss",
    YYMMDD_HHMM: "yyyy/MM/dd HH:mm",
    HHMM_DDMMYY: "HH:mm dd/MM/yyyy",
    YYMMDD: "yyyy/MM/dd",
    DDMMYYYY: "dd/MM/yyyy",
    DDMM: "dd/MM",
    DATETIME_API: "dd/MM/yyyy HH:mm:ss",
    TIME_API: "HH:mm:ss",
    HHMM: "HH:mm",
    HHMMAA: "hh:mm aa",
    HHMMAA_24: "HH:mm aa",
    MMSS: "mm:ss",
    YYMMDD_HHMM_AA: "dd/MM/yyyy hh:mm aa",
    YYMMDD_HHMMSS: "yyyy/MM/dd HH:mm:ss",
    YY_MM_DD_HHMMSS: "yyyy-MM-dd HH:mm:ss",
    DATE_TIME_API_WAITER: "yyyy/MM/dd HH:mm:ss",
    DDMMYY: "dd/MM/yy",
    YYYY_MM_DD: "yyyy-MM-dd",
    DD_MM_YYYY: "dd-MM-yyyy",
    DDD_DD_MM: "EEEE dd/MM",
    TIMESTAMP_API: "yyyy-MM-dd'T'HH:mm:ss",
    TIMESTAMP_API3: "yyyy-MM-dd'T'HH:mm:ss.SSS",
    TIMESTAMP_API6: "yyyy-MM-dd'T'HH:mm:ss.SSSSSS",
};

export const getBreadcrumbData = ({ router, url }) => {
    let newRouter = [].concat(router);
    const paths = url.split("/"); //lấy list các ký tự đường link
    let newPaths = []; //tạo mảng để trả về
    let newUrl = ""; // link url được ghép lại
    let newLink = ""; //link url có :id
    let textTemp = ""; //lưu lại link trước đó để gắn :id vào
    if (url != "/") {
        for (let index = 0; index < paths.length; index++) {
            newUrl = newUrl + "/" + paths[index]; //gắn các list link lại với nhau
            newUrl = newUrl.replace("//", "/"); //nếu trùng // thì đổi thành /
            if (paths[index] == "products") {
                newPaths.push(newRouter.find((e) => e.path == "/collection"));
            }
            let params = newRouter.find((e) => {
                if (e.path == newUrl) {
                    return true;
                } else {
                    let route =
                        e.path && e.path != "/" ? e.path.split("/") : [e.path];
                    //kiểm tra xem đường link có id không, nếu có thì gắn id vào link trong route
                    if (
                        route.length > 1 &&
                        route[route.length - 1].includes(":")
                    ) {
                        route[route.length - 1] = paths[index];
                    }
                    route = route.join("/");
                    if (route == newUrl || route == newUrl + "/") {
                        newUrl = e.path;
                        return true;
                    }
                }
            });
            if (params) {
                let text = { ...params };
                if (newLink != "/" && text.path.includes(newUrl)) {
                    //nếu đường link là đường phân nhìu cấp
                    let indexof = text.path.indexOf(newUrl);
                    //các cấp trước đã được khởi tạo
                    if (indexof > -1 && newLink != "" && textTemp != "") {
                        //lấy đường link được khởi tạo để gắn vào đường link
                        text.path = text.path.replace(textTemp, newLink);
                    }
                    //nếu path hiện tại có id
                    let lastIndex = text.path.lastIndexOf(":");
                    if (lastIndex > -1) {
                        //lấy phần tử đầu
                        let temp = text.path.slice(0, lastIndex);
                        textTemp = text.path;
                        //gắn thêm :id vào phần từ đầu
                        text.path = temp + paths[index];
                    }
                }

                newLink = text.path;
                //push link vào mảng
                newPaths.push(text);
            }
        }
    }
    //lấy 2 đường link cuối cùng
    if (newPaths.length > 3) {
        newPaths.splice(1, newPaths.length - 3);
    }
    return newPaths;
};

// convert time
export const convertDateShow = (date) => {
    try {
        return moment(date, "YYYY/MM/DD").format("DD/MM/YYYY");
    } catch (e) {
        return date;
    }
};

export const convertDateDDMMYYYY = (date) => {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format("DD-MM-YYYY");
    } catch (e) {
        return date;
    }
};

export const convertDateYYYYMMDD = (date) => {
    try {
        return moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
    } catch (e) {
        return date;
    }
};

export const convertDateHHmm = (date) => {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format("HH:mm");
    } catch (e) {
        return date;
    }
};

export const convertDateHHmmss = (date) => {
    try {
        return moment(date, "YYYY-MM-DD[T]HH:mm:ss").format("HH:mm:ss");
    } catch (e) {
        return date;
    }
};

export const formatDate = ({ date, type = "DD/MM/YYYY", format = "" }) => {
    if (type == "") {
        return moment(date);
    }
    if (format != "") {
        return moment(date, format).format(type);
    }
    return moment(date).format(type);
};
// end convert time

export const checkBeforeTime = (date) => {
    try {
        return moment().isBefore(date);
    } catch (e) {
        return false;
    }
};

/*
 *   show data on view , nếu ko có thì gán bằng value khác
 *   vd: value ? value1 : value2
 */
export const getValueAndSetDefault = (value, symbol = "-") => {
    if (value) {
        return value;
    }
    return symbol;
};

export const createDataSelect = ({ value, label, text, data }) => {
    return {
        value,
        label,
        text: getValueAndSetDefault(text, ""),
        data: getValueAndSetDefault(data, ""),
    };
};

export const getValueNumber = (value) => {
    return getValueAndSetDefault(value, 0);
};

export const getValueText = (value) => {
    return getValueAndSetDefault(value, "");
};

export const getValueShow = (value) => {
    return getValueAndSetDefault(value, "-");
};

/**
 * Load data pagination
 * @param {*} total_record
 * @param {*} page : page current
 * @param {*} total_page : total page
 * @param {*} limit : page limit
 */
export const LoadDataPaging = (total_record, page, total_page, limit) => {
    var list = {
        total_record: total_record,
        page: page,
        total_page: total_page,
        limit: limit,
    };
    if (
        total_record === undefined ||
        page === undefined ||
        total_page === undefined ||
        limit === undefined
    ) {
        return null;
    } else if (total_record < 0 || page < 0 || total_page < 0 || limit < 0) {
        return null;
    } else {
        return list;
    }
};

export const convertStringToFloat = (value, noparse = false) => {
    let text = value;
    if (typeof text == "string") {
        if (text.indexOf(0) == 0) {
            text = text.slice(1, text.length);
        }
        let number = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] == ",") {
                number = number + ".";
            } else if (text[i] != ".") {
                number = number + text[i];
            }
        }
        return number == "" ? "" : noparse ? number : parseFloat(number);
    } else {
        return text ? parseFloat(text) : 0;
    }
};

export const convertFloatToString = (value) => {
    if (value) {
        let newText = "";
        let text = value;
        let _add = 0;
        let isExit = true;
        if (typeof value == "string") {
            text = value.split("").reverse().join("");
        } else {
            text = JSON.stringify(value).split("").reverse().join("");
        }
        if (text.indexOf(".") != -1) {
            isExit = false;
        }
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ".") {
                newText = newText + ",";
                _add = 0;
                isExit = true;
            } else if ((_add + 1) % 3 == 0) {
                if (i <= text.length - 2 && isExit) {
                    if (text[i] >= 0 && text[i + 1] !== "-") {
                        newText = newText + text[i] + ".";
                        _add = 0;
                    } else {
                        newText = newText + text[i];
                    }
                } else {
                    newText = newText + text[i];
                }
            } else {
                _add = _add + 1;
                newText = newText + text[i];
            }
        }
        return newText.split("").reverse().join("");
    }
    return 0;
};

export const datePichkerLocation = () => {
    let language = getLocalStore("language");
    switch (language) {
        case "vi":
            return vi_VN;
        case "en":
            return en_US;
        case "zh":
            return zh_CN;
    }
};

export const renderDayAgo = (date) => {
    let time = moment().unix() - moment(date).unix();
    let language = getLocalStore("language");
    if (time > 172800) {
        return formatDate(moment(date));
    } else {
        return moment(date).locale(language).startOf("day").fromNow();
    }
};

export const capitalizeText = (text) => {
    let result =
        text.slice(0, 1).toUpperCase() +
        text.slice(1, text.length).toLowerCase();
    return result;
};

// destroy data on reducer
export const destroyNotification = () => {
    notification.destroy();
};

message.config({
    maxCount: 1,
});
export const showMessage = {
    success: (content) =>
        message.success({
            content: content,
            className: "text_51c471",
            style: {
                marginTop: "5vh",
            },
        }),
    warning: (content) =>
        message.warning({
            content: content,
            className: "color_e94c4c",
            style: {
                marginTop: "5vh",
            },
        }),
    error: (content) =>
        message.error({
            content: content,
            className: "color_e94c4c",
            style: {
                marginTop: "5vh",
            },
        }),
};

/* second < 10 ? 01 : 10 */
export const convertNumberTwoNumber = (second) => {
    if (second > 10) {
        return second;
    } else {
        return `0${second}`;
    }
};

//check 2 ngày bằng nhau
export const isSameDay = (a, b) => {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    // Compare least significant, most likely to change units first
    // Moment's isSame clones moment inputs and is a tad slow
    return (
        a.date() === b.date() &&
        a.month() === b.month() &&
        a.year() === b.year()
    );
};

//return (giờ/phút/giây trước đó)
export const getRelationTime = (date, t) => {
    try {
        var relationTimeStr = "";
        var millisecondData = moment(date, "YYYY-MM-DD HH:mm:ss").valueOf();
        var millisecondNow = moment().valueOf();
        var millisecondDiff = millisecondNow - millisecondData;
        if (millisecondDiff > 0) {
            if (millisecondDiff / 1000 < 60) {
                relationTimeStr =
                    Math.ceil(millisecondDiff / 1000) +
                    " " +
                    t("text_second_before");
            } else if (millisecondDiff / 1000 / 60 < 60) {
                relationTimeStr =
                    Math.ceil(millisecondDiff / 1000 / 60) +
                    " " +
                    t("text_minute_before");
            } else if (millisecondDiff / 1000 / 60 / 60 < 24) {
                relationTimeStr =
                    Math.ceil(millisecondDiff / 1000 / 60 / 60) +
                    " " +
                    t("text_hour_before");
            } else {
                relationTimeStr = convertDateDDMMYYYY(date);
            }
        }
        return relationTimeStr;
    } catch (e) {
        return date;
    }
};

/**
 * convert date of birth to age
 * @param {*} birthday: input date
 * @return: age
 */
export const convertBirthdayToAge = (birthday) => {
    try {
        var today = new Date();
        var bd = new Date(birthday);
        var age = today.getFullYear() - bd.getFullYear();
    } catch (e) {
        console.log("error: " + e);
        return "--";
    }
    return age;
};

/**
 * Check object duplicate of a array by object id
 * @param {*} array: array check
 * @param {*} obj: object check
 * @param {*} objId: id of obj
 * @return: true if array have duplicate object, else: false
 */
export const checkDuplicateObjectOfArray = (array, obj, objId) => {
    let isDuplicate = false;
    for (let i = 0; i < array.length; i++) {
        if (obj[objId] === array[i][objId]) {
            isDuplicate = true;
        }
    }
    if (isDuplicate) return true;
    return false;
};

/**
 * remove object of array by object id
 * @param {*} array: array
 * @param {*} obj: object
 * @param {*} objId: id of object
 */
export const removeObjectOfArray = (array, obj, objId) => {
    for (let i = 0; i < array.length; i++) {
        if (obj[objId] === array[i][objId]) {
            array.splice(i, 1);
        }
    }
};

// to convert size in bytes to KB, MB, GB
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

// use for username
export const removeExtraSpace = (s) => {
    let result = s.trim().split(/ +/).join("");
    return result;
};

// get (value or label or something ) from constants file
export const convertContant = (value, array, index = "value") => {
    let params =  array?.length > 0 ? array.find((e) => e[index] == value) : null;
    if (params) {
        return params;
    } else {
        return { value: 0, label: "", data: "" };
    }
};

//cut text bang " ", mac dinh la 6
export const trimContent = (value, num = 6, char = false) => {
    let text = value;
    let isExit = 0;
    if (typeof text == "string") {
        text = text.trim();
        if (text.length > num) {
            if (char) {
                return text.slice(0, num) + "...";
            } else {
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === " ") {
                        if (isExit == num) {
                            return text.slice(0, i) + "...";
                        } else {
                            isExit++;
                        }
                    }
                }
            }
            return text;
        } else {
            return text;
        }
    }
    return text;
};

// validate rules
export const RULES = {
    phone: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        form: (isRequired = true) => {
            return [
                ({}) => ({
                    required: true,
                    validator: (rule, value) => {
                        if (isRequired) {
                            if (value) {
                                // số ddt bắt đầu từ 0 và số tiếp theo != 0
                                let format = /(0)+([1-9])+([0-9]{8})/;
                                if (!format.test(value)) {
                                    if (value.length != 10) {
                                        return Promise.reject(
                                            "độ dài không hợp lệ"
                                        );
                                    }
                                    return Promise.reject("số điện thoại lỗi");
                                } else {
                                    if (value.length != 10) {
                                        return Promise.reject(
                                            "độ dài không hợp lệ"
                                        );
                                    }
                                    return Promise.resolve();
                                }
                            } else {
                                return Promise.reject("vui lòng nhập!");
                            }
                        }
                        return Promise.resolve();
                    },
                }),
            ];
        },
        type: "text",
    },
    textFullName: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        form: (isRequired = true, text = "vui lòng nhập!") => {
            return [
                ({}) => ({
                    required: true,
                    validator: (rule, value) => {
                        if (isRequired) {
                            // text là input muốn show khi không thỏa dk, mặc định là vui lòng nhập!
                            //nhập full name chỉ nhập được chữ và khoảng trắng
                            let format = /[a-zA-z ]/;
                            if (value && value[0] != " ") {
                                let check = true;
                                //chuyển đổi Tiếng Việt sang tiếng Anh để check
                                let newValue = convertUnsignedString(value);
                                // console.log({ newValue })
                                for (let i in newValue) {
                                    if (!format.test(newValue[i])) {
                                        check = false;
                                    }
                                }
                                if (check) {
                                    return Promise.resolve();
                                } else return Promise.reject(text);
                            } else {
                                return Promise.reject("vui lòng nhập!");
                            }
                        }
                        return Promise.resolve();
                    },
                }),
            ];
        },
        type: "number",
    },
    textNoPasce: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        form: (isRequired = true, text = "vui lòng nhập!") => {
            return [
                ({}) => ({
                    required: true,
                    validator: (rule, value) => {
                        if (isRequired) {
                            // text là input muốn show khi không thỏa dk, mặc định là vui lòng nhập!
                            //kiểm tra value vào có phải là số || chữ || _
                            var reg = new RegExp("^\\w+$");
                            if (value && value[0] != " ") {
                                let r = value.match(reg);
                                if (r == null) {
                                    return Promise.reject(text);
                                } else {
                                    return Promise.resolve();
                                }
                            } else {
                                return Promise.reject("vui lòng nhập!");
                            }
                        }
                        return Promise.resolve();
                    },
                }),
            ];
        },
        type: "number",
    },
    identity: {
        form: [
            {
                required: true,
                message: "vui lòng nhập!",
            },
            {
                min: 9,
                message: "identity_length",
            },
        ],
        type: "number",
    },
    number: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        form: (isRequired = true) => [
            //nếu isRequired true thì rule sẽ kiểm tra xem user đã nhập vào ô hay chưa
            {
                required: isRequired,
                message: "vui lòng nhập!",
            },
        ],
        type: "number",
    },
    numberCode: {
        form: [
            {
                pattern: "/^[0-9\b]+$/",
                message: "vui lòng nhập!",
            },
        ],
        type: "number",
    },
    email: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        // kiểm tra tính hợp lệ của email
        form: (isRequired = true, e = "Email không hợp lệ") => {
            if (e) {
                return [
                    ({}) => ({
                        required: true,
                        validator: (rule, value) => {
                            if (isRequired) {
                                //nếu chưa nhập text thì thông báo lỗi
                                if (!value) {
                                    return Promise.reject("vui lòng nhập!");
                                } else {
                                    //kiểm tra email chuẩn theo format chưa
                                    //format thì tìm hiểu trên https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide/Regular_Expressions
                                    let format =
                                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                                    if (!format.test(value)) {
                                        return Promise.reject(e);
                                    } else {
                                        return Promise.resolve();
                                    }
                                }
                            }
                            return Promise.resolve();
                        },
                    }),
                ];
            }
        },
        type: "email",
    },
    password: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        form: (isRequired = true) => {
            return [
                //password phải được nhập
                {
                    required: isRequired,
                    message: "Vui lòng nhập mật khẩu",
                },
                // password tối thiểu 8 ký tự
                {
                    min: 8,
                    message: "Mật khẩu quá ngắn!",
                },
                // password tối đa 25 ký tự
                {
                    max: 25,
                    message: "Mật khẩu quá dài!",
                },
            ];
        },
        type: "password",
    },
    text: {
        //truyền isRequired để xác nhận có kiểm tra hay không, xong mới truyền text muốn show vào
        form: (isRequired = true, textMessage = "vui lòng nhập!") => {
            return [
                {
                    required: isRequired,
                    message: textMessage,
                },
            ];
        },
        type: "text",
    },
    birthday: {
        //truyền isRequired để xác nhận có kiểm tra hay không
        //kiểm tra ngày sinh
        form: (isRequired = true) => [
            ({}) => ({
                required: true,
                validator: (rule, value) => {
                    if (isRequired) {
                        if (value) {
                            let date = new Date();
                            let oldDate = new Date();
                            //năm snh không được nhỏ quá 200 năm sô với hiện tại;
                            //giới hạn tuổi khi nhập năm sinh dựa theo LIMITED_AGE
                            oldDate.setFullYear(oldDate.getFullYear() - 200);
                            date.setFullYear(date.getFullYear() - LIMITED_AGE);
                            if (
                                moment(date).endOf("day") <
                                    moment(value).endOf("day") ||
                                moment(oldDate).endOf("day") >
                                    moment(value).endOf("day")
                            ) {
                                return Promise.reject("birth_day_error");
                            } else {
                                return Promise.resolve();
                            }
                        } else {
                            return Promise.reject("vui lòng nhập!");
                        }
                    }
                    return Promise.resolve();
                },
            }),
        ],
        type: "text",
    },
    require: {
        form: [{ required: true, message: "vui lòng nhập!" }],
    },
};

export const convertUnsignedString = (s) => {
    //chuyển tiếng Việt sang tiếng Anh
    let str = s;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
};

export const validatoInputCurrency = (value) => {
    let format = /[a-zA-z !@#$%^&*()_+\-=\[\]{};':,"\\|<>\/?]/;
    return typeof value == "string"
        ? format.test(convertUnsignedString(value)) == false
        : true;
};

export const validateErrorNumber = (value) => {
    if (value == "") {
        return 0;
    } else if (value.search(",00") !== -1) {
        return value.replace(",00", "");
    }
    return value;
};

// excute base64 for image
export const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result, img.type));
    reader.readAsDataURL(img);
};

export const getBase64Promise = (img) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = function () {
            resolve({
                data: reader.result,
                mimetype: img.type,
                filename: img.name,
            });
        };
        reader.readAsDataURL(img);
    });
};

export const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    let str = b64Data.replace(/^data:image\/[a-z]+;base64,/, "");
    let byteCharacters = atob(str);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return URL.createObjectURL(blob);
};
// end excute base64 for image

export const convertSvgtoUrl = (svg) => {
    const blob = new Blob([svg], { type: "image/svg+xml" });
    let url = URL.createObjectURL(blob);
    return url;
};

export const convertRatio = ({
    clientHeight,
    clientWidth,
    naturalWidth,
    naturalHeight,
    isWidth = true,
}) => {
    let width, height;
    if (isWidth) {
        let ratioImg = naturalWidth / naturalHeight;
        let ratioParent = clientWidth / clientHeight;
        if (ratioParent >= ratioImg) {
            height = clientHeight;
            width = height * ratioImg;
        } else {
            width = clientWidth;
            height = width / ratioImg;
        }
    } else {
        let ratioImg = naturalHeight / naturalWidth;
        let ratioParent = clientHeight / clientWidth;
        if (ratioParent >= ratioImg) {
            width = clientWidth;
            height = width * ratioImg;
        } else {
            height = clientHeight;
            width = height / ratioImg;
        }
    }
    return { width, height };
};

export const guidGenerator = () => {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
        S4() +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        "-" +
        S4() +
        S4() +
        S4()
    );
};
export const subPagination = (limit, array) => {
    console.log(array);
    const [current, setCurrent] = useState(1);
    let results = [];

    while (array && array.length) {
        results.push(array.splice(0, limit));
    }

    const itemRender = (type, originalElement) => {
        if (type === "prev") {
            return <a>Trước</a>;
        }
        if (type === "next") {
            return <a>Kế tiếp</a>;
        }
        return originalElement;
    };
    const total = array ? array.length : 0;

    const handleChange = (page) => {
        setCurrent(page);
    };

    return (
        <Pagination
            className="scb-pagination"
            defaultCurrent={1}
            pageSize={limit ? limit : 0}
            current={current}
            onChange={(e) => handleChange(e)}
            showTotal={(total, range) =>
                `${range[0]} tới ${range[1]} của ${total} mục`
            }
            itemRender={itemRender}
            total={total}
        />
    );
};

export const canvasToBinary = (snap) => {
    var img = snap.toDataURL();
    // Convert Base64 image to binary [function base64ToBinary()]
    return base64ToBinary(img);
};

export const base64ToBinary = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);
    // separate out the mime component
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString, encoding: "utf-8" });
};

export const showNotification = {
    success: ({ message, title, duration = 4.5 }) => {
        notification.success({
            message: title,
            description: message,
            duration,
        });
    },
    error: ({ message, title, duration = 4.5 }) => {
        notification.error({
            message: title,
            description: message,
            duration,
        });
    },
    warning: ({ message, title, duration = 4.5 }) => {
        notification.warning({
            message: title,
            description: message,
            duration,
        });
    },
};

export const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};

export function removeEmptyFromObj(obj) {
    return Object.entries(obj).reduce(
        (a, [k, v]) => (!v || v == null ? a : ((a[k] = v), a)),
        {}
    );
}

export const convertCurrency = (number, unit) => {
    let strNumber = new Intl.NumberFormat("en-US", {
        style: "decimal",
        currency: "VND",
    }).format(number);
    if (unit) {
        return `${strNumber} ${unit}`;
    }
    return strNumber;
};

export const addToCart = (data, items) => {
    const newData = {
        cart: [],
        total: 0,
    };

    const cartItems = data.cart ? [].concat(data.cart) : [];

    const product = items.product;

    const selectedValue = items.size ? items.size : product.shoes_quantity[0].size;

    const quantity = items.quantity ? items.quantity : 1;

    if (cartItems.filter((p) => p.shoes_id === product.shoes_id).length === 0) {
        cartItems.push({
            ...product,
            shoes_id: product.shoes_id,
            quantity: 0,
            size: selectedValue,
        });
    } else if (
        cartItems.filter((p) => p.shoes_id === product.shoes_id).length > 0 &&
        cartItems
            .filter((p) => p.shoes_id === product.shoes_id && p.size === selectedValue)
            .map((p) => p.size)[0] !== selectedValue
    ) {
        cartItems.push({
            ...params,
            shoes_id: product.shoes_id,
            quantity: 0,
            size: selectedValue,
        });
    } else {
        const index = cartItems.indexOf(
            cartItems.filter(
                (item) => item.shoes_id === product.shoes_id && item.size === selectedValue
            )[0]
        );
        cartItems[index] = {
            ...data.cart[index],
        };
    }

    // Determine index of cartItem
    const index = cartItems.indexOf(
        cartItems.filter(
            (item) => item.shoes_id === product.shoes_id && item.size === selectedValue
        )[0]
    );

    // Increment quantity of cartItem
    cartItems[index].quantity += quantity;

    newData.cart = cartItems;

    let cartTotal = data.total ? data.total : 0;

    cartTotal += product.sale_price * quantity;

    newData.total = cartTotal;
    console.log(newData)
    localStorage.setItem("carts", JSON.stringify(newData));
    return newData;
};

export const decreaseQuantity = (data, items) => {
    const newData = {
        cart: [],
        total: 0,
    };

    const cartItems = data.cart ? [].concat(data.cart) : [];

    const product = items.product;

    const selectedValue = items.size;

    // Determine index of cartItem
    const index = cartItems.indexOf(
        cartItems.filter(
            (item) => item.shoes_id === product.shoes_id && item.size === selectedValue
        )[0]
    );

    // If an item has only one quantity in cart remaining, remove it from the array; otherwise decrement cartItem
    if (cartItems[index].quantity === 1) {
        cartItems.splice(index, 1);
    } else {
        // Decrement quantity of cartItem
        cartItems[index].quantity--;
    }

    newData.cart = cartItems;

    let cartTotal = data.total;

    cartTotal -= product.sale_price;

    newData.total = cartTotal;

    localStorage.setItem("carts", JSON.stringify(newData));
    return newData;
};

export const removeFormCart = (data, items) => {
    const newData = {
        cart: [],
        total: 0,
    };

    const cartItems = data.cart ? [].concat(data.cart) : [];

    const product = items.product;

    const selectedValue = items.size;

    // Determine index of cartItem
    const index = cartItems.indexOf(
        cartItems.filter(
            (item) => item.shoes_id === product.shoes_id && item.size === selectedValue
        )[0]
    );

    // Determine quantity of cartItem in cart
    const quantity = cartItems[index].quantity;

    // Remove cartItem
    cartItems.splice(index, 1);

    newData.cart = cartItems;

    let cartTotal = data.total;

    cartTotal -= product.sale_price * quantity;

    newData.total = cartTotal;

    localStorage.setItem("carts", JSON.stringify(newData));
    return newData;
};
