import { TableCustom } from "components/base/Table";
import { convertCurrency, getLocalStore } from "functions/Utils";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TableTotal = ({checkCoupon}) => {

    const [newCoupon, setNewCoupon] = useState(0)

    

    const { cartItems } = useSelector((state) => state.cartReducer);

    useEffect(() => {
        if (checkCoupon != 0) {
            const newTotal = cartItems.total - ((cartItems.total * 10) / 100)
            setNewCoupon(newTotal)
        } else {
            setNewCoupon(0)
        }

    }, [checkCoupon])

    const Theader = () => {
        return (
            <tr>
                <th />
                <th />
            </tr>
        );
    };
    const Tbody = () => {
        return (
            <>
                <tr>
                    <td className="total-line-name">Tạm tính</td>
                    <td className="total-line-price">
                        <span className="order-summary-emphasis">{convertCurrency(cartItems.total, "đ")}</span>
                    </td>
                </tr>
                <tr>
                    <td className="total-line-name">
                        <span>Mã giảm giá</span>
                    </td>
                    <td className="total-line-price">
                        <span className="order-summary-emphasis">
                            {checkCoupon}%
                        </span>
                    </td>
                </tr>
                <tr className="">
                    <td className="total-line-name">Phí vận chuyển</td>
                    <td className="total-line-price">
                        <span className="order-summary-emphasis">—</span>
                    </td>
                </tr>
            </>
        );
    };

    const Tfoot = () => {
        return (
            <tr className="total-checkout">
                <td className="total-line-name payment-due-label">
                    <span className="payment-due-label-total">Tổng cộng</span>
                </td>
                <td className="total-line-name payment-due">
                    <span className="payment-due-currency">VND</span>
                    <span className="payment-due-price">{convertCurrency(newCoupon > 0 ? newCoupon : cartItems.total, "đ")}</span>
                </td>
            </tr>
        );
    };

    return (
        <TableCustom
            className="table-checkout-total table-basic"
            isTable={false}
            childrenHead={<Theader />}
            childrenBody={<Tbody />}
            childrenFoot={<Tfoot />}
        />
    );
};

export default TableTotal;
