import { Form } from 'antd';
import { ButtonBase } from 'components/base/Button';
import { InputBase } from 'components/base/Input';
import { ModalCustom } from 'components/base/Modal';
import { RULES, showNotification } from 'functions/Utils';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { accountAction } from 'store/actions';

const ModalChangePass = ({ visible, setVisible }) => {

    const dispatch = useDispatch();
    const { AccountId } = useParams();
    const [formChangePass] = Form.useForm();
    const store = useSelector(state => state.accountReducer);
    const { changeAccount } = store

    useEffect(() => {
        if(changeAccount) {
            if(changeAccount.success) {
                showNotification.success({ message: 'Cập nhật thành công', title: 'success' })
                setTimeout(() => {
                    setVisible(false)
                }, 1000);
                
            } else {
                showNotification.error({ message: changeAccount.detail, title: 'error' })
            }
        }

    }, [changeAccount])

    const handleOk = () => {
        formChangePass.submit()
    }

    const handleCancel = () => {
        setVisible(false)
        formChangePass.resetFields();
    }

    const onSubmitPass = (e) => {
        if (e) {
            let params = {
                user_id: parseInt(AccountId),
                new_password: e.new_pass,
                new_password_repeat: e.enter_pass,
                current_password: e.old_pass,
            }
            dispatch(accountAction.postChangeAccount(params))
        }
    }

    return (
            <ModalCustom
                title="Thay đổi mật khẩu"
                visible={visible}
                onCancel={handleCancel}
                widthModal={450}
                button={
                    <div className="modal-card__btn">
                        <ButtonBase
                            className='btn-white mr-2'
                            label="Đóng"
                            onClick={handleCancel}
                        />
                        <ButtonBase
                            className='btn-purple'
                            label="Cập nhật"
                            onClick={handleOk}
                        />
                    </div>
                }
            >
                <Form 
                    form={formChangePass}
                    onFinish={onSubmitPass}
                    layout="vertical"
                >
                <div className="row">
                    <div className="col-12">
                        <Form.Item 
                            label="Mật khẩu" 
                            className="form-group" 
                            name="old_pass" 
                            rules={RULES.text.form()}>
                            <InputBase 
                                placeholder="Mật khẩu"
                            />
                        </Form.Item>
                    </div>
                    <div className="col-12">
                        <Form.Item
                            label="Mật khẩu mớI"
                            className="form-group"
                            name="new_pass"
                            rules={RULES.text.form()}>
                            <InputBase 
                                placeholder="Mật khẩu mới"
                            />
                        </Form.Item>
                    </div>
                    <div className="col-12">
                        <Form.Item 
                            label="Nhập lại mật khẩu mới"
                            className="form-group"
                            name="enter_pass"
                            rules={RULES.text.form()}>
                            <InputBase 
                                placeholder="Nhập lại mật khẩu mới"
                            />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </ModalCustom>
       
    )
}

export default ModalChangePass;