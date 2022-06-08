import { Breadcrumb, BreadcrumbCustom } from "components/common/Breadcrumb";
import { IMAGE_URL, PAGES_URL } from "contant";
import { convertContant } from "functions/Utils";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MAIN } from "routes";
import { CollectionFilter, CollectionList } from "./layout";

const Collection = () => {

    const [state, setState] = React.useState({
        dataBrand: null,
    })
    const { BrandId } = useParams();

    const store = useSelector((state) => state);
    const { listBrand } = store.brandReducer;

    console.log(listBrand)

    React.useEffect(() => {
        if (listBrand) {
            let detail = listBrand.detail
            if (listBrand.success) {
                console.log(detail)
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
