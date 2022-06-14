import { convertContant } from "functions/Utils";
import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PAGES_URL } from "./contant";

// const Page404 = lazy(() => import('../templates/ErrorPage/Page404'));
// const Login = lazy(() => import('./templates/Account/Login'));
// const ForgotPassword = lazy(() => import('./templates/Account/ForgotPassword'));
// const Register = lazy(() => import('./templates/Account/Register'));
const Home = lazy(() => import("./templates/Main/Home/Home"));
const Collection = lazy(() => import("./templates/Main/Collection/Collection"));
const ProductDetail = lazy(() =>
    import("./templates/Main/ProductDetail/ProductDetail")
);
const ShoppingCart = lazy(() =>
    import("./templates/Main/ShoppingCart/ShoppingCart")
);
const Checkout = lazy(() => import("./templates/Main/Checkout/Checkout"));
const Favorite = lazy(() => import("./templates/Main/Favorite/Favorite"));
const Search = lazy(() => import("./templates/Main/Search/Search"));
const MainLogin = lazy(() => import("./templates/Main/MainLogin/MainLogin"));
const MainRegister = lazy(() =>
    import("./templates/Main/MainRegister/MainRegister")
);
const MainReset = lazy(() => import("./templates/Main/MainReset/MainReset"));
const Page404 = lazy(() => import("./templates/Main/ErrorMain/ErrorMain"));
const Profile = lazy(() => import('./templates/Main/Profile/Profile'));
// const Product = lazy(() => import('./templates/Product/Product'));
// const Admin = lazy(() => import('./templates/Admin/Admin'));
// const User = lazy(() => import('./templates/User/ManageUser/ManageUser'));
// const CreateUser = lazy(() => import('./templates/User/CreateUser/CreateUser'));
// const EditUser = lazy(() => import('./templates/User/EditUser/EditUser'));
// const Author = lazy(() => import('./templates/Author/ManageAuthor/ManageAuthor'));
// const CreateAuthor = lazy(() => import('./templates/Author/CreateAuthor/CreateAuthor'));
// const Category = lazy(() => import('./templates/Category/ManageCategory/ManageCategory'));
// const CreateCategory = lazy(() => import('./templates/Category/CreateCategory/CreateCategory'));
// const Book = lazy(() => import('./templates/Book/ManageBook/ManageBook'));
// const CreateEditBook = lazy(() => import('./templates/Book/CreateEditBook/CreateEditBook'));
// const ManagePublishing = lazy(() => import('./templates/Publishing/ManagePublishing/ManagePublishing'));
// const CreatePublishing = lazy(() => import('./templates/Publishing/CreatePublishing/CreatePublishing'));

// const ManageBookAccount = lazy(() => import('./templates/BookUser/ManageBookAccount/ManageBookAccount'));
// const CreateBookAccount = lazy(() => import('./templates/BookUser/CreateBookAccount/CreateBookAccount'));

// const ManageCart = lazy(() => import('./templates/Cart/ManageCart'));

// const LOGINS = [
//     {
//         "path": PAGES_URL.login.url,
//         "component": Login
//     },
//     {
//         "path": PAGES_URL.forgotPassword.url,
//         "component": ForgotPassword
//     },
//     {
//         "path": PAGES_URL.register.url,
//         "component": Register
//     },
// ]

const MAIN = [
    {
        path: PAGES_URL.home.url,
        component: Home,
        label: "Trang chủ",
    },
    {
        path: PAGES_URL.collection.url,
        component: Collection,
        label: "Danh mục",
    },
    {
        path: PAGES_URL.collection.url + "/:BrandId",
        component: Collection,
        label: "Danh mục",
    },
    {
        path: PAGES_URL.product.url + "/:ShoesId",
        component: ProductDetail,
        label: "Chi tiết sản phẩm",
    },
    {
        path: PAGES_URL.cart.url,
        component: ShoppingCart,
        label: "Giỏ hàng",
    },
    {
        path: PAGES_URL.favorite.url,
        component: Favorite,
        label: "Danh sách yêu thích",
    },
    {
        path: PAGES_URL.search.url,
        component: Search,
        label: "Tìm kiếm",
    },
    {
        path: PAGES_URL.mainLogin.url,
        component: MainLogin,
        label: "Đăng nhập",
    },
    {
        path: PAGES_URL.mainRegister.url,
        component: MainRegister,
        label: "Đăng ký",
    },
    {
        path: PAGES_URL.mainReset.url,
        component: MainReset,
        label: "Phục hồi mật khẩu",
    },

    {
        path: PAGES_URL.profile.url,
        component: Profile,
        label: "Thông tin tài khoản",
    },
    
    // {
    //     "path": PAGES_URL.product.url + "/:bookId",
    //     "component": Product
    // },
    // {
    //     "path": PAGES_URL.cart.url,
    //     "component": ManageCart
    // }
];

const PERSONAL = [
    {
        path: PAGES_URL.checkout.url,
        component: Checkout,
        label: "Thông tin giao hàng",
    },
];

// const ADMIN = [
//     {
//         "path": PAGES_URL.admin.url,
//         "component": Admin,
//         "label": "Bảng điều khiển"
//     },
//     {
//         "path": PAGES_URL.user.url,
//         "component": User,
//         "label": "Quản lý người dùng"
//     },
//     {
//         "path": PAGES_URL.user.url + "/add",
//         "component": CreateUser,
//         "label": "Thêm người dùng"
//     },
//     {
//         "path": PAGES_URL.user.url + "/:accountId",
//         "component": EditUser,
//         "label": "Cập nhật người dùng"
//     },
//     {
//         "path": PAGES_URL.user.url + "/:accountId",
//         "component": EditUser,
//         "label": "Cập nhật người dùng"
//     },
//     {
//         "path": PAGES_URL.author.url ,
//         "component": Author,
//         "label": "Quản lý tác giả"
//     },
//     {
//         "path": PAGES_URL.author.url + "/add",
//         "component": CreateAuthor,
//         "label": "Thêm tác giả"
//     },
//     {
//         "path": PAGES_URL.category.url,
//         "component": Category,
//         "label": "Quản lý danh mục"
//     },
//     {
//         "path": PAGES_URL.category.url + "/add",
//         "component": CreateCategory,
//         "label": "Thêm danh mục"
//     },
//     {
//         "path": PAGES_URL.book.url,
//         "component": Book,
//         "label": "Quản lý sách"
//     },
//     {
//         "path": PAGES_URL.book.url + "/add",
//         "component": CreateEditBook,
//         "label": "Thêm sách"
//     },
//     {
//         "path": PAGES_URL.book.url + "/:bookId",
//         "component": CreateEditBook,
//         "label": "Sửa sách"
//     },
//     {
//         "path": PAGES_URL.publishing.url,
//         "component": ManagePublishing,
//         "label": "Quản lý nhà xuất bản"
//     },
//     {
//         "path": PAGES_URL.publishing.url + "/add",
//         "component": CreatePublishing,
//         "label": "Thêm nhà xuất bản"
//     },
//     {
//         "path": PAGES_URL.accountBook.url,
//         "component": ManageBookAccount,
//         "label": "Quản lý sách người dùng"
//     },
//     {
//         "path": PAGES_URL.accountBook.url + "/add",
//         "component": CreateBookAccount,
//         "label": "Thêm sách người dùng"
//     },
// ]

// error page
const ERROR = [
    {
        path: "/404",
        component: Page404,
        label: "",
    },
];

const getPathList = (DATA) => {
    var list = [];
    for (var i = 0; i < DATA.length; i++) {
        if (DATA[i]) {
            list.push(DATA[i].path);
        }
    }
    return list;
};

export { MAIN, PERSONAL, ERROR, getPathList };
