import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { DatepickerBase } from "components/base/DatePicker";
import { InputBase } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import React from "react";

const EditOrder = () => {
    const [form] = Form.useForm();

    const onFinish = (e) => {};
    return (
        <CardWrap title="Chỉnh sửa khuyến mãi">
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
                            label="Phần trăm khuyến mãi"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="description"
                            label="Ngày kết thúc"
                            className="form-group"
                        >
                            <DatepickerBase />
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
