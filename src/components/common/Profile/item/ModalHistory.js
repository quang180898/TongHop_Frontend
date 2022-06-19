import { ButtonBase } from "components/base/Button";
import { ModalCustom } from "components/base/Modal";
import { TableCustom } from "components/base/Table";
import { convertCurrency } from "functions/Utils";
import React from "react";

const ModalHistory = (props) => {
    const { visible, onCancel, data } = props;

    const THeader = (
        <tr>
            <th style={{ width: "5%" }} className="text-uppercase pl-0">
                STT
            </th>
            <th>Tên giày</th>
            <th>Mã giày</th>
            <th>Giá giày</th>
            <th>Kích cỡ</th>
            <th>Số lượng</th>
            <th>Địa chỉ</th>
            <th>Ngày tạo</th>
        </tr>
    );

    const TBody = (item, index) => {
        return (
            <tr key={index}>
                <td className="pl-0" style={{ width: "5%" }}>
                    {index + 1}
                </td>
                <td>{item.shoes_name}</td>
                <td>{item.shoes_id}</td>
                <td>{convertCurrency(item.price, "đ")}</td>
                <td>
                {item.size}
                </td>
                <td>
                {item.quantity}
                </td>
                <td>
                {item.address}
                </td>
                <td>
                {item.created_at}
                </td>
            </tr>
        );
    };
    return (
        <ModalCustom
            title="Lịch sử mua hàng"
            visible={visible}
            onCancel={onCancel}
            widthModal="1600px"
            centered
        >
            <TableCustom
                isFixed
                classNameWrap="table-history"
                childrenHead={THeader}
                childrenBody={
                    data?.length > 0 &&
                    data.map((item, index) => {
                        return TBody(item, index);
                    })
                }
            />
            <div className="modal-footer pt-0 pb-4 border-0">
                <ButtonBase
                    onClick={onCancel}
                    label="Đóng"
                    className="min-width-button min-height-40 btn-white"
                />
            </div>
        </ModalCustom>
    );
};

export default ModalHistory;
