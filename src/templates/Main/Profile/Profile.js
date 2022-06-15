import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { PAGES_URL } from "contant";
import { getLocalStore, showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { accountAction } from "store/actions";

const dataSidebar = [
    {
        label: "Thông tin",
        url: "",
        icon: "fas fa-user",
    },
    {
        label: "Đổi mật khẩu",
        url: "?view=change",
        icon: "fas fa-lock",
    },
    {
        label: "Đăng xuất",
        url: "?view=out",
        icon: "fas fa-sign-out-alt",
    },
];

const Profile = () => {
    const history = useHistory();
    const [formSubmit] = Form.useForm();
    const dispatch = useDispatch();
    const [menuActive, setMenuActive] = React.useState(null);
    const [changeForm, setChangeForm] = React.useState(false);
    const user = getLocalStore("user");

    const store = useSelector((state) => state.accountReducer);
    const { updateAccount, changeAccount } = store;

    React.useEffect(() => {
        if (formSubmit) {
            formSubmit.setFieldsValue({
                mobile: user.mobile ? user.mobile : "",
                address: user.address ? user.address : "",
            });
        }
    }, []);

    const checkActive = (data) => {
        if (data?.length > 0) {
            let status = data.find(
                (item) => history.location.search == item.url
            );
            if (status) {
                return status.url;
            } else {
                return data[0].url;
            }
        }
        return "";
    };

    React.useEffect(() => {
        setMenuActive(checkActive(dataSidebar));
    }, [history.location]);

    React.useEffect(() => {
        if (updateAccount) {
            let detail = updateAccount.detail;
            if (updateAccount.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...user,
                        mobile: detail.customer_mobile
                            ? detail.customer_mobile
                            : "",
                        address: detail.customer_address
                            ? detail.customer_address
                            : "",
                    })
                );
            } else {
                showNotification.error({ title: detail });
            }
            dispatch(accountAction.clearData());
        }
    }, [updateAccount]);

    React.useEffect(() => {
        if (changeAccount) {
            let detail = changeAccount.detail;
            if (changeAccount.success) {
                showNotification.success({ title: "Cập nhật thành công" });
            } else {
                showNotification.error({ title: detail });
            }
            formSubmit.resetFields([
                "current_password",
                "new_password",
                "new_password_repeat",
            ]);
            dispatch(accountAction.clearData());
        }
    }, [changeAccount]);

    const onFinish = (e) => {
        if (e) {
            if (menuActive == "") {
                let params = {
                    user_id: user.customer_id,
                    mobile: e.mobile,
                    address: e.address,
                };
                dispatch(accountAction.postUpdateAccount(params));
            } else {
                let params = {
                    user_id: user.customer_id,
                    current_password: e.current_password
                        ? e.current_password
                        : "",
                    new_password: e.new_password ? e.new_password : "",
                    new_password_repeat: e.new_password_repeat
                        ? e.new_password_repeat
                        : "",
                };
                dispatch(accountAction.postChangeAccount(params));
            }
        }
    };

    const onChangeForm = (e) => {
        if (e) {
            setChangeForm(true);
        }
    };

    const logoutAccount = () => {
        getLocalStore("user", true);
        window.location.reload();
    }

    return (
        <div className="template-profile">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-header">
                                <div className="profile-logo">
                                    {user.name
                                        .split(" ")
                                        .map((x) => x[0])
                                        .join("")}
                                </div>
                                <span className="acc-name">{user.name}</span>
                            </div>
                            <div className="profile-content">
                                <ul>
                                    {dataSidebar.map((value, index) => {
                                        return (
                                            <li
                                                className={`profile-item ${
                                                    value.url == menuActive
                                                        ? "active"
                                                        : ""
                                                }`}
                                                key={index}
                                            >
                                                <a
                                                    href={
                                                        PAGES_URL.profile.url +
                                                        value.url
                                                    }
                                                    className="profile-name"
                                                >
                                                    <i
                                                        className={value.icon}
                                                    ></i>
                                                    <span>{value.label}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9">
                        <div className="profile-right">
                            <Form
                                form={formSubmit}
                                onFinish={onFinish}
                                onValuesChange={onChangeForm}
                            >
                                <h1 className="profile-title">
                                    {menuActive == ""
                                        ? "Thông tin tài khoản"
                                        : "Đổi mật khẩu"}
                                </h1>
                                {menuActive == "" ? (
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Họ tên: </strong>
                                                </td>
                                                <td>{user.name}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Email: </strong>
                                                </td>
                                                <td>{user.mail}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>
                                                        Số điện thoại:{" "}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <Form.Item
                                                        name="mobile"
                                                        noStyle
                                                    >
                                                        <InputBase />
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Địa chỉ: </strong>
                                                </td>
                                                <td>
                                                    <Form.Item
                                                        name="address"
                                                        noStyle
                                                    >
                                                        <InputBase />
                                                    </Form.Item>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="profile-change">
                                        <Form.Item name="current_password">
                                            <InputBase placeholder="Mật khẩu hiện tại" />
                                        </Form.Item>
                                        <Form.Item name="new_password">
                                            <InputBase placeholder="Mật khẩu mới" />
                                        </Form.Item>
                                        <Form.Item name="new_password_repeat">
                                            <InputBase placeholder="Nhập lại mật khẩu" />
                                        </Form.Item>
                                    </div>
                                )}
                                {menuActive == "?view=out" && logoutAccount()}
                                {changeForm && (
                                    <div className="text-right">
                                        <ButtonBase
                                            className="btn btn-blue"
                                            label="Lưu"
                                            type="submit"
                                        />
                                    </div>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
