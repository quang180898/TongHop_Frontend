import React from "react";
import { Form } from "antd";
import { PAGES_URL } from "contant";
import { InputIconLeft, InputPassword } from "components/base/Input";
import { Link } from "react-router-dom";
import { ButtonBase } from "components/base/Button";
import { useDispatch, useSelector } from "react-redux";
import { accountAction } from "store/actions";
import { showNotification } from "functions/Utils";

const AdminLogin = () => {
    const [form] = Form.useForm();
    
    const dispatch = useDispatch();

    const store = useSelector(state => state)

    const { loginAccount } = store.accountReducer;

    React.useEffect(() => {
        if (loginAccount) {
            let detail = loginAccount.detail;
            if (loginAccount.success) {
                if (detail.permission_code === 2) {
                    dispatch(accountAction.clearData());
                    showNotification.error({
                        title: "Sai tài khoản hoặc mật khẩu",
                    });
                } else {
                    localStorage.setItem("admin", JSON.stringify(detail));
                    window.location.replace("/admin");
                }
            } else {
                showNotification.error({ title: detail });
                setTimeout(() => {
                    dispatch(accountAction.clearData());
                }, 5000);
            }
        }
    }, [loginAccount]);

    const onFinish = (e) => {
        if (e) {
            let params = e
            dispatch(accountAction.postLogin(params))
        }
    };

    return (
        <div className="login scb-login">
            <div className="login__bg" />
            <div className="login__right">
                <div className="login__form">
                    <Form
                        noValidate
                        form={form}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <div className="title">Đăng nhập</div>
                        <div className="m_login--form form-antd-login">
                            <Form.Item
                                className="form-group"
                                name="user_name"
                                label="Tài khoản"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập tài khoản!",
                                    },
                                ]}
                            >
                                <InputIconLeft prefix={<i className="icon las la-user"></i>} placeholder="Tài khoản" />
                            </Form.Item>

                            <Form.Item
                                className="form-group"
                                name="pass_word"
                                label="Mật khẩu"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập mật khẩu!",
                                    },
                                ]}
                            >
                                <InputPassword placeholder="Mật khẩu" />
                            </Form.Item>

                            <div className="text-right">
                                <a className="forgot-pwd d-inline">
                                    Quên mật khẩu?
                                </a>
                            </div>

                            <ButtonBase
                                className="btn-login"
                                label="Đăng nhập"
                                htmlType="submit"
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
