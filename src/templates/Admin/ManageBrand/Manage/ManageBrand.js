import { DropdownBase } from "components/base/Dropdown";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { brandAction } from "store/actions";
import ModalDeleteBrand from "./ModalDeleteBrand";

const ManageBrand = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        isShowModal: false,
    });

    const store = useSelector((state) => state.brandReducer);
    const { listBrand, deleteBrand } = store;

    React.useEffect(() => {
        dispatch(brandAction.getListBrand());
    }, []);

    React.useEffect(() => {
        if (listBrand) {
            let detail = listBrand.detail;
            if (listBrand.success) {
                setState(detail);
            }
            dispatch(brandAction.clearData());
        }
    }, [listBrand]);

    React.useEffect(() => {
        if (deleteBrand) {
            let detail = deleteBrand.detail;
            if (deleteBrand.success) {
                showNotification.success({title: "Cập nhật thành công"})
                setStateLocal((e) => ({
                    ...e,
                    isShowModal: false,
                }));
                dispatch(brandAction.getListBrand());
            }
            dispatch(brandAction.clearData());
        }
    }, [deleteBrand]);

    const handleDelete = (id) => {
        const newArray = [].concat(state);
        let params = {
            id: null,
            name: null,
        };
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].brand_id === id) {
                params.id = newArray[i].brand_id;
                params.name = newArray[i].brand_name;
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
                    <Link to={PAGES_URL.brand.url + "/create"}> + Tạo thương hiệu</Link>
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
        <CardWrap title="Quản lý thương hiệu giày" childrenHeading={Heading()}>
            <div class="cus-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th scope="col">Tên thương hiệu</th>
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
                                                    PAGES_URL.brand.url +
                                                    "/edit/" +
                                                    item.brand_id
                                                }
                                                className=""
                                            >
                                                {item.brand_name}
                                            </Link>
                                        </td>
                                        <td>
                                            <i
                                                className="click-action fas fa-trash-alt"
                                                onClick={() =>
                                                    handleDelete(item.brand_id)
                                                }
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
            <ModalDeleteBrand state={stateLocal} setState={setStateLocal} />
        </CardWrap>
    );
};
export default ManageBrand;
