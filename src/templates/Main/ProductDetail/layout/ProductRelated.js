import { SliderRelated } from "components/base/Slider";
import { listProduct } from "dataFake/dataFake";
import React from "react";

const dataFake = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
  {
    id: 2,
    image:
      "https://drake.vn/image/cache/catalog/Converse/GIA%CC%80Y%202/172681C/172681C_P21-650x650.jpg",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
  {
    id: 7,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
  {
    id: 8,
    image:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665",
  },
];

const ProductRelated = () => {

  const [state, setState] = React.useState(listProduct);
  return (
    <div className="col-md-12 col-sm-12 col-xs-12 mt-5 product-related">
      <h3 className="title">
        <span>Sản phẩm liên quan</span>
      </h3>
      <SliderRelated children={state}/>
    </div>
  );
};

export default ProductRelated;
