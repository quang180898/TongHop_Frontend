import { PaginationBase } from "components/base/Pagination";
import { Breadcrumb } from "components/common/Breadcrumb";
import { ProductBlock } from "components/common/Product";
import { PAGES_URL } from "contant";
import React from "react";
import { useHistory } from "react-router-dom";
import { MAIN } from "routes";

const Search = () => {
    const history = useHistory();

    let listLocation = history.location.pathname.split("/");

    const [dataSearch, setDataSearch] = React.useState("");

    React.useEffect(() => {
        if (listLocation.length > 0) {
            let dataSearch = null;
            if (history.location.pathname.indexOf("search") != -1) {
                let paramsSearch = new URLSearchParams(history.location.search);
                dataSearch = paramsSearch.get("q");
            }
            setDataSearch(dataSearch);
        }
    }, [history.location]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            history.replace({
                pathname: PAGES_URL.search.url,
                search: `?q=${e.target.value}`,
            });
        }
    };

    return (
        <div className="search-main">
            <Breadcrumb router={MAIN} />
            <div className="search-templates">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="heading-search text-center">
                                <h1>Tìm kiếm</h1>
                                {/* <p className="sub-text">
                                    Có
                                    <span> 218 sản phẩm </span>
                                    cho tìm kiếm
                                </p> */}
                            </div>
                            <div className="search-list">
                                <div className="search-content">
                                    {/* <p className="sub-result">
                                        Kết quả tìm kiếm cho{" "}
                                        <strong>{dataSearch}</strong>.
                                    </p>
                                    <div className="search-result-list">
                                        <div className="row">
                                            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6"> */}
                                                {/* <ProductBlock /> */}
                                            {/* </div>
                                        </div>
                                    </div> */}
                                    {/* Không có data */}
                                    <div className="empty-search">
                                        <h2>
                                            Không tìm thấy nội dung bạn yêu cầu
                                        </h2>
                                        <div className="subtext">
                                            <span>
                                                Không tìm thấy kết quả nào cho{" "}
                                                {`"${dataSearch}"`}.
                                            </span>
                                        </div>
                                        <div className="empty-search__action">
                                            <input
                                                type="text"
                                                placeholder="Tìm kiếm toàn bộ sản phẩm"
                                                onKeyDown={onSearch}
                                            />
                                        </div>
                                    </div>
                                    {/* <PaginationBase/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
