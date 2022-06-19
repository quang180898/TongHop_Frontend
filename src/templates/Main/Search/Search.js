import { PaginationBase } from "components/base/Pagination";
import { Breadcrumb } from "components/common/Breadcrumb";
import { ProductBlock } from "components/common/Product";
import { PAGES_URL } from "contant";
import { LoadDataPaging } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { MAIN } from "routes";
import { shoesAction } from "store/actions";

const Search = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    let listLocation = history.location.pathname.split("/");

    const [state, setState] = React.useState({
        dataShoes: null,
        dataSearch: "",
        total_page: 0,
        total_record: 0,
        page: 1,
        limit: 12,
    });

    const [dataSearch, setDataSearch] = React.useState("");

    const store = useSelector((state) => state.shoesReducer);
    const { listShoes } = store;

    const callApi = (shoesSearch = dataSearch) => {
        dispatch(
            shoesAction.getListShoes({
                page: state.page,
                shoes_name: shoesSearch,
                limit: 12,
            })
        );
    };

    React.useEffect(() => {
        if (listLocation.length > 0) {
            let dataSearch = null;
            if (history.location.pathname.indexOf("search") != -1) {
                let paramsSearch = new URLSearchParams(history.location.search);
                dataSearch = paramsSearch.get("q");
                callApi(dataSearch);
            }
            setDataSearch(dataSearch);
        }
    }, [history.location, state.page]);

    React.useEffect(() => {
        if (listShoes) {
            let detail = [].concat(listShoes.detail);
            if (listShoes.success) {
                let total_page = listShoes.total_page;
                let total_record = listShoes.total_record;
                let page = listShoes.page;
                setState((e) => ({
                    ...e,
                    total_page,
                    total_record,
                    page,
                    dataShoes: detail,
                }));
            }
        }
    }, [listShoes]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            history.replace({
                pathname: PAGES_URL.search.url,
                search: `?q=${e.target.value}`,
            });
        }
    };

    const onPageChange = (value) => {
        setState({ ...state, page: value })
    }

    return (
        <div className="search-main">
            <Breadcrumb router={MAIN} />
            <div className="search-templates">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="heading-search text-center">
                                <h1>Tìm kiếm</h1>
                                {state?.totalRecord > 0 && (
                                    <p className="sub-text">
                                        Có
                                        <span>
                                            {" "}
                                            {state?.totalRecord} sản phẩm{" "}
                                        </span>
                                        cho tìm kiếm
                                    </p>
                                )}
                            </div>
                            <div className="search-list">
                                <div className="search-content">
                                    {state?.dataShoes &&
                                    state?.dataShoes?.length > 0 ? (
                                        <>
                                            <p className="sub-result">
                                                Kết quả tìm kiếm cho{" "}
                                                <strong>{dataSearch}</strong>.
                                            </p>
                                            <div className="search-result-list">
                                                <div className="row">
                                                    {state?.dataShoes.map(
                                                        (item, index) => {
                                                            return (
                                                                <div
                                                                    className="col-md-2 col-sm-4 col-xs-6"
                                                                    key={index}
                                                                >
                                                                    <ProductBlock
                                                                        item={
                                                                            item
                                                                        }
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        state?.totalRecord == 0 && (
                                            <>
                                                <div className="empty-search">
                                                    <h2>
                                                        Không tìm thấy nội dung
                                                        bạn yêu cầu
                                                    </h2>
                                                    <div className="subtext">
                                                        <span>
                                                            Không tìm thấy kết
                                                            quả nào cho{" "}
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
                                            </>
                                        )
                                    )}

                                    {state.total_record > 0 && (
                                        <PaginationBase
                                            data={LoadDataPaging(
                                                state.total_record,
                                                state.page,
                                                state.total_page,
                                                state.limit
                                            )}
                                            onChange={onPageChange}
                                        />
                                    )}
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
