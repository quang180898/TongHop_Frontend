import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import React from "react";

const EditBrand = () => {
    const [form] = Form.useForm();

    const onFinish = (e) => {};
    return (
        <CardWrap title="Chỉnh sửa thương hiệu">
            <Form form={form} onFinish={onFinish} layout="vertical">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="name"
                            label="Tên thương hiệu"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="code"
                            label="Mã thương hiệu"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="description"
                            label="Mô tả"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="image"
                            label="Hình ảnh"
                            className="form-group"
                        >
                            <UploadBase />
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

export default EditBrand;
