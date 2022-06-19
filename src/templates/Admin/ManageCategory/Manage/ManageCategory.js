import { DropdownBase } from "components/base/Dropdown";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryAction } from "store/actions";
import ModalDeleteCategory from "./ModalDeleteCategory";

const ManageCategory = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        isShowModal: false,
    });

    const store = useSelector((state) => state.categoryReducer);
    const { listCategory, deleteCategory } = store;

    React.useEffect(() => {
        dispatch(categoryAction.getListCategory());
    }, []);

    React.useEffect(() => {
        if (listCategory) {
            let detail = listCategory.detail;
            if (listCategory.success) {
                setState(detail);
            }
            dispatch(categoryAction.clearData());
        }
    }, [listCategory]);

    React.useEffect(() => {
        if (deleteCategory) {
            let detail = deleteCategory.detail;
            if (deleteCategory.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                setStateLocal((e) => ({
                    ...e,
                    isShowModal: false,
                }));
                dispatch(categoryAction.getListCategory());
            }
            dispatch(categoryAction.clearData());
        }
    }, [deleteCategory]);

    const handleDelete = (id) => {
        const newArray = [].concat(state);
        let params = {
            id: null,
            name: null,
        };
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].category_id === id) {
                params.id = newArray[i].category_id;
                params.name = newArray[i].category_name;
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
                    <Link to={PAGES_URL.category.url + "/create"}>
                        {" "}
                        + Tạo kiểu giày
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
        <CardWrap title="Quản lý kiểu giày" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên kiểu giày</th>
                            <th scope="col">Mô tả</th>
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
                                                    PAGES_URL.category.url +
                                                    "/edit/" +
                                                    item.category_id
                                                }
                                                className=""
                                            >
                                                {item.category_name}
                                            </Link>
                                        </td>
                                        <td>{item.category_description}</td>
                                        <td>
                                            <i
                                                className="click-action fas fa-trash-alt"
                                                onClick={() =>
                                                    handleDelete(
                                                        item.category_id
                                                    )
                                                }
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <ModalDeleteCategory state={stateLocal} setState={setStateLocal} />
        </CardWrap>
    );
};
export default ManageCategory;
