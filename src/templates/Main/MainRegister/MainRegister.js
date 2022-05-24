import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { SelectBase } from "components/base/Select";
import { PAGES_URL } from "contant";
import React from "react";
import { Link } from "react-router-dom";

const MainRegister = () => {
    return (
        <div className="login-main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                        <h2 className="mb-3">Đăng ký</h2>
                        <Form>
                            <Form.Item>
                                <InputBase placeholder="Tên khách hàng" />
                            </Form.Item>
                            <Form.Item>
                                <InputBase placeholder="Email" />
                            </Form.Item>
                            <Form.Item>
                                <InputBase placeholder="Số điện thoại" />
                            </Form.Item>
                            <Form.Item>
                                <InputBase placeholder="Mật khẩu" />
                            </Form.Item>
                            <Form.Item>
                                <SelectBase placeholder="Bạn thích loại giày nào?" />
                            </Form.Item>
                            <ButtonBase
                                className="btn-black-outline"
                                label="Đăng ký"
                            />
                        </Form>
                        <div className="account-action">
                            hoặc <br />
                            <Link
                                to={PAGES_URL.mainLogin.url}
                                className="color-ff6310"
                            >
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainRegister;
