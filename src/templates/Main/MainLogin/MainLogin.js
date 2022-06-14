import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { accountAction } from "store/actions";

const MainLogin = () => {
    const [formSubmit] = Form.useForm();

    const dispatch = useDispatch();

    const [isForgotPass, setForgotPass] = React.useState(false);

    const store = useSelector((state) => state);
    const { loginAccount } = store.accountReducer;

    React.useEffect(() => {
        if (loginAccount) {
            let detail = loginAccount.detail;
            if (loginAccount.success) {
                if (detail.permission_code == 1) {
                    dispatch(accountAction.clearData());
                    showNotification.error({
                        title: "Sai tài khoản hoặc mật khẩu",
                    });
                } else {
                    localStorage.setItem("user", JSON.stringify(detail));
                    window.location.replace("/");
                }
            } else {
                showNotification.error({ title: loginAccount.detail });
                setTimeout(() => {
                    dispatch(accountAction.clearData());
                }, 5000);
            }
        }
    }, [loginAccount]);

    const onFinishLogin = (e) => {
        if (e) {
            let params = e;
            dispatch(accountAction.postLogin(params));
        }
    };

    return (
        <div className="login-main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                        <h2 className="mb-3">
                            {isForgotPass ? "Phục hồi mật khẩu" : "Đăng nhập"}
                        </h2>
                        <Form form={formSubmit} onFinish={onFinishLogin}>
                            <Form.Item
                                name="user_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập tài khoản!",
                                    },
                                ]}
                            >
                                <InputBase
                                    placeholder={
                                        isForgotPass ? "Email" : "Tài khoản"
                                    }
                                />
                            </Form.Item>
                            {!isForgotPass && (
                                <Form.Item
                                    name="pass_word"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Vui lòng nhập mật khẩu!",
                                        },
                                    ]}
                                >
                                    <InputBase
                                        type="password"
                                        placeholder="Mật khẩu"
                                    />
                                </Form.Item>
                            )}
                            <ButtonBase
                                className="btn-black-outline"
                                htmlType="submit"
                                label={isForgotPass ? "Gửi" : "Đăng nhập"}
                            />
                        </Form>
                        <div className="account-action">
                            <Link
                                to={PAGES_URL.mainLogin.url}
                                className="color-default"
                                onClick={() =>
                                    setForgotPass(isForgotPass ? false : true)
                                }
                            >
                                {isForgotPass ? "Huỷ" : "Quên mật khẩu?"}
                            </Link>
                            {!isForgotPass && (
                                <>
                                    <br />
                                    hoặc{" "}
                                    <Link
                                        to={PAGES_URL.mainRegister.url}
                                        className="color-ff6310"
                                    >
                                        Đăng ký
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLogin;
