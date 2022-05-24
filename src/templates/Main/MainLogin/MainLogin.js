import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { PAGES_URL } from "contant";
import React from "react";
import { Link } from "react-router-dom";

const MainLogin = () => {
    const [isForgotPass, setForgotPass] = React.useState(false);

    return (
        <div className="login-main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                        <h2 className="mb-3">
                            {isForgotPass ? "Phục hồi mật khẩu" : "Đăng nhập"}
                        </h2>
                        <Form>
                            <Form.Item>
                                <InputBase placeholder="Email" />
                            </Form.Item>
                            {!isForgotPass && (
                                <Form.Item>
                                    <InputBase placeholder="Mật khẩu" />
                                </Form.Item>
                            )}
                            <ButtonBase
                                className="btn-black-outline"
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
