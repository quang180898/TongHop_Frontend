import { CARD_EQUAL, PAGES_URL } from "contant";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonBase } from "components/base/Button";
import { useHistory } from "react-router-dom";
import { accountAction } from "store/actions";
import { Form } from "antd";
import { showNotification } from "functions/Utils";
import CardWrap from "components/common/Card/CardWarp";
import { InputBase } from "components/base/Input";

const CreateUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formInfo] = Form.useForm();

    const store = useSelector((state) => state.accountReducer);
    const { registerAccount } = store;

    // response update avatar success

    useEffect(() => {
        if (registerAccount) {
            if (registerAccount.success) {
                showNotification.success({
                    title: "Cập nhật thành công",
                });
                setTimeout(() => {
                    history.replace(
                        PAGES_URL.user.url +
                            "/edit/" +
                            registerAccount.detail.user_id
                    );
                }, 1000);
            } else {
                showNotification.error({
                    title: registerAccount.detail,
                });
            }
            dispatch(accountAction.clearData());
        }
    }, [registerAccount]);

    const onFinishInfo = (e) => {
        if (e) {
            const { fullname, email, address, username, password, rePassword } =
                e;
            let params = {
                name: fullname ? fullname : null,
                user_name: username ? username : null,
                mail: email ? email : null,
                address: address ? address : null,
                pass_word: password ? password : null,
                password_repeat: rePassword ? rePassword : null,
                permission_code: 2,
            };
            dispatch(accountAction.postRegister(params));
        }
    };

    return (
        <>
            <div className="profile">
                <CardWrap title="Tạo tài khoản" isHeigth>
                    <Form
                        layout="vertical"
                        form={formInfo}
                        onFinish={onFinishInfo}
                    >
                        <div className="row">
                            <div className="col-12 col-sm-6 col-xl-6">
                                <Form.Item label="Họ tên" name="fullname">
                                    <InputBase />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-6">
                                <Form.Item
                                    label="Tên tài khoản"
                                    name="username"
                                >
                                    <InputBase />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-6">
                                <div className="two-label">
                                    <label>Mật khẩu</label>
                                </div>
                                <Form.Item name="password">
                                    <InputBase />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-6">
                                <div className="two-label">
                                    <label>Nhập lại mật khẩu</label>
                                </div>
                                <Form.Item name="rePassword">
                                    <InputBase />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-6">
                                <Form.Item label="Email" name="email">
                                    <InputBase />
                                </Form.Item>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-6">
                                <Form.Item label="Địa chỉ" name="address">
                                    <InputBase />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="text-right">
                            <ButtonBase
                                className="btn-purple"
                                label="Cập nhật"
                                htmlType="submit"
                            />
                        </div>
                    </Form>
                </CardWrap>
            </div>
            <div class="text-right mt-3">
                <ButtonBase
                    className="btn-white"
                    label="Trở về"
                    onClick={() => history.goBack()}
                    style={{ minWidth: "190px" }}
                />
            </div>
        </>
    );
};

export default CreateUser;
