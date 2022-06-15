import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { SelectBase } from "components/base/Select";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { accountAction } from "store/actions";

const MainRegister = () => {

    const [formSubmit] = Form.useForm();
    const dispatch = useDispatch();

    const store = useSelector(state => state.accountReducer) 
    const { registerAccount } = store

    React.useEffect(() => {
        if (registerAccount) {
            let detail = registerAccount.detail
            if (registerAccount.success) {
                window.location.replace("/login")
                formSubmit.resetFields()
            }
            else {
                showNotification.error({title: detail})
            }
            dispatch(accountAction.clearData())
        }

    }, [registerAccount])

    const onFinish = (e) => {
        if (e) {
            let params = {
                permission_code: 2,
                name: e.name,
                user_name: e.user_name,
                pass_word: e.pass_word,
                password_repeat: e.password_repeat,
                mail: e.mail,
            }
            dispatch(accountAction.postRegister(params))
        }
    }

    return (
        <div className="login-main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                        <h2 className="mb-3">Đăng ký</h2>
                        <Form form={formSubmit} onFinish={onFinish}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase placeholder="Tên khách hàng" />
                            </Form.Item>
                            <Form.Item
                                name="user_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase placeholder="Tài khoản" />
                            </Form.Item>
                            <Form.Item
                                name="pass_word"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase placeholder="Mật khẩu" />
                            </Form.Item>
                            <Form.Item
                                name="password_repeat"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase placeholder="Nhập lại mật khẩu" />
                            </Form.Item>
                            <Form.Item
                                name="mail"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase placeholder="Email" />
                            </Form.Item>
                            <Form.Item>
                                <SelectBase placeholder="Bạn thích loại giày nào?" />
                            </Form.Item>
                            <ButtonBase
                                className="btn-black-outline"
                                label="Đăng ký"
                                type="submit"
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
