import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import React from "react";
import { Link } from "react-router-dom";

const SidebarCheckout = () => {
    return (
        <div className="col-xs-12 col-lg-3 col-md-4 col-sm-5">
            <div className="sidebar-checkout">
                <div className="order-title">
                    <h4>Thông tin đơn hàng</h4>
                </div>
                <div className="order-total">
                    <p>
                        Tổng tiền: <span className="total-price">123</span>
                    </p>
                </div>
                <div className="order-text">
                    <p>
                        Phí vận chuyển sẽ được tính ở trang thanh toán.
                        <br />
                        Bạn cũng có thể nhập mã giảm giá ở phía dưới.
                    </p>
                </div>
                <div className="order-note">
                    <label className="note-label">Mã khuyến mãi</label>
                    <InputBase placeholder="Nhập mã khuyến mãi (nếu có)" />
                </div>
                <div className="order-action">
                    <ButtonBase
                        className="btn-black-outline mb-3"
                        label="Thanh toán ngay"
                        style={{ width: "100%" }}
                    />
                    <p className="link-contunue text-center">
                        <Link to="/#">
                            <i className="fa fa-reply"/> Tiếp tục mua hàng
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SidebarCheckout;
