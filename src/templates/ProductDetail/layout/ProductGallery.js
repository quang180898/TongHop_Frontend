import { Tooltip } from "@mui/material";
import { SliderThumb } from "components/base/Slider";
import { IMAGE_URL } from "contant";
import React, { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import { useDispatch, useSelector } from "react-redux";
import { commonAction } from "store/actions";

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

const ProductGallery = () => {
  const [state, setState] = React.useState(dataFake);
  const [image, setImage] = React.useState();

  const dispatch = useDispatch()
  const sliderRef = useRef();

  const commonReducer = useSelector((state) => state.commonReducer);
  const { isChangeImage } = commonReducer;

  React.useEffect(() => {
    if (isChangeImage) {
      onChangeImageColor(isChangeImage);
    }
    
  }, [isChangeImage]);

  const onChangeImageColor = (id) => {
    if (id) {
      const newData = [].concat(state)
      let dataImage = ""
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id == id) {
          newData[i].isActive = true;
          dataImage = newData[i].image
          sliderRef.current.slickGoTo(i)
        } else {
          newData[i].isActive = false;
        }
      }
      setState(newData);
      setImage(dataImage);
    }
  };

  const onClickChangeImage = (item) => {
    if (item) {
      const newData = [].concat(state);
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].id == item.id) {
          newData[i].isActive = true;
        } else {
          newData[i].isActive = false;
        }
      }
      setState(newData);
      setImage(item.image);
    }
  };

  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 flex-wrap d-flex gallery-product-template">
      <div className="product-thumb">
        <SliderThumb sliderRef={sliderRef}>
          {state.map((item, index) => (
            <a
              className={`product-thumbnail ${item.isActive ? "active" : ""}`}
              key={index}
              onClick={() => onClickChangeImage(item)}
            >
              <img src={item.image} />
            </a>
          ))}
        </SliderThumb>
      </div>
      <div className="product-gallery">
        <div className="product-wishlist">
          <Tooltip title="Yêu thích" placement="left" arrow>
            <button className="">
              <img src={`${IMAGE_URL + "heart.svg"}`}></img>
            </button>
          </Tooltip>
        </div>
        <span className="product-sale-detail">
          <span className="sale">-20%</span>
        </span>
        <InnerImageZoom
          src={
            image
              ? image
              : "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/172676C-1_1024x1024@2x.jpg?v=1650368665"
          }
          className="product-image-feature"
          zoomType="hover"
          zoomPreload={true}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
