import { DropdownCollection } from "components/base/Dropdown";
import { ProductBlock } from "components/common/Product";
import { convertContant, getValueNumber, getValueText } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { brandAction, shoesAction } from "store/actions";
import { usePagination } from "useHook";

const CollectionList = () => {
    const { BrandId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    let listLocation = history.location.pathname.split("/");

    const [state, setState] = React.useState({
        dataShoes: null,
        dataBrand: null,
        totalPage: null,
        totalRecord: null,
        page: 1,
        limit: 6,
    });

    const store = useSelector((state) => state);
    const { detailBrand } = store.brandReducer;
    const { listShoes } = store.shoesReducer;

    const pagination = usePagination({
        showTotal: true,
        page: state.page,
        totalRecord: state.totalRecord,
        totalPage: state.totalPage,
        limit: state.limit,
    });

    React.useEffect(() => {
        dispatch(brandAction.getDetailBrand({ brand_id: BrandId }));
    }, []);

    const callApi = () => {
        dispatch(
            shoesAction.getListShoes({
                page: state.page,
                limit: 6,
                brand_id: BrandId,
            })
        );
    };

    React.useEffect(() => {
        if (listLocation.length > 0) {
            let paramsSearch = new URLSearchParams(history.location.search);
            callApi();
        }
    }, [history.location, state.page]);

    React.useEffect(() => {
        if (detailBrand) {
            let detail = detailBrand.detail;
            if (detailBrand.success) {
                setState((e) => ({
                    ...e,
                    dataBrand: detail
                }));
            }
        }
    }, [detailBrand]);

    React.useEffect(() => {
        if (listShoes) {
            let detail = [].concat(listShoes.detail);
            if (listShoes.success) {
                let totalPage = listShoes.total_page;
                let totalRecord = listShoes.total_record;
                let page = listShoes.page;
                setState((e) => ({
                    ...e,
                    totalPage,
                    totalRecord,
                    page,
                    dataShoes: detail,
                }));
            }
        }
    }, [listShoes]);

    return (
        <div className="col-md-9 col-sm-12 col-xs-12 collection-list">
            <div className="collection-top-bar">
                <div className="collection-title">
                    <h1>
                        {state?.dataBrand ? state?.dataBrand?.brand_name : "Tất cả sản phẩm"}
                    </h1>
                </div>
                <div className="product-short">
                    <div className="wrap-box-sort">
                        <label>Sắp xếp:</label>
                        <DropdownCollection></DropdownCollection>
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
        </div>
    );
};

export default CollectionList;
