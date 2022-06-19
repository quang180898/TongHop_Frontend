import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { showNotification } from "functions/Utils";
import React from "react";
import { TableProduct, TableTotal } from "./Item";

const SidebarCheckout = ({form}) => {
    const [inputCoupon, setInputCoupon] = React.useState();
    const [checkCoupon, setCheckCoupon] = React.useState(0);

    const onClickCoupon = () => {
        if (inputCoupon === "happyweekend") {
            setCheckCoupon(10);
            form.setFieldsValue({['coupon']: inputCoupon})
        } else {
            setCheckCoupon(0);
            form.setFieldsValue({['coupon']: null})
            showNotification.error({ title: "Không tìm thấy mã khuyến mãi" });
        }
    };

    const onChangeCoupon = (e) => {
        setInputCoupon(e.target.value);
    };

    return (
        <div className="sidebar-checkout">
            <div className="order-summary-list">
                <TableProduct />
            </div>
            <div className="order-summary-discount">
                <div className="field-wrapper">
                    <Form.Item noStyle>
                        <InputBase
                            placeholder="Mã giảm giá"
                            value={inputCoupon}
                            onChange={onChangeCoupon}
                        />
                    </Form.Item>
                    <ButtonBase
                        className="btn-coupon"
                        label="Sử dụng"
                        htmlType="button"
                        onClick={onClickCoupon}
                    />
                </div>
            </div>
            <div className="order-sumary-total">
                <TableTotal checkCoupon={checkCoupon} />
            </div>
        </div>
    );
};

export default SidebarCheckout;
