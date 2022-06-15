import { Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { SelectBase } from "components/base/Select";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import React from "react";
import { TableSize } from "./Layout";

const CreateShoes = () => {
    const [form] = Form.useForm();

    const onFinish = (e) => {
        console.log(e);
    };
    return (
        <CardWrap title="Chỉnh sửa sản phẩm">
            <Form form={form} onFinish={onFinish} layout="vertical">
                <div className="row">
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="name"
                            label="Tên sản phẩm"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="code"
                            label="Mã sản phẩm"
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
                            name="retail_price"
                            label="Giá gốc"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="retail_price"
                            label="Giá khuyến mãi"
                            className="form-group"
                        >
                            <InputBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="brand_id"
                            label="Thương hiệu"
                            className="form-group"
                        >
                            <SelectBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="category_id"
                            label="Kiểu"
                            className="form-group"
                        >
                            <SelectBase />
                        </Form.Item>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <Form.Item
                            name="gender"
                            label="Giới tính"
                            className="form-group"
                        >
                            <SelectBase />
                        </Form.Item>
                    </div>

                    <div className="col-6">
                        <Form.Item
                            name="image"
                            label="Hình ảnh"
                            className="form-group"
                        >
                            <UploadBase />
                        </Form.Item>
                    </div>
                    <div className="col-6">
                        <Form.Item label="Số lượng" className="form-group">
                            <TableSize form={form} />
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

export default CreateShoes;
