import { Breadcrumb, BreadcrumbCustom } from "components/common/Breadcrumb";
import { IMAGE_URL, PAGES_URL } from "contant";
import { convertContant } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MAIN } from "routes";
import { categoryAction } from "store/actions";
import { CollectionFilter, CollectionList } from "./layout";

const Collection = () => {

    const { BrandId } = useParams();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        dataBrand: null,
    })

    const store = useSelector((state) => state);
    const { listBrand } = store.brandReducer;

    React.useEffect(() => {
        dispatch(categoryAction.getListCategory())
    }, [])

    React.useEffect(() => {
        if (listBrand) {
            let detail = [].concat(listBrand.detail)
            if (listBrand.success) {
                setState(e => ({...e, dataBrand: detail}))
            }
        }
        
    }, [listBrand])

    const dataRouter = [
        {
            path: PAGES_URL.home.url,
            label: "Trang chủ",
        },
        {
            path: PAGES_URL.collection.url,
            label: BrandId ? convertContant(BrandId, state?.dataBrand, "brand_id").brand_name : "Tất cả sản phẩm",
        }, 
    ];

    return (
        <div className="collection">
            <BreadcrumbCustom router={dataRouter} />
            <div className="collection-template">
                <div className="container">
                    <div className="collection-banner">
                        <img src={`${IMAGE_URL + "banner-vans.jpg"}`} />
                    </div>
                    <div className="row d-flex">
                        <CollectionFilter />
                        <CollectionList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
