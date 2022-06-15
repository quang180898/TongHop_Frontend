import { PAGES_URL } from "contant";

export const MENU = [
    {   //dashboard
        link: PAGES_URL.admin.url,
        icon: 'las la-home',
        label: "Bảng điều khiển"
    },
    {
        link: PAGES_URL.user.url,
        icon: 'las la-users',
        label: 'Quản lý người dùng',
    },
    {
        link: PAGES_URL.brand.url,
        icon: 'las la-user-tie',
        label: 'Quản lý thương hiệu',
    },
    {
        link: PAGES_URL.category.url,
        icon: 'las la-folder',
        label: 'Quản lý thể loại',
    },
    {
        link: PAGES_URL.shoes.url,
        icon: 'las la-book-open',
        label: 'Quản lý sản phẩm',
    },
    {
        link: PAGES_URL.order.url,
        icon: 'las la-cube',
        label: 'Quản lý đơn hàng',
    },
    {
        link: PAGES_URL.discount.url,
        icon: 'las la-building',
        label: 'Quản lý khuyến mãi',
    },
]
