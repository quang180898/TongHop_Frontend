import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { brandAction } from "store/actions";

const CreateBrand = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.brandReducer);
    const { updateBrand } = store;

    React.useEffect(() => {
        if (updateBrand) {
            let detail = updateBrand.detail;
            if (updateBrand.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                setTimeout(() => {
                    history.replace(
                        PAGES_URL.brand.url + "/edit/" + detail.brand_id
                    );
                }, 1000);
            } else {
                showNotification.error({ title: detail });
            }
            dispatch(brandAction.clearData());
        }
    }, [updateBrand]);

    const onFinish = (e) => {
        if (e) {
            const { name, code, description, image } = e;
            let params = {
                name: name ? name : "",
                code: code ? code : "",
                description: description ? description : "",
                image: image ? image.file.originFileObj : "",
            };
            dispatch(brandAction.postUpdateBrand(params));
        }
    };

    return (
        <>
            <CardWrap title="Thêm thương hiệu">
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="name"
                                label="Tên thương hiệu"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="code"
                                label="Mã thương hiệu"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="description"
                                label="Mô tả"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="image"
                                label="Hình ảnh"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <UploadBase />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="text-right">
                        <ButtonBase
                            className="btn-blue"
                            label="Gửi"
                            htmlType="submit"
                        />
                    </div>
                </Form>
            </CardWrap>
            <div className="text-right">
                <ButtonBase
                    className="btn-white mr-2"
                    label="Trở về"
                    onClick={() => history.goBack()}
                />
            </div>
        </>
    );
};

export default CreateBrand;
