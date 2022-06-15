import { DropdownBase } from "components/base/Dropdown";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { convertCurrency, showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shoesAction } from "store/actions";
import ModalDeleteShoes from "./ModalDeleteShoes";

const ManageShoes = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        isShowModal: false,
    });

    const store = useSelector((state) => state.shoesReducer);
    const { listShoes, deleteShoes } = store;

    React.useEffect(() => {
        dispatch(shoesAction.getListShoes());
    }, []);

    React.useEffect(() => {
        if (listShoes) {
            let detail = listShoes.detail;
            if (listShoes.success) {
                setState(detail);
            }
            dispatch(shoesAction.clearData());
        }
    }, [listShoes]);

    React.useEffect(() => {
        if (deleteShoes) {
            let detail = listShoes.detail;
            if (listShoes.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                dispatch(shoesAction.getListShoes());
            }
            dispatch(shoesAction.clearData());
        }
    }, [deleteShoes]);

    const handleDelete = (id) => {
        const newArray = [].concat(state);
        let params = {
            id: null,
            name: null,
        };
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].shoes_id === id) {
                params.id = newArray[i].shoes_id;
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
                    <Link to={PAGES_URL.shoes.url + "/create"}>
                        {" "}
                        + Tạo giày
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
        <CardWrap title="Quản lý sản phẩm" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên giày</th>
                            <th scope="col">Giá giày</th>
                            <th scope="col">Giá khuyến mãi</th>
                            <th scope="col">Mã giày</th>
                            <th scope="col">Thương hiệu</th>
                            <th scope="col">Tình trạng</th>
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
                                                    PAGES_URL.shoes.url +
                                                    "/edit/" +
                                                    item.shoes_id
                                                }
                                                className=""
                                            >
                                                {item.shoes_name}
                                            </Link>
                                        </td>
                                        <td>
                                            {convertCurrency(
                                                item.retail_price,
                                                "đ"
                                            )}
                                        </td>
                                        <td>
                                            {convertCurrency(
                                                item.sale_price,
                                                "đ"
                                            )}
                                        </td>
                                        <td>{item.shoes_code}</td>
                                        <td>{item.shoes_brand_name}</td>
                                        <td>
                                            {item.shoes_quantity
                                                .map((item) => item.quantity)
                                                .reduce(
                                                    (prev, next) => prev + next,
                                                    0
                                                ) > 0
                                                ? "Còn hàng"
                                                : "Hết hàng"}
                                        </td>
                                        <td>
                                            <i
                                                className="click-action fas fa-trash-alt"
                                                onClick={() =>
                                                    handleDelete(item.shoes_id)
                                                }
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <ModalDeleteShoes state={stateLocal} setState={setStateLocal} />
        </CardWrap>
    );
};
export default ManageShoes;
