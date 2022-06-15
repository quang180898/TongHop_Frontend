import { Switch } from "antd";
import { DropdownBase } from "components/base/Dropdown";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { accountAction } from "store/actions";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();
    const [saveUser, setSaveUser] = React.useState();

    const [stateLocal, setStateLocal] = React.useState({
        saveParams: null,
        isShowModal: false,
    });

    const store = useSelector((state) => state.accountReducer);
    const { listAccount, deleteAccount, activeAccount } = store;

    React.useEffect(() => {
        dispatch(accountAction.getListAccount());
    }, []);

    React.useEffect(() => {
        if (listAccount) {
            let detail = listAccount.detail;
            if (listAccount.success) {
                setState(detail);
            }
            dispatch(accountAction.clearData());
        }
    }, [listAccount]);

    React.useEffect(() => {
        if (deleteAccount) {
            let detail = deleteAccount.detail;
            if (deleteAccount.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                dispatch(accountAction.getListAccount());
            }
            dispatch(accountAction.clearData());
        }
    }, [deleteAccount]);

    React.useEffect(() => {
        if (activeAccount) {
            let detail = activeAccount.detail;
            if (activeAccount.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                dispatch(accountAction.getListAccount());
            }
            dispatch(accountAction.clearData());
        }
    }, [activeAccount]);

    const handleDelete = (id) => {
        const newArray = [].concat(state);
        let params = {
            id: null,
            name: null,
        };
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].id === id) {
                params.id = newArray[i].id;
                params.name = newArray[i].name;
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
                    <Link to={PAGES_URL.user.url + "/create"}>
                        {" "}
                        + Tạo người dùng
                    </Link>
                </div>
            ),
        },
    ];

    const onChangeMenuAction = (e) => {};

    const onChangeSwitch = (e, id) => {
        const newData = [].concat(state)
        let params = {
            user_id: null,
            active_flag: null,
        }
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id == id) {
                newData[i].active_flag = e
                params.user_id = id
                params.active_flag = e
            } 
        }
        if (params) {
            dispatch(accountAction.postActiveAccount(params))
        }
        // setSaveUser(newData)
    };

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
                            <th scope="col">Tên người dùng</th>
                            <th scope="col">Tên tài khoản</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Chức vụ</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">
                                <i class="fas fa-cog"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {state &&
                            state.map((item, index) => {
                                if (item.permission_code != 1) {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <Link
                                                    to={
                                                        PAGES_URL.user.url +
                                                        "/edit/" +
                                                        item.id
                                                    }
                                                    className=""
                                                >
                                                    {item.name}
                                                </Link>
                                            </td>
                                            <td>{item.username}</td>
                                            <td>{item.mail}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.permission_name}</td>
                                            <td>
                                                <Switch
                                                    className=""
                                                    checked={item.active_flag}
                                                    defaultChecked={
                                                        item.active_flag
                                                    }
                                                    onChange={(e) => onChangeSwitch(e, item.id)}
                                                />
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
                                }
                            })}
                    </tbody>
                </table>
            </div>
            <ModalDeleteUser state={stateLocal} setState={setStateLocal} />
        </CardWrap>
    );
};
export default ManageUser;
