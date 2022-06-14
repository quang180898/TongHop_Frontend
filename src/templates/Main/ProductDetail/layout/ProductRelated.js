import { SliderRelated } from "components/base/Slider";
import React from "react";
import { useSelector } from "react-redux";

const ProductRelated = () => {
    const [state, setState] = React.useState(null);

    const store = useSelector((state) => state.shoesReducer);
    const { sameShoes } = store;

    React.useEffect(() => {
        if (sameShoes) {
            let detail = sameShoes.detail;
            if (sameShoes.success) {
                setState(detail);
            }
        }
    }, [sameShoes]);

    return (
        <div className="col-md-12 col-sm-12 col-xs-12 mt-5 product-related">
            <h3 className="title">
                <span>Sản phẩm liên quan</span>
            </h3>
            <SliderRelated children={state} />
        </div>
    );
};

export default ProductRelated;
