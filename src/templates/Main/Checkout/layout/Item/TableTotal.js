import { TableCustom } from "components/base/Table";
import React from "react";

const TableTotal = () => {
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
                        <span className="order-summary-emphasis">597,000₫</span>
                    </td>
                </tr>
                <tr>
                    <td className="total-line-name">
                        <span>Mã giảm giá</span>
                        <span className="applied-reduction-code">
                            <i className="icon fas fa-tag"></i>
                            <span className="text-coupon">NEWMERLY</span>
                            <span className="delete-coupon" />
                        </span>
                    </td>
                    <td className="total-line-price">
                        <span className="order-summary-emphasis">—</span>
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
                    <span
                        className="payment-due-price"
                    >
                        577,000₫
                    </span>
                </td>
            </tr>
        );
    };

    return (
        <TableCustom
            className="table-checkout-total"
            isTable={false}
            childrenHead={<Theader />}
            childrenBody={<Tbody />}
            childrenFoot={<Tfoot />}
        />
    );
};

export default TableTotal;
