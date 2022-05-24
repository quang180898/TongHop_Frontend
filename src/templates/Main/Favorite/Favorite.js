import { Breadcrumb } from "components/common/Breadcrumb";
import { ProductBlock } from "components/common/Product";
import React from "react";
import { useSelector } from "react-redux";
import { MAIN } from "routes";

const Favorite = () => {
    const { favorites } = useSelector((state) => state.favoriteReducer);

    return (
        <div className="favorite">
            <Breadcrumb router={MAIN} />
            <div className="favorite-templates">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 mb-2">
                            <div className="heading-page">
                                <h1>Danh sách yêu thích</h1>
                            </div>
                            <div className="favorite-list">
                                {favorites.length > 0 ? (
                                    favorites.map((item, index) => {
                                        return (
                                            <div
                                                className="col-lg-2 col-md-3 col-sm-4 col-xs-6 pr-0"
                                                key={index}
                                            >
                                                <ProductBlock item={item} />
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className="col-xs-12 col-md-12 col-sm-12 text-center">
                                        Chưa có sản phẩm yêu thích! Hãy lựa chọn
                                        những sản phẩm ưa thích của mình nào.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorite;
