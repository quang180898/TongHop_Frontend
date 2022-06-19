import { IMAGE_URL, PAGES_URL } from "contant";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { ModalCustom, ModalNotification } from "components/base/Modal";
import { Form } from "antd";
import { SelectSwatch } from "../Swatch";
import { ButtonBase } from "components/base/Button";
import { InputUpDown } from "components/base/Input";
import { SliderDouble, SliderMain } from "components/base/Slider";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, favoriteAction, shoesAction } from "store/actions";
import { convertCurrency, showNotification } from "functions/Utils";
import { Link } from "react-router-dom";

const ProductBlock = ({ item }) => {
    const [formBlock] = Form.useForm();

    const dispatch = useDispatch();

    const [state, setState] = React.useState(null);

    const [visible, setVisible] = React.useState({
        isShow: false,
        item: null,
    });

    const [modalSuccess, setModalSuccess] = React.useState({
        isShow: false,
        item: null,
    });

    const store = useSelector((state) => state);
    const { cartItems } = store.cartReducer;
    const { favorites } = store.favoriteReducer;
    const { detailShoes } = store.shoesReducer;

    React.useEffect(() => {
        if (detailShoes) {
            let detail = detailShoes.detail;
            if (detailShoes.success) {
                setState(detail);
            }
        }
    }, [detailShoes]);

    const addToCart = (item) => {
        let newData = {};
        const index = cartItems.cart.indexOf(
            cartItems.cart.filter(
                (e) =>
                    e.shoes_id === item?.shoes_id &&
                    e.size === item?.shoes_quantity[0].size
            )[0]
        );
        if (index != -1) {
            newData = cartItems.cart[index];
        } else {
            newData = item;
        }
        if (item.shoes_quantity[0].quantity == cartItems?.cart[index]?.quantity) {
            showNotification.error({title: "Sản phảm tồn kho không đủ" })
        } else {
            setModalSuccess((e) => ({ ...e, isShow: true, item: newData }));
            dispatch(cartAction.addToCart({ product: item }));
        }
    };

    const showQuickModal = (e) => {
        dispatch(shoesAction.getDetailShoes({ shoes_id: e }));
        setVisible((e) => ({ ...e, isShow: true }));
    };

    const onSubmitFormLayout = (data) => {
        let newData = {};
        const index = cartItems.cart.indexOf(
            cartItems.cart.filter(
                (e) =>
                    e.shoes_id === item?.shoes_id &&
                    e.size === data.size
            )[0]
        );
        if (index != -1) {
            newData = cartItems.cart[index];
        } else {
            newData = item;
        }
        const indexQuantity = state.shoes_quantity.indexOf(
            state.shoes_quantity.filter((e) => e.size === data.size)[0]
        );
        if (
            state.shoes_quantity[indexQuantity].quantity ==
            cartItems?.cart[index]?.quantity
        ) {
            showNotification.error({ title: "Sản phẩm tồn kho không đủ" });
        }
        else {
            setVisible((e) => ({ ...e, isShow: false }))
            setModalSuccess((e) => ({ ...e, isShow: true, item: newData }));
            dispatch(cartAction.addToCart({ product: item , size: data.size, quantity: data.updown }));
        }
    };

    return (
        <div className="product-block">
            <div className="product-img">
                {item?.discount_percent > 0 ? (
                    <div className="product-sale">
                        <span>-{item.discount_percent}%</span>
                    </div>
                ) : (
                    ""
                )}
                <a href={PAGES_URL.product.url + "/" + item?.shoes_id} className="image-resize">
                    <img
                        src={`data:image/jpeg;base64, ${item?.image_bytes}`}
                        alt="product image"
                    />
                </a>
                <div className="product-wishlist">
                    <Tooltip title="Yêu thích" placement="left" arrow>
                        <button
                            className=""
                            onClick={() =>
                                dispatch(favoriteAction.addToFavorite(item))
                            }
                        >
                            {favorites
                                .map((item) => item?.shoes_id)
                                .includes(item?.shoes_id) ? (
                                <img
                                    src={`${IMAGE_URL + "heart-fill.svg"}`}
                                    alt="heart-fill"
                                />
                            ) : (
                                <img
                                    src={`${IMAGE_URL + "heart.svg"}`}
                                    alt="heart"
                                />
                            )}
                        </button>
                    </Tooltip>
                </div>
                <div className="product-icon-action">
                    <div className="add-to-cart btn-two">
                        <button className="" onClick={() => addToCart(item)}>
                            Thêm vào giỏ
                        </button>
                    </div>
                    <div className="quick-view btn-two ">
                        <button
                            className=""
                            onClick={() => showQuickModal(item.shoes_id)}
                        >
                            Xem nhanh
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-detail">
                <h3 className="product-name">
                    <a>{item?.shoes_name}</a>
                </h3>
                <div className="reviews-star">
                    <i className="star-off-png" title="Not rated yet!"></i>
                    &nbsp;
                    <i className="star-off-png" title="Not rated yet!"></i>
                    &nbsp;
                    <i className="star-off-png" title="Not rated yet!"></i>
                    &nbsp;
                    <i className="star-off-png" title="Not rated yet!"></i>
                    &nbsp;
                    <i className="star-off-png" title="Not rated yet!"></i>
                </div>
                <div className="group-sku">
                    <span className="first-sku">
                        SKU:{" "}
                        <span className="name-sku">{item?.shoes_code}</span>
                    </span>
                </div>
                <div className="price">
                    {item?.discount_percent > 0 ? (
                        <>
                            <div className="special-price mr-2">
                                <span className="price-new">
                                    {convertCurrency(item?.sale_price, "đ")}
                                </span>
                            </div>
                            <div className="special-price">
                                <span className="price-old">
                                    {convertCurrency(item?.retail_price, "đ")}
                                </span>
                            </div>
                        </>
                    ) : (
                        <div className="special-price mr-2">
                            <span className="price-new">
                                {convertCurrency(item?.sale_price, "đ")}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <ModalCustom
                classBody="modal-short-cart"
                visible={visible.isShow}
                onCancel={() => setVisible((e) => ({ ...e, isShow: false }))}
                widthModal={800}
                isShowClose={true}
                isHeaderBase={false}
            >
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <SliderDouble datas={state?.image_bytes} />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="product-title">
                            <h2>{state?.shoes_name}</h2>
                            <span className="pro-sku">
                                <strong>SKU: </strong>
                                {state?.shoes_code}
                            </span>
                        </div>
                        <div className="product-price">
                            {state?.discount_percent > 0 ? (
                                <>
                                    <span className="pro-price">
                                        {convertCurrency(
                                            state?.sale_price,
                                            "đ"
                                        )}
                                    </span>
                                    <span className="price-compare">
                                        <del>
                                            {convertCurrency(
                                                state?.retail_price,
                                                "đ"
                                            )}
                                        </del>
                                    </span>
                                </>
                            ) : (
                                <span className="pro-price">
                                    {convertCurrency(state?.retail_price, "đ")}
                                </span>
                            )}
                        </div>
                        <div className="product-description">
                            <div className="rte">
                                {state?.shoes_description}
                            </div>
                            <Link to={PAGES_URL.product.url + "/" + state?.shoes_id}>Xem chi tiết »</Link>
                        </div>
                        <Form form={formBlock} onFinish={onSubmitFormLayout}>
                            <SelectSwatch
                                className="select-size"
                                form={formBlock}
                                nameHeader="Kích thước"
                                nameForm="size"
                                options={state?.shoes_quantity}
                            />
                            <div className="header-content">Số lượng:</div>
                            <div className="quantity-area">
                                <Form.Item name="updown" noStyle>
                                    <InputUpDown/>
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
            <ModalNotification
                visible={modalSuccess}
                setVisible={setModalSuccess}
            />
        </div>
    );
};

export default ProductBlock;
