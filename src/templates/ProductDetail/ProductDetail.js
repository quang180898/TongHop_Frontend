import { Breadcrumb } from "components/common/Breadcrumb";

import React from "react";
import { MAIN } from "routes";
import { ProductContent, ProductDescription, ProductGallery } from "./layout";
import ProductRelated from "./layout/ProductRelated";

const ProductDetail = () => {
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
