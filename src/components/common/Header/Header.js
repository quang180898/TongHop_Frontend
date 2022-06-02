import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IMAGE_URL, PAGES_URL } from "contant";
import { getLocalStore } from "functions/Utils";
import { useDispatch, useSelector } from "react-redux";
import MenuItems from "../Menu/MenuItems";
import { ModalCustom } from "components/base/Modal";
import { FormSearch, TableCart } from "./Item";

const menuItems = [
    {
        title: "Converse",
    },
    {
        title: "Vans",
    },
    {
        title: "Palladium",
    },
    {
        title: "K-wiss",
    },
    {
        title: "Supra",
    },
    {
        title: "Sản phẩm",
    },
    {
        title: "Cửa hàng",
    },
];

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    let listLocation = history.location.pathname.split("/");

    const ref = React.useRef(null);
    const userLocal = getLocalStore("user");
    const [user, setUser] = React.useState(userLocal);

    const [state, setState] = React.useState({
        categories: menuItems,
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

    const onMoveCart = () => {
        history.push(PAGES_URL.cart.url);
    };

    const onMouseOut = () => {
        const newData = [].concat(state.categories);
        for (let i = 0; i < newData.length; i++) {
            newData[i].isOpen = false;
        }
        setState((e) => ({ ...e, categories: newData }));
    };

    const onCloseModal = () => {
        setVisible(false);
    };

    return (
        <header className="header-section">
            <div className="auto-hide-header">
                <div className="navigation" onMouseLeave={() => onMouseOut()}>
                    <div className="navigation__left">
                        <Link to={PAGES_URL.home.url} className="header-logo">
                            <img
                                src={`${IMAGE_URL + "logo-sneaker.jpg"}`}
                            ></img>
                        </Link>
                    </div>
                    <div className="navigation__center">
                        <ul className="horizontal-list">
                            <MenuItems data={state.categories} />
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
                            ></img>
                            <input
                                type="text"
                                defaultValue={dataSearch.querySeach}
                                placeholder="Tìm kiếm"
                                className="input-search"
                                readOnly
                            />
                        </div>
                        <div className="header-account">
                            <img
                                className="icon-account"
                                src={`${IMAGE_URL + "my_account.svg"}`}
                            ></img>
                        </div>
                        <div
                            className="header-heart"
                            onClick={() => history.push(PAGES_URL.favorite.url)}
                        >
                            <img
                                className="icon-like"
                                src={`${IMAGE_URL + "heart.svg"}`}
                            />
                            <span className="number-like">
                                {favorites.length}
                            </span>
                        </div>
                        <div
                            className="header-cart"
                            onClick={() => setVisible(true)}
                        >
                            <img
                                className="icon-cart"
                                src={`${IMAGE_URL + "shopping-cart.svg"}`}
                            />
                            <span className="number-like">
                                {state.cartCount}
                            </span>
                        </div>
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
