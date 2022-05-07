import { Input, Menu } from "antd";
import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { IMAGE_URL, PAGES_URL, SETTING_USER } from "contant";
import { getLocalStore } from "functions/Utils";
import { useDispatch, useSelector } from "react-redux";
import MenuItems from "../Menu/MenuItems";

const { Search } = Input;
const { SubMenu } = Menu;

const menuItems = [
  {
    title: "Nữ",
    isOpen: false,
    submenu: [
      {
        title: "web design",
      },
      {
        title: "web development",
      },
      {
        title: "SEO",
      },
    ],
  },
  {
    title: "Túi xách nữ",
    isOpen: false,
    submenu: [
      {
        title: "1",
      },
      {
        title: "2",
      },
      {
        title: "3",
      },
    ],
  },
  {
    title: "Nam",
    isOpen: false,
    submenu: [
      {
        title: "4",
      },
      {
        title: "5",
      },
      {
        title: "6",
      },
    ],
  },
  {
    title: "Trẻ em",
  },
  {
    title: "Gift card",
  },
  {
    title: "CÉLINE DION COLLECTION",
  },
  {
    title: "BLOG",
  },
];

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ref = useRef(null)
  const userLocal = getLocalStore("user");
  const [user, setUser] = useState(userLocal);

  const [state, setState] = useState(menuItems);
  const [isSearch, setSearch] = useState(false);
  const [product, setProduct] = useState();
  

  const store = useSelector((state) => state);
  // const { listCategory } = store.homeReducer;
  // const { addCart , deleteCart} = store.cartReducer

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setProduct(cart);
    // dispatch(homeAction.loadListCategory())
  }, []);

  useEffect(() => {
    if (product) { 
      console.log(product);
    }
  }, [product]);

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref]);

  // useEffect(() => {
  //     if (addCart) {
  //         setProduct(addCart)
  //     }
  // }, [addCart])

  // useEffect(() => {
  //     if (deleteCart) {
  //         setProduct(deleteCart)
  //     }
  // }, [deleteCart])

  // useEffect(() => {
  //     if (listCategory) {
  //         setState(listCategory.detail)
  //     }
  // }, [listCategory])

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setSearch(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSearch(false);
    }
  };

  const onSearch = (value) => {
    // dispatch(commonAction.filterHeader(value))
  };

  const handleClick = (e) => {
    history.push(PAGES_URL.home.url + "category/" + e);
  };

  const onMoveHome = () => {
    history.push(PAGES_URL.home.url);
  };

  const onMoveProfile = () => {
    history.push(PAGES_URL.home.url + "profile/" + user.customer_id);
  };

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
    const newData = [].concat(state);
    for (let i = 0; i < newData.length; i++) {
      newData[i].isOpen = false;
    }
    setState(newData);
  };

  return (
    <header className="header-section">
      <div className="auto-hide-header">
        <div className="navigation" onMouseLeave={() => onMouseOut()}>
          <div className="navigation__left">logo</div>
          <div className="navigation__center">
            <ul className="horizontal-list">
              <MenuItems data={state} />
            </ul>
          </div>
          <div className="navigation__right">
            <div className="search-wrap" onClick={() => setSearch(true)}>
              <img
                className="icon-search"
                src={`${IMAGE_URL + "icons8-search.svg"}`}
              ></img>
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="input-search"
              />
            </div>
            <div className="header-account">
              <img
                className="icon-account"
                src={`${IMAGE_URL + "my_account.svg"}`}
              ></img>
            </div>
            <div className="header-heart">
              <img
                className="icon-like"
                src={`${IMAGE_URL + "heart.svg"}`}
              />
              <span className="number-like">2</span>
            </div>
            <div className="header-cart">
              <img
                className="icon-cart"
                src={`${IMAGE_URL + "shopping-cart.svg"}`}
              />
              <span className="number-like">2</span>
            </div>
          </div>
        </div>
        <div className={`header-search ${isSearch ? "is-active" : ""}`} ref={ref}>
        <div className="header-search__top">
          <div className="navigation">
            <div className="navigation__left">logo</div>
            <div className="search-home">
              <form className="search-home__form">
                <button
                  type="submit"
                  className="search-home__submit"
                  style={{ border: "none", background: "none" }}
                >
                  <img
                    className="img-submit"
                    src={`${IMAGE_URL + "search.png"}`}
                  ></img>
                </button>
                <input
                  type="search"
                  className="search-home__input"
                  placeholder="Nhập từ khóa tìm kiếm"
                ></input>
              </form>
            </div>
            <button type="button" className="search-btn-round" onClick={() => setSearch(false)}>
              <img 
                className="icon-close"
                src={`${IMAGE_URL + "close.png"}`}></img>
              </button>
          </div>
        </div>
        <div className="header-search__bottom">
          <div className="search-popular">
            <div className="search-popular__wrapper">
              <span>Từ khoá tìm kiếm nhiều nhất</span>
              <ul>
                <li>
                  <a href="/#">Giày nike</a>
                </li>
                <li>
                  <a href="/#">Giày supra</a>
                </li>
                <li>
                  <a href="/#">Giày converse</a>
                </li>
                <li>
                  <a href="/#">Giày Vans</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
