import { IMAGE_URL, PAGES_URL } from "contant";
import React from "react";
import { useHistory } from "react-router-dom";

const FormSearch = ({ dataSearch, closeSearch, refSearch }) => {

  const history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault();
    onRedirect(e.target.q.value)
  }

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onRedirect(e.target.value)
    }
  }

  const onRedirect = (e) => {
    history.push({ pathname: PAGES_URL.search.url, search: `?q=${e}` })
  }

  return (
    <div className={`header-search ${dataSearch.isSearch ? "is-active" : ""}`} ref={refSearch}>
      <div className="header-search__top">
        <div className="navigation">
          <div className="navigation__left">logo</div>
          <div className="search-home">
            <form className="search-home__form" onSubmit={onSubmit}>
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
                defaultValue={dataSearch.querySearch}
                className="search-home__input"
                name="q"
                placeholder="Nhập từ khóa tìm kiếm"
                onKeyDown={onSearch}
              />
            </form>
          </div>
          <button
            type="button"
            className="search-btn-round"
            onClick={closeSearch}
          >
            <img
              className="icon-close"
              src={`${IMAGE_URL + "close.png"}`}
            ></img>
          </button>
        </div>
      </div>
      {/* show form search */}
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
  );
};

export default FormSearch;
