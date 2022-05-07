import { DropdownCollection } from "components/base/Dropdown";
import { ProductBlock } from "components/common/Product";
import { listProduct } from "dataFake/dataFake";
import React from "react";

const CollectionList = () => {
  const [state, setState] = React.useState(listProduct);

  return (
    <div className="col-md-9 col-sm-12 col-xs-12 collection-list">
      <div className="collection-top-bar">
        <div className="collection-title">
          <h1>Vans</h1>
        </div>
        <div className="product-short">
          <div className="wrap-box-sort">
            <label>Sắp xếp:</label>
            <DropdownCollection></DropdownCollection>
          </div>
        </div>
      </div>
      <div className="content-product-list d-flex">
        {state &&
          state.length > 0 &&
          state.map((item, index) => {
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
