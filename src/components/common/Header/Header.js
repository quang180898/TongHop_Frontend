import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IMAGE_URL, PAGES_URL } from "contant";
import { getLocalStore } from "functions/Utils";
import { useDispatch, useSelector } from "react-redux";
import { ModalCustom } from "components/base/Modal";
import { FormSearch, MenuItems, TableCart } from "./Item";

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let listLocation = history.location.pathname.split("/");

    const ref = React.useRef(null);
    const user = getLocalStore("user");

    const [state, setState] = React.useState({
        cartCount: 0,
    });

    const [dataSearch, setDataSearch] = React.useState({
        isSearch: false,
        querySeach: "",
    });

    const [isSearch, setSearch] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const store = useSelector((state) => state);
    const { cartItems } = store.cartReducer;
    const { favorites } = store.favoriteReducer;

    React.useEffect(() => {
        if (cartItems.cart) {
            const dataCount = cartItems.cart
                .map((item) => item.quantity)
                .reduce((prev, next) => prev + next, 0);
            setState((e) => ({ ...e, cartCount: dataCount }));
        }
    }, [cartItems.cart]);

    React.useEffect(() => {
        if (listLocation.length > 0) {
            let dataSearch = null;
            if (history.location.pathname.indexOf("search") != -1) {
                let paramsSearch = new URLSearchParams(history.location.search);
                dataSearch = paramsSearch.get("q");
            }
            setDataSearch((e) => ({
                ...e,
                querySeach: dataSearch,
                isSearch: false,
            }));
        }
    }, [history.location]);

    React.useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [ref]);

    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setDataSearch((e) => ({ ...e, isSearch: false }));
        }
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setDataSearch((e) => ({ ...e, isSearch: false }));
        }
    };

    const closeSearch = () => {
        setDataSearch((e) => ({ ...e, isSearch: false }));
    };

    const onSearch = (value) => {
        // dispatch(commonAction.filterHeader(value))
    };

    // const handleClick = (e) => {
    //   history.push(PAGES_URL.home.url + "category/" + e);
    // };

    // const onMoveHome = () => {
    //   history.push(PAGES_URL.home.url);
    // };

    // const onMoveProfile = () => {
    //   history.push(PAGES_URL.home.url + "profile/" + user.customer_id);
    // };

    // const onChangeMenu = (value) => {
    //     switch (value) {
    //         case 1:
    //             return onMoveProfile()
    //         case 2:
    //             return logOut()
    //     }
    // }

    const logOut = () => {
        // xóa data storage
        getLocalStore("user", true);
        getLocalStore("payment", true);
        //reload page and auto run /login
        window.location.reload();
    };

    const onCloseModal = () => {
        setVisible(false);
    };

    return (
        <header className="header-section">
            <div className="auto-hide-header">
                <div className="navigation">
                    <div className="navigation__left">
                        <Link to={PAGES_URL.home.url} className="header-logo">
                            <img
                                src={`${IMAGE_URL + "logo-sneaker.jpg"}`}
                                alt="logo"
                            ></img>
                        </Link>
                    </div>
                    <div className="navigation__center">
                        <ul className="horizontal-list">
                            <MenuItems />
                        </ul>
                    </div>
                    <div className="navigation__right">
                        <div
                            className="search-wrap"
                            onClick={() =>
                                setDataSearch((e) => ({ ...e, isSearch: true }))
                            }
                        >
                            <img
                                className="icon-search"
                                src={`${IMAGE_URL + "icons8-search.svg"}`}
                                alt="image"
                            ></img>
                            <input
                                type="text"
                                defaultValue={dataSearch.querySeach}
                                placeholder="Tìm kiếm"
                                className="input-search"
                                readOnly
                            />
                        </div>
                        <Link
                            className="header-account header-tooltip"
                            to={user ? PAGES_URL.profile.url : PAGES_URL.mainLogin.url}
                            data-original-title={`${user ? "Hi, " + user.name : "Đăng nhập" }`}
                            data-tooltip="tooltip"
                        >
                            <img
                                className="icon-account"
                                src={`${IMAGE_URL + "my_account.svg"}`}
                                alt="image"
                            ></img>
                        </Link>
                        <Link
                            className="header-heart header-tooltip"
                            data-original-title="Danh sách yêu thích"
                            data-tooltip="tooltip"
                            to={PAGES_URL.favorite.url}
                        >
                            <img
                                className="icon-like"
                                src={`${IMAGE_URL + "heart.svg"}`}
                                alt="image"
                            />
                            <span className="number-like">
                                {favorites.length}
                            </span>
                        </Link>
                        <a
                            onClick={() => setVisible(true)}
                            className="header-cart header-tooltip"
                            data-original-title="Giỏ hàng"
                            data-tooltip="tooltip"
                        >
                            <img
                                className="icon-cart"
                                src={`${IMAGE_URL + "shopping-cart.svg"}`}
                                alt="image"
                            />
                            <span className="number-like">
                                {state.cartCount}
                            </span>
                        </a>
                    </div>
                </div>
                <FormSearch
                    dataSearch={dataSearch}
                    closeSearch={closeSearch}
                    refSearch={ref}
                />
            </div>
            <ModalCustom
                title="Giỏ hàng"
                classModal="modal-cart"
                visible={visible}
                onCancel={() => setVisible(false)}
                widthModal={500}
                isShowClose={true}
                isHeaderCart={true}
                isHeaderBase={false}
            >
                <TableCart onCloseModal={onCloseModal} />
            </ModalCustom>
        </header>
    );
};

export default Header;
