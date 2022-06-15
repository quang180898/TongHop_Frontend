import { DropdownBase } from "components/base/Dropdown";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { convertCurrency, showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { discountAction } from "store/actions";
import ModalDeleteDiscount from "./ModalDeleteDiscount";

const ManageDiscount = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        isShowModal: false,
    });

    const store = useSelector((state) => state.discountReducer);
    const { listDiscount, deleteDiscount } = store;

    React.useEffect(() => {
        dispatch(discountAction.getListDiscount());
    }, []);

    React.useEffect(() => {
        if (listDiscount) {
            let detail = listDiscount.detail;
            if (listDiscount.success) {
                setState(detail);
            }
            dispatch(discountAction.clearData());
        }
    }, [listDiscount]);

    React.useEffect(() => {
        if (deleteDiscount) {
            let detail = listDiscount.detail;
            if (listDiscount.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                dispatch(discountAction.getListDiscount());
            }
            dispatch(discountAction.clearData());
        }
    }, [deleteDiscount]);

    const handleDelete = (id) => {
        const newArray = [].concat(state);
        let params = {
            id: null,
            name: null,
        };
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].discount_id === id) {
                params.id = newArray[i].discount_id;
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
                    <Link to={PAGES_URL.discount.url + "/create"}>
                        {" "}
                        + Tạo khuyến mãi
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
                            <th scope="col">Phần trăm khuyến mãi</th>
                            <th scope="col">Ngày kết thúc</th>
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
                                                    PAGES_URL.discount.url +
                                                    "/edit/" +
                                                    item.discount_id
                                                }
                                                className=""
                                            >
                                                {item.shoes_name}
                                            </Link>
                                        </td>
                                        <td>
                                            {item.discount_percent}%
                                        </td>
                                        <td>
                                            {item.end_discount_date}
                                        </td>
                                        <td>
                                            <i
                                                className="click-action fas fa-trash-alt"
                                                onClick={() =>
                                                    handleDelete(item.discount_id)
                                                }
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <ModalDeleteDiscount state={stateLocal} setState={setStateLocal} />
        </CardWrap>
    );
};
export default ManageDiscount;
