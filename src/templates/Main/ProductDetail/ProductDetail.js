import { Breadcrumb } from "components/common/Breadcrumb";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MAIN } from "routes";
import { shoesAction } from "store/actions";
import { ProductContent, ProductDescription, ProductGallery } from "./layout";
import ProductRelated from "./layout/ProductRelated";

const ProductDetail = () => {
    const { ShoesId } = useParams();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(shoesAction.getDetailShoes({ shoes_id: ShoesId }));
    }, []);

    return (
        <div className="product-detail">
            <Breadcrumb router={MAIN} />
            <div className="product-template">
                <div className="container">
                    <div className="row d-flex">
                        <ProductGallery />
                        <ProductContent />
                        <ProductDescription />
                        <ProductRelated />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
