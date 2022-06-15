import { DropdownBase } from "components/base/Dropdown";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { convertCurrency, showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { orderAction } from "store/actions";
import ModalDeleteOrder from "./ModalDeleteOrder";

const ManageOrder = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        isShowModal: false,
    });

    const store = useSelector((state) => state.orderReducer);
    const { listOrder, deleteOrder } = store;

    React.useEffect(() => {
        dispatch(orderAction.getListOrder());
    }, []);

    React.useEffect(() => {
        if (listOrder) {
            let detail = listOrder.detail;
            if (listOrder.success) {
                setState(detail);
            }
            dispatch(orderAction.clearData());
        }
    }, [listOrder]);

    React.useEffect(() => {
        if (deleteOrder) {
            let detail = listOrder.detail;
            if (listOrder.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                dispatch(orderAction.getListOrder());
            }
            dispatch(orderAction.clearData());
        }
    }, [deleteOrder]);

    const handleDelete = (id) => {
        const newArray = [].concat(state);
        let params = {
            id: null,
            name: null,
        };
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === id) {
                params.id = newArray[i].id;
                params.name = newArray[i].shoes_name;
            }
        }
        setStateLocal((e) => ({
            ...e,
            saveParams: params,
            isShowModal: true,
        }));
    };

    const optionsAction = [
        {
            label: (
                <div className="d-flex">
                    <Link to={PAGES_URL.order.url + "/create"}>
                        {" "}
                        + Tạo đơn hàng
                    </Link>
                </div>
            ),
        },
    ];

    const onChangeMenuAction = (e) => {};

    const Heading = () => {
        return (
            <>
                <div className="exchange-rate ml-auto">
                    <DropdownBase
                        className=""
                        options={optionsAction}
                        onChangeMenu={(e) => onChangeMenuAction(e)}
                        placement="bottomRight"
                        overlayClassName="dropdown-blue-overlay"
                    >
                        <button
                            type="button"
                            class="btn_blue_outline dropdown-toggle"
                        >
                            Hành động
                        </button>
                    </DropdownBase>
                </div>
            </>
        );
    };

    return (
        <CardWrap title="Quản lý đơn hàng" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên giày</th>
                            <th scope="col-2" style={{ width: '15%' }}>Giá giày</th>
                            <th scope="col">Kích cỡ</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col-2" style={{ width: '15%' }}>Tổng</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Tạo bởi</th>
                            <th scope="col">
                                <i class="fas fa-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {state &&
                            state.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <Link
                                                to={
                                                    PAGES_URL.order.url +
                                                    "/edit/" +
                                                    item.id
                                                }
                                                className=""
                                            >
                                                {item.shoes_name}
                                            </Link>
                                        </td>
                                        <td>
                                            {convertCurrency(item.price, "đ")}
                                        </td>
                                        <td>
                                            {item.size}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                            {convertCurrency(item.total, "đ")}
                                        </td>
                                        <td>
                                            {item.address}
                                        </td>

                                        <td>
                                            {item.created_at}
                                        </td>
                                        <td>
                                            {item.customer_name}
                                        </td>
                                        <td>
                                            <i
                                                className="click-action fas fa-trash-alt"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <ModalDeleteOrder state={stateLocal} setState={setStateLocal} />
        </CardWrap>
    );
};
export default ManageOrder;
