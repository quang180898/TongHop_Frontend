import React from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL, PAGES_URL } from "contant";
import { BreadcrumbCustom } from "components/common/Breadcrumb";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import {  RadioGroupCustom } from "components/base/Radio";
import { Form } from "antd";
import { RULES } from "functions/Utils";

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

    return (
        <div className="main">
            <div className="main-header">
                <Link to={PAGES_URL.home.url} className="logo">
                    <img src={`${IMAGE_URL + "logo-sneaker.jpg"}`} />
                </Link>
                <BreadcrumbCustom router={dataRouter} isCheckout={true} />
            </div>
            <div className="main-content">
                <div className="content-header">
                    <h2 className="content-title">Thông tin giao hàng</h2>
                </div>
                <div className="checkout-address">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <Form.Item name="name" label="Họ và tên">
                                <InputBase placeholder="Họ và tên" disabled={true}/>
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-12">
                            <Form.Item name="mail" label="Email">
                                <InputBase placeholder="Email" disabled={true}/>
                            </Form.Item>
                        </div>
                        {/* <div className="col-12 col-sm-12">
                            <Form.Item label="Số điện thoại">
                                <InputBase placeholder="Số điện thoại" />
                            </Form.Item>
                        </div> */}
                        <div className="col-12 col-sm-12">
                            <Form.Item name="address" label="Địa chỉ" className="form-group" rules={RULES.text.form(true, 'Vui lòng nhập địa chỉ')}>
                                <InputBase placeholder="Địa chỉ" />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="checkout-payment">
                    <div className="content-header">
                        <h2 className="content-title">
                            Phương thức thanh toán
                        </h2>
                    </div>
                    <div className="content-box">
                        <Form.Item name="payment" noStyle>
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
