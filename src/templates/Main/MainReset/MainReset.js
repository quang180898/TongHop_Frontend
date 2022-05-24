import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import React from "react";

const MainReset = () => {
    return (
        <div className="login-main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                        <h2 className="mb-3">Phục hồi mật khẩu</h2>
                        <Form>
                            <Form.Item>
                                <InputBase placeholder="Mật khẩu" />
                            </Form.Item>
                            <Form.Item>
                                <InputBase placeholder="Xác nhận mật khẩu" />
                            </Form.Item>
                            <ButtonBase
                                className="btn-black-outline"
                                label="Lưu"
                            />
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainReset;
