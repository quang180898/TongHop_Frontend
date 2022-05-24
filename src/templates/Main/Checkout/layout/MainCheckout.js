import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL, PAGES_URL } from "contant";
import { BreadcrumbCustom } from "components/common/Breadcrumb";
import { ButtonBase } from "components/base/Button";
import { CollapseBase } from "components/base/Collapse";
import { InputBase } from "components/base/Input";
import { RadioCheckout, RadioGroupCustom } from "components/base/Radio";
import { SelectBase } from "components/base/Select";
import { TableCustom } from "components/base/Table";
import { Form } from "antd";

const dataRouter = [
    {
        path: PAGES_URL.cart.url,
        label: "Giỏ hàng",
    },
    {
        path: PAGES_URL.checkout.url,
        label: "Thông tin giao hàng",
    },
];

const optionsRadioStore = [
    {
        label: (
            <span className="radio-label-store">
                <strong>Sneaker 10 Trung Mỹ Tây: </strong>10 Trung Mỹ Tây, Quận
                12, Hồ Chí Minh
            </span>
        ),
        value: 1,
    },
    {
        label: (
            <span className="radio-label-store">
                <strong>Sneaker 10 Tân Chánh Hiệp: </strong>10 Tân Chánh Hiệp,
                Quận 12, Hồ Chí Minh
            </span>
        ),
        value: 2,
    },
];

const optionsRadioPayment = [
    {
        label: (
            <span className="radio-label-store">
                <img src={`${IMAGE_URL + "cod.svg"}`} />
                Thanh toán khi giao hàng
            </span>
        ),
        value: 1,
    },
    {
        label: (
            <span className="radio-label-store">
                <img src={`${IMAGE_URL + "momo.svg"}`} />
                Ví Momo
            </span>
        ),
        value: 2,
    },
];

const MainCheckout = () => {

    const [dataRadio, setDataRadio] = React.useState({
        radioFirst: true,
        radioSecond: false,
        key: 0,
    });

    const onClickRadioFirst = () => {
        setDataRadio((e) => ({
            ...e,
            radioFirst: true,
            radioSecond: false,
            key: 0,
        }));
    };

    const onClickRadioSecond = () => {
        setDataRadio((e) => ({
            ...e,
            radioFirst: false,
            radioSecond: true,
            key: 1,
        }));
    };

    return (
        <div className="main">
            <div className="main-header">
                <Link to={PAGES_URL.home.url} className="logo">
                    <img src={`${IMAGE_URL + "logo-sneaker.jpg"}`} />
                </Link>
                <BreadcrumbCustom router={dataRouter} />
            </div>
            <div className="main-content">
                <div className="content-header">
                    <h2 className="content-title">Thông tin giao hàng</h2>
                </div>
                <div className="checkout-address">
                    <p className="text-account">
                        Bạn đã có tài khoản? <Link to={"/#"}>Đăng nhập</Link>
                    </p>
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <Form.Item label="Họ và tên">
                                <InputBase placeholder="Họ và tên" />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-8 pr-0">
                            <Form.Item label="Email">
                                <InputBase placeholder="Email" />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-4">
                            <Form.Item label="Số điện thoại">
                                <InputBase placeholder="Số điện thoại" />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="checkout-delivery">
                    <CollapseBase
                        className="collapse-checkout"
                        forceRender={true}
                        showArrow={false}
                        ghost={true}
                        activeKey={{ ["activeKey"]: dataRadio.key }}
                    >
                        <div
                            header={
                                <div
                                    className="radio-wrapper"
                                    onClick={onClickRadioFirst}
                                >
                                    <RadioCheckout
                                        form={true}
                                        name="radio_delivery"
                                        checked={dataRadio.radioFirst}
                                    />
                                    <span>Giao tận nơi</span>
                                </div>
                            }
                        >
                            <div className="row">
                                <div className="col-12 col-sm-12">
                                    <Form.Item label="Địa chỉ">
                                        <InputBase placeholder="Địa chỉ" />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <Form.Item label="Quốc gia">
                                        <SelectBase placeholder="Chọn quốc gia" />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <Form.Item label="Tỉnh / thành">
                                        <SelectBase placeholder="Chọn tỉnh / thành" />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <Form.Item label="Quận / huyện">
                                        <SelectBase placeholder="Chọn quận / huyện" />
                                    </Form.Item>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <Form.Item label="Phường / xã">
                                        <SelectBase placeholder="Chọn phường / xã" />
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                        <div
                            header={
                                <div
                                    className="radio-wrapper"
                                    onClick={onClickRadioSecond}
                                >
                                    <RadioCheckout
                                        form={true}
                                        name="radio_delivery"
                                        checked={dataRadio.radioSecond}
                                    />
                                    <span>Nhận tại cửa hàng</span>
                                </div>
                            }
                        ></div>
                    </CollapseBase>
                </div>
                {dataRadio.radioSecond && (
                    <div className="checkout-store">
                        <div className="content-header">
                            <h2 className="content-title">Nhận tại cửa hàng</h2>
                        </div>
                        <div className="content-box">
                            <Form.Item name="radio-store" noStyle>
                                <RadioGroupCustom options={optionsRadioStore} />
                            </Form.Item>
                        </div>
                    </div>
                )}
                <div className="checkout-payment">
                    <div className="content-header">
                        <h2 className="content-title">
                            Phương thức thanh toán
                        </h2>
                    </div>
                    <div className="content-box">
                        <Form.Item name="radio-payment" noStyle>
                            <RadioGroupCustom options={optionsRadioPayment} />
                        </Form.Item>
                    </div>
                </div>
                <div className="content-footer">
                    <Link to={PAGES_URL.cart.url} className="footer-previous">
                        Giỏ hàng
                    </Link>
                    <ButtonBase
                        className="btn btn-blue"
                        label="Hoàn tất đơn hàng"
                        htmlType="submit"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainCheckout;
