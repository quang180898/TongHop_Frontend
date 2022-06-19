import { TabBase } from "components/base/Tab";
import React from "react";
import { TabDescription, TabReview, TabSpecification } from "./Item";

const ProductDescription = () => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <TabBase>
        <div label="Thông số kỹ thuật">
          <TabSpecification />
        </div>
        <div label="Mô tả">
          <TabDescription />
        </div>
        <div label="Đánh giá">
          <TabReview />
        </div>
      </TabBase>
    </div>
  );
};

export default ProductDescription;
