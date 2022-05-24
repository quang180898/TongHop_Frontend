import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import React from "react";
import { TableProduct, TableTotal } from "./Item";


const SidebarCheckout = () => {
    
    return (
        <div className="sidebar-checkout">
            <div className="order-summary-list">
                <TableProduct />
            </div>
            <div className="order-summary-discount">
                <div className="field-wrapper">
                    <Form.Item noStyle>
                        <InputBase placeholder="Mã giảm giá"/>
                    </Form.Item>
                    <ButtonBase className="btn-coupon" label="Sử dụng" htmlType="button"/>
                </div>
                {/* <p className="field-message-error">Không tìm thấy mã giảm giá</p> */}
            </div>
            <div className="order-sumary-total">
                <TableTotal />
            </div>
        </div>
    );
};

export default SidebarCheckout;
