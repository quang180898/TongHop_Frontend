import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import React from "react";

const EditOrder = () => {
    const [form] = Form.useForm();

    const onFinish = (e) => {};
    return (
        <CardWrap title="Chỉnh sửa đơn hàng">
        <Form form={form} onFinish={onFinish} layout="vertical">
            <div className="row">
                <div className="col-12 col-sm-6 col-xl-4">
                    <Form.Item
                        name="name"
                        label="Mã giày"
                        className="form-group"
                    >
                        <InputBase />
                    </Form.Item>
                </div>
                <div className="col-12 col-sm-6 col-xl-4">
                    <Form.Item
                        name="code"
                        label="Giá giày"
                        className="form-group"
                    >
                        <InputBase />
                    </Form.Item>
                </div>
                <div className="col-12 col-sm-6 col-xl-4">
                    <Form.Item
                        name="description"
                        label="Kích cỡ"
                        className="form-group"
                    >
                        <InputBase />
                    </Form.Item>
                </div>
                <div className="col-12 col-sm-6 col-xl-4">
                    <Form.Item
                        name="quantity"
                        label="Số lượng"
                        className="form-group"
                    >
                        <InputBase />
                    </Form.Item>
                </div>
            </div>
            <div className="text-right">
                <ButtonBase className="btn-white mr-2" label="Trở về" />
                <ButtonBase className="btn-blue" label="Gửi" />
            </div>
        </Form>
    </CardWrap>
    );
};

export default EditOrder;
