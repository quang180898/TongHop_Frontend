import { IMAGE_URL } from "contant";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { ModalCustom } from "components/base/Modal";
import { Form } from "antd";
import { SelectSwatch } from "../Swatch";
import { listSize } from "dataFake/dataFake";
import { ButtonBase } from "components/base/Button";
import { InputUpDown } from "components/base/Input";
import { SliderDouble, SliderMain } from "components/base/Slider";
import { RatingStar } from "components/base/Rating";
import { useDispatch } from "react-redux";
import { cartAction } from "store/actions";

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

const ProductBlock = ({ item }) => {
  const [formBlock] = Form.useForm();

  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState({
    isShow: false,
    item: null,
  });

  const onSubmitFormLayout = (e) => {
    console.log(e);
  };

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div className="product-block">
      <div className="product-img">
        <div className="product-sale">
          <span>-20%</span>
        </div>
        <a href="/#" className="image-resize">
          <img src={item.image} alt="product image" />
        </a>
        <div className="product-wishlist">
          <Tooltip title="Yêu thích" placement="left" arrow>
            <button className="">
              <img src={`${IMAGE_URL + "heart.svg"}`} alt="heart" />
            </button>
          </Tooltip>
        </div>
        <div className="product-icon-action">
          <div className="add-to-cart btn-two">
            <button className="" onClick={() => dispatch(cartAction.addToCart(item))}>Thêm vào giỏ</button>
          </div>
          <div className="quick-view btn-two ">
            <button
              className=""
              onClick={() => setVisible((e) => ({ ...e, isShow: true }))}
            >
              Xem nhanh
            </button>
          </div>
        </div>
      </div>
      <div className="product-detail">
        <h3 className="product-name">
          <a>{item.name}</a>
        </h3>
        <div className="reviews-star">
          <i className="star-off-png" title="Not rated yet!"></i>&nbsp;
          <i className="star-off-png" title="Not rated yet!"></i>&nbsp;
          <i className="star-off-png" title="Not rated yet!"></i>&nbsp;
          <i className="star-off-png" title="Not rated yet!"></i>&nbsp;
          <i className="star-off-png" title="Not rated yet!"></i>
        </div>
        <div className="group-sku">
          <span className="first-sku">
            SKU: <span className="name-sku">VN0A4P3U6UX</span>
          </span>
        </div>
        <div className="price">
          <div className="special-price mr-2">
            <span className="price-new">{item.price} đ</span>
          </div>
          <div className="special-price">
            <span className="price-old">2.000.000 đ</span>
          </div>
        </div>
      </div>
      <ModalCustom
        classBody="modal-short-cart"
        visible={visible.isShow}
        onCancel={() => setVisible((e) => ({ ...e, isShow: false }))}
        widthModal={800}
        isHeaderBase={false}
      >
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <SliderDouble datas={dataFake} />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="product-title">
              <h2>Converse Chuck Taylor All Star 1970s Recycled Rpet Canvas</h2>
              <span className="pro-sku">
                <strong>SKU: </strong>
                SP020139
              </span>
            </div>
            <div className="product-price">
              <span className="pro-price">199,000₫</span>
              <del>320,000₫</del>
            </div>
            <div className="product-description">
              <div className="rte">
                Converse Chuck 70 Recycled RPET Canvas được “tái sinh” với chất
                liệu tái chế bảo vệ môi trường tối đa.
              </div>
              <a href="/#">Xem chi tiết »</a>
            </div>
            <Form form={formBlock} onFinish={onSubmitFormLayout}>
              <SelectSwatch
                className="select-size"
                form={formBlock}
                nameHeader="Kích thước"
                nameForm="size"
                options={listSize}
              />
              <div className="header-content">Số lượng:</div>
              <div className="quantity-area">
                <Form.Item name="updown" noStyle>
                  <InputUpDown onChange={onChange}></InputUpDown>
                </Form.Item>
              </div>
            </Form>
            <div className="wrap-addcart">
              <ButtonBase
                className="btn-black-outline mr-3"
                label="Thêm vào giỏ"
                onClick={() => formBlock.submit()}
              />
            </div>
          </div>
        </div>
      </ModalCustom>
    </div>
  );
};

export default ProductBlock;
