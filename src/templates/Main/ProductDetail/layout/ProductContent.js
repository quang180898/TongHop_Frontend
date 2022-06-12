import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { CountDownTimer } from "components/common/Countdown";
import { InputUpDown } from "components/base/Input";
import { RatingStar } from "components/base/Rating";
import { listColor, listSize } from "dataFake/dataFake";
import React from "react";
import { SelectSwatch } from "components/common/Swatch";
import { useSelector } from "react-redux";
import { convertCurrency } from "functions/Utils";

const ProductContent = () => {
    const [formContent] = Form.useForm();

    const [state, setState] = React.useState(null);

    const store = useSelector((state) => state.shoesReducer);

    const { detailShoes } = store;

    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    React.useEffect(() => {
        if (detailShoes) {
            let detail = {...detailShoes.detail}
            if (detailShoes.success) {
                setState(detail)
            }
        }
    }, [detailShoes]);

    const onValuesChange = ({ e, all }) => {
        console.log({ e, all });
    };

    const onSubmitFormLayout = (e) => {
        console.log(e);
    };

    const onChange = (value) => {
        console.log(value);
    };

    return (
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="product-content">
                <div className="product-content-head">
                    <h1>
                        {state?.shoes_name}
                    </h1>
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
                            <span className="sku-number">{state?.shoes_code}</span>
                        </div>
                    </div>
                    <div className="product-price">
                        <span className="price-now">{convertCurrency(state?.shoes_retail_price, "đ")}</span>
                        <span className="price-compare">
                            <del>{convertCurrency(state?.discount_price, "đ")}</del>
                        </span>
                        <div className="product-status">
                            <span className="title">Tình trạng: </span>
                            <span className="status">Còn hàng</span>
                        </div>
                    </div>
                </div>
                <div className="product-countdown">
                    <div className="product-deal">
                        <span>Kết thúc trong: </span>
                        <CountDownTimer
                            targetDate={new Date(dateTimeAfterThreeDays)}
                        />
                    </div>
                </div>
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
                    Vans Old Skool Style 36 Marshmallow Jolly Green quay trở lại
                    cùng phối màu thời thượng, giúp bạn dễ dàng mix-match cùng
                    nhiều phong cách khác nhau đem lại vẻ ngoài năng động và
                    tươi trẻ. Phối màu Marshmallow/Jolly Green gây ấn tượng cùng
                    với dải Side Stripe uốn lượn trên thân giày mang đậm dấu ấn
                    của thương hiệu. Bên cạnh đó, những thay đổi của các chi
                    tiết nhỏ trên đôi giày cũng đem lại cho người dùng những
                    trải nghiệm tuyệt vời hơn.
                </div>
            </div>
            <Form form={formContent} onFinish={onSubmitFormLayout}>
                <SelectSwatch
                    className="select-size"
                    form={formContent}
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
                    onClick={() => formContent.submit()}
                />
                <ButtonBase className="btn-black-outline-1" label="Mua ngay" />
            </div>
        </div>
    );
};

export default ProductContent;
