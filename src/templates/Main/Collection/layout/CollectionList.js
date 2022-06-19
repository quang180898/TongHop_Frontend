import { DropdownCollection } from "components/base/Dropdown";
import { PaginationBase } from "components/base/Pagination";
import { ProductBlock } from "components/common/Product";
import { convertContant, getValueNumber, getValueText, LoadDataPaging } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { brandAction, shoesAction } from "store/actions";

const CollectionList = ({ isPage, setPage }) => {
    const { BrandId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    let listLocation = history.location.pathname.split("/");

    const [state, setState] = React.useState({
        dataShoes: null,
        dataBrand: null,
        dataSort: null,
        total_page: 0,
        total_record: 0,
        page: 1,
        limit: 12,
    });

    const store = useSelector((state) => state);
    const { detailBrand } = store.brandReducer;
    const { listShoes } = store.shoesReducer;

    let paramsSearch = new URLSearchParams(history.location.search);
    let category = paramsSearch.get("category");

    const callApi = (category, dataSort = state.dataSort) => {
        dispatch(
            shoesAction.getListShoes({
                page: isPage ? 1 : state.page,
                limit: state.limit,
                category_id: category,
                brand_id: BrandId,
                sort_key: dataSort
            })
        );
    };

    React.useEffect(() => {
        dispatch(brandAction.getDetailBrand({ brand_id: BrandId }));
    }, []);

    React.useEffect(() => {
        if (listLocation.length > 0) {
            callApi(category);
        }
    }, [history.location, state.page]);

    React.useEffect(() => {
        if (detailBrand) {
            let detail = detailBrand.detail;
            if (detailBrand.success) {
                setState((e) => ({
                    ...e,
                    dataBrand: detail,
                }));
            }
        }
    }, [detailBrand]);

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
                setPage(false);
            }
        }
    }, [listShoes]);

    const onPageChange = (value) => {
        setState({ ...state, page: value })
    }
    const onChangeSort = (sort) => {
        callApi(category, sort);
    }

    return (
        <div className="col-md-9 col-sm-12 col-xs-12 collection-list">
            <div className="collection-top-bar">
                <div className="collection-title">
                    <h1>
                        {state?.dataBrand
                            ? state?.dataBrand?.brand_name
                            : "Tất cả sản phẩm"}
                    </h1>
                </div>
                <div className="product-short">
                    <div className="wrap-box-sort">
                        <label>Sắp xếp:</label>
                        <DropdownCollection onChange={onChangeSort}/>
                    </div>
                </div>
            </div>
            <div className="content-product-list d-flex">
                {state?.dataShoes &&
                    state?.dataShoes?.length > 0 &&
                    state.dataShoes.map((item, index) => {
                        return (
                            <div
                                className="col-lg-3 col-md-3 col-sm-4 col-xs-6 pr-0 d-flex-column"
                                key={index}
                            >
                                <ProductBlock item={item} />
                            </div>
                        );
                    })}
            </div>
            {state.total_record > 0 && <PaginationBase data={LoadDataPaging(state.total_record, state.page, state.total_page, state.limit)} onChange={onPageChange}/>}
        </div>
    );
};

export default CollectionList;
