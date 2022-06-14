import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { CountDownTimer } from "components/common/Countdown";
import { InputUpDown } from "components/base/Input";
import { RatingStar } from "components/base/Rating";
import { listColor, listSize } from "dataFake/dataFake";
import React from "react";
import { SelectSwatch } from "components/common/Swatch";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, convertCurrency } from "functions/Utils";
import { cartAction } from "store/actions";
import { ModalNotification } from "components/base/Modal";

const ProductContent = () => {
    const [formContent] = Form.useForm();
    const dispatch = useDispatch();

    const [state, setState] = React.useState(null);
    const [modalSuccess, setModalSuccess] = React.useState({
        isShow: false,
        item: null,
    });

    const store = useSelector((state) => state);

    const { cartItems } = store.cartReducer;

    const { detailShoes } = store.shoesReducer;

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    React.useEffect(() => {
        if (detailShoes) {
            let detail = { ...detailShoes.detail };
            if (detailShoes.success) {
                setState(detail);
            }
        }
    }, [detailShoes]);

    const onSubmitFormLayout = (e) => {
        console.log(e);
    };

    const addToCart = () => {
        let data = formContent.getFieldsValue(true);
        let newData = {};
        const index = cartItems.cart.indexOf(
            cartItems.cart.filter(
                (e) => e.shoes_id === state.shoes_id && e.size === data.size
            )[0]
        );
        if (index != -1) {
            newData = cartItems.cart[index];
        } else {
            newData = state;
        }
        setModalSuccess((e) => ({ ...e, isShow: true, item: newData }));
        dispatch(
            cartAction.addToCart({
                product: state,
                size: data.size,
                quantity: data.updown,
            })
        );
    };

    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="product-content">
                <div className="product-content-head">
                    <h1>{state?.shoes_name}</h1>
                    <div className="d-flex align-items-center reviews-badge">
                        <RatingStar
                            className="rating-product"
                            readOnly={true}
                        />
                        <span className="evaluate">0 đánh giá</span>
                    </div>
                    <div className="product-info">
                        <div className="pro-brand">
                            <span className="title">Thương hiệu: </span>
                            <a href="/#">{state?.shoes_brand_name}</a>
                        </div>
                        <span className="line-info">|</span>
                        <div className="pro-sku">
                            <span className="title">MSP: </span>
                            <span className="sku-number">
                                {state?.shoes_code}
                            </span>
                        </div>
                    </div>
                    <div className="product-price">
                        {state?.discount_percent > 0 ? (
                            <>
                                <span className="price-now">
                                    {convertCurrency(state?.sale_price, "đ")}
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
                            <span className="price-now">
                                {convertCurrency(state?.retail_price, "đ")}
                            </span>
                        )}

                        <div className="product-status">
                            <span className="title">Tình trạng: </span>
                            <span className="status">Còn hàng</span>
                        </div>
                    </div>
                </div>
                {state?.end_discount_date && (
                    <div className="product-countdown">
                        <div className="product-deal">
                            <span>Kết thúc trong: </span>
                            <CountDownTimer
                                targetDate={new Date(state?.end_discount_date)}
                            />
                        </div>
                    </div>
                )}
                <div className="thongtinkhuyenmai">
                    <ul>
                        <li>
                            <span>
                                Tặng thêm Tote bag + Freeship với đơn hàng từ
                                3.000.000đ
                            </span>
                        </li>
                        <li>
                            <span>Freeship cho đơn hàng từ 2.000.000đ</span>
                        </li>
                        <li>
                            <span>
                                Bảo hành chính hãng 1 tháng với giày dép
                            </span>
                        </li>
                        <li>
                            <span>
                                Freeship cho đơn hàng từ 600k ( tối đa 30k )
                                <br />
                                <span style={{ color: "#ff0000" }}>
                                    (Không áp dụng đồng thời các chương
                                    trình&nbsp;khuyến mãi khác)
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="short-description">
                    {state?.shoes_description}
                </div>
            </div>
            <Form form={formContent} onFinish={onSubmitFormLayout}>
                <SelectSwatch
                    className="select-size"
                    form={formContent}
                    nameHeader="Kích thước"
                    nameForm="size"
                    options={state?.shoes_quantity}
                />
                <div className="header-content">Số lượng:</div>
                <div className="quantity-area">
                    <Form.Item name="updown" noStyle>
                        <InputUpDown />
                    </Form.Item>
                </div>
            </Form>
            <div className="wrap-addcart">
                <ButtonBase
                    className="btn-black-outline mr-3"
                    label="Thêm vào giỏ"
                    onClick={addToCart}
                />
                <ButtonBase className="btn-black-outline-1" label="Mua ngay" />
            </div>
            <ModalNotification
                visible={modalSuccess}
                setVisible={setModalSuccess}
            />
        </div>
    );
};

export default ProductContent;
