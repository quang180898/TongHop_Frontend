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
const AdminLogin = lazy(() => import("./templates/Admin/AdminLogin/AdminLogin"));
const MainRegister = lazy(() =>
    import("./templates/Main/MainRegister/MainRegister")
);
const MainReset = lazy(() => import("./templates/Main/MainReset/MainReset"));
const Page404 = lazy(() => import("./templates/Main/ErrorMain/ErrorMain"));
const Profile = lazy(() => import('./templates/Main/Profile/Profile'));
const Admin = lazy(() => import('./templates/Admin/Dashboard/Dashboard'));
const ManageBrand = lazy(() => import('./templates/Admin/ManageBrand/Manage/ManageBrand'));
const CreateBrand = lazy(() => import('./templates/Admin/ManageBrand/Create/CreateBrand'));
const EditBrand = lazy(() => import('./templates/Admin/ManageBrand/Edit/EditBrand'));

const ManageCategory = lazy(() => import('./templates/Admin/ManageCategory/Manage/ManageCategory'));
const CreateCategory = lazy(() => import('./templates/Admin/ManageCategory/Create/CreateCategory'));
const EditCategory= lazy(() => import('./templates/Admin/ManageCategory/Edit/EditCategory'));

const ManageUser = lazy(() => import('./templates/Admin/ManageUser/Manage/ManageUser'));
const CreateUser = lazy(() => import('./templates/Admin/ManageUser/Create/CreateUser'));
const EditUser= lazy(() => import('./templates/Admin/ManageUser/Edit/EditUser'));

const ManageShoes = lazy(() => import('./templates/Admin/ManageShoes/Manage/ManageShoes'));
const CreateShoes = lazy(() => import('./templates/Admin/ManageShoes/Create/CreateShoes'));
const EditShoes= lazy(() => import('./templates/Admin/ManageShoes/Edit/EditShoes'));

const ManageOrder = lazy(() => import('./templates/Admin/ManageOrder/Manage/ManageOrder'));
const CreateOrder = lazy(() => import('./templates/Admin/ManageOrder/Create/CreateOrder'));
const EditOrder = lazy(() => import('./templates/Admin/ManageOrder/Edit/EditOrder'));

const ManageDiscount = lazy(() => import('./templates/Admin/ManageDiscount/Manage/ManageDiscount'));
const CreateDiscount = lazy(() => import('./templates/Admin/ManageDiscount/Create/CreateDiscount'));
const EditDiscount = lazy(() => import('./templates/Admin/ManageDiscount/Edit/EditDiscount'));


const LOGINS = [
    {
        "path": PAGES_URL.adminLogin.url,
        "component": AdminLogin
    },
    // {
    //     "path": PAGES_URL.forgotPassword.url,
    //     "component": ForgotPassword
    // },
]

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
];

const PERSONAL = [
    {
        path: PAGES_URL.checkout.url,
        component: Checkout,
        label: "Thông tin giao hàng",
    },
];

const ADMIN = [
    {
        "path": PAGES_URL.admin.url,
        "component": Admin,
        "label": "Bảng điều khiển"
    },
    {
        "path": PAGES_URL.brand.url,
        "component": ManageBrand,
        "label": "Quản lý thương hiệu giày"
    },
    {
        "path": PAGES_URL.brand.url + "/create",
        "component": CreateBrand,
        "label": "Thêm thương hiệu giày"
    },
    {
        "path": PAGES_URL.brand.url + "/edit/:BrandId",
        "component": EditBrand,
        "label": "Chỉnh sửa thương hiệu giày"
    },
    
    {
        "path": PAGES_URL.category.url ,
        "component": ManageCategory,
        "label": "Quản lý kiểu giày"
    },
    {
        "path": PAGES_URL.category.url + "/create",
        "component": CreateCategory,
        "label": "Thêm kiểu giày"
    },
    {
        "path": PAGES_URL.category.url + "/edit/:CategoryId",
        "component": EditCategory,
        "label": "Chỉnh sửa kiểu giày"
    },
    {
        "path": PAGES_URL.user.url ,
        "component": ManageUser,
        "label": "Quản lý người dùng"
    },
    {
        "path": PAGES_URL.user.url + "/create",
        "component": CreateUser,
        "label": "Thêm người dùng"
    },
    {
        "path": PAGES_URL.user.url + "/edit/:AccountId",
        "component": EditUser,
        "label": "Chỉnh sửa người dùng"
    },
    {
        "path": PAGES_URL.shoes.url,
        "component": ManageShoes,
        "label": "Quản lý sản phẩm"
    },
    {
        "path": PAGES_URL.shoes.url + "/create",
        "component": CreateShoes,
        "label": "Thêm sản phẩm"
    },
    {
        "path": PAGES_URL.shoes.url + "/edit/:ShoesId",
        "component": EditShoes,
        "label": "Chỉnh sửa sản phẩm"
    },
    {
        "path": PAGES_URL.order.url,
        "component": ManageOrder,
        "label": "Quản lý đơn hàng"
    },
    {
        "path": PAGES_URL.order.url + "/create",
        "component": CreateOrder,
        "label": "Tạo đơn hàng"
    },
    {
        "path": PAGES_URL.order.url + "/edit/:OrderId",
        "component": EditOrder,
        "label": "Chỉnh sửa đơn hàng"
    },
    {
        "path": PAGES_URL.discount.url,
        "component": ManageDiscount,
        "label": "Quản lý khuyến mãi"
    },
    {
        "path": PAGES_URL.discount.url + "/create",
        "component": CreateDiscount,
        "label": "Tạo khuyến mãi"
    },
    {
        "path": PAGES_URL.discount.url + "/edit/:DiscountId",
        "component": EditDiscount,
        "label": "Chỉnh sửa khuyến mãi"
    },
]

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

export { MAIN, LOGINS, ADMIN, PERSONAL, ERROR, getPathList };
