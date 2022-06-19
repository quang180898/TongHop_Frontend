import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { accountAction } from "store/actions";
import { ModalChangePass, ModalHistory } from "./index";

const Information = ({ data, disabled, setDisabled }) => {
    const dispatch = useDispatch();
    const [formInfo] = Form.useForm();
    const { AccountId } = useParams();

    const [visibleChangePass, setVisibleChangePass] = useState(false);
    const [state, setState] = useState({
        dataListHistory: null,
        visiable: false,
    });

    const store = useSelector((state) => state);
    const { historyOrder } = store.orderReducer;

    useEffect(() => {
        if (historyOrder) {
            let detail = historyOrder.detail
            if (historyOrder.success) {
                setState({...state, dataListHistory: detail})
            }
        }
    }, [historyOrder]);

    useEffect(() => {
        if (data) {
            formInfo.setFieldsValue({
                fullname: data.name,
                username: data.username,
                password: "******",
                email: data.mail,
                phone: data.mobile,
                address: data.address,
            });
        }
    }, [data]);

    const onFinishInfo = (values) => {
        setDisabled(true);
        if (values) {
            const { fullname, email, phone, address } = values;
            let params = {
                user_id: AccountId ? parseInt(AccountId) : null,
                name: fullname ? fullname : null,
                mail: email ? email : null,
                mobile: phone ? phone : null,
                address: address ? address : null,
            };
            dispatch(accountAction.postUpdateAccount(params));
        }
    };

    const onSubmitInfo = () => {
        formInfo.submit();
    };

    const onResetField = () => {
        setDisabled(true);
        formInfo.setFieldsValue({
            fullname: data.name,
            username: data.username,
            password: "******",
            email: data.mail,
            phone: data.mobile,
        });
    };

    const Heading = () => {
        return (
            <>
                <div className="exchange-rate ml-auto">
                    <button
                        type="button"
                        class="btn_blue_outline dropdown-toggle"
                        onClick={() => setState(e => ({ ...e, visiable: true }))}
                    >
                        Lịch sử mua hàng
                    </button>
                </div>
            </>
        );
    };

    return (
        <>
            <CardWrap
                title="Thông tin người dùng"
                childrenHeading={Heading()}
                isHeigth
            >
                <Form layout="vertical" form={formInfo} onFinish={onFinishInfo}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item label="Họ tên" name="fullname">
                                <InputBase disabled={disabled} />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item label="Tên tài khoản" name="username">
                                <InputBase disabled={true} />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <div className="two-label">
                                <label>Mật khẩu</label>
                                <label
                                    className="text-underline uni_text_6d30ab"
                                    onClick={() => setVisibleChangePass(true)}
                                >
                                    Đổi mật khẩu
                                </label>
                            </div>
                            <Form.Item name="password">
                                <InputBase disabled={true} />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item label="Email" name="email">
                                <InputBase disabled={disabled} />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item label="Địa chỉ" name="address">
                                <InputBase disabled={disabled} />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-6">
                            <Form.Item label="Số điện thoại" name="phone">
                                <InputBase disabled={disabled} />
                            </Form.Item>
                        </div>
                    </div>
                </Form>
                <ModalChangePass
                    visible={visibleChangePass}
                    setVisible={setVisibleChangePass}
                />
                <ModalHistory
                    visible={state.visiable}
                    data={state.dataListHistory}
                    onCancel={() => setState(e => ({ ...e, visiable: false }))}
                />
                <div className="text-right">
                    {disabled ? (
                        <ButtonBase
                            className="btn-black-outline"
                            label="Chỉnh sửa"
                            onClick={() => setDisabled(false)}
                            iconClassname="far fa-edit"
                        />
                    ) : (
                        <>
                            <ButtonBase
                                className="btn-red mr-2"
                                label="Huỷ"
                                onClick={onResetField}
                            />

                            <ButtonBase
                                className="btn-purple"
                                label="Cập nhật"
                                onClick={onSubmitInfo}
                            />
                        </>
                    )}
                </div>
            </CardWrap>
        </>
    );
};

export default Information;
