import { getLocalStore } from "functions/Utils";

export const IMAGE_URL = "../../images/";

export const CONTENT_TYPE = 'application/json; charset=utf-8';
export const CONTENT_MULITPART = 'multipart/form-data';
export const MNV_ENCODE = 0;
export const MAX_SIZE_IMAGE = 2500000; //limit size image
export const MNV_LANGUAGE = getLocalStore('language');
export const ERROR_SERVER = 'Đã xảy ra lỗi'; //check status error fail
export const CARD_EQUAL = "d-flex flex-column"; //for 2 card equal

export const FORMAT_DATE_API = "YYYY-MM-DD"
export const FORMAT_HOUR_API = "DD/MM/YYYY HH:mm:ss"

export const FILE_CONTENT_TYPE = {
    DEFAULT: 'application/octet-stream',
    PDF: 'application/pdf',
    PNG: 'image/png',
    JPEG: 'image/jpeg',
    JPG: 'image/jpg',
    DOC: 'application/msword',
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    XLS: 'application/vnd.ms-excel',
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    DWG: 'image/vnd.dwg',
}

export const LANGUAGE_TYPE = [
    { value: "1", text: "VIETNAMESE", label: "vi" },
    { value: "2", text: "ENGLISH", label: "en" },
    { value: "3", text: "CHINA", label: "zh-hans" },
]

export const NOTIFICATION_TYPE = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error',
}

export const PERMISSION = [
    { value: 1, label: 'admin', data: 'Admin' },
    { value: 2, label: 'user', data: 'User' },
]

export const GENDER_TYPE = [
    {value: 0, label: "Male" },
    {value: 1, label: "Famale"},
]

export const SETTING_USER = [
    {value: 1, label: "Tài khoản của tôi" },
    {value: 2, label: "Thoát tài khoản"},
]

export const USER_AVATAR_URL = 'user/avatar'

export const PAGES_URL = {
    login: {
        url: '/login',
        title: 'Login'
    },
    register: {
        url: '/register',
        title: 'Register'
    },
    profile: {
        url: '/profile',
        title: 'Profile'
    },
    mainReset: {
        url: '/reset',
        title: 'ResetMain'
    },
    favorite: {
        url: '/favorite',
        title: 'Favorite'
    },
    search: {
        url: '/search',
        title: 'Search'
    },
    home: {
        url: '/',
        title: 'Home'
    },
    collection: {
        url: '/collection',
        title: 'collection'
    },
    product: {
        url: '/product',
        title: 'product'
    },
    admin: {
        url: '/admin',
        title: 'admin'
    },
    user: {
        url: '/user',
        title: 'user'
    },
    author: {
        url: '/author',
        title: 'author'
    },
    book: {
        url: '/book',
        title: 'book'
    },
    publishing: {
        url: '/publishing',
        title: 'publishing-company'
    },
    cart: {
        url: '/cart',
        title: 'shopping-cart'
    },
    checkout: {
        url: '/checkouts',
        title: 'checkouts'
    },
    mainLogin: {
        url: '/login',
        title: 'main-login'
    },
    mainRegister: {
        url: '/register',
        title: 'main-register'
    },
    accountBook: {
        url: '/account-book',
        title: 'account-book'
    },
    payment: {
        url: '/payment',
        title: 'payment'
    },
    notify: {
        url: '/notify',
        title: 'notify'
    },
}