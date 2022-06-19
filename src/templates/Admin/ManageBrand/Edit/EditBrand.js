import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { brandAction } from "store/actions";

const EditBrand = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const { BrandId } = useParams();
    const dispatch = useDispatch();

    const store = useSelector((state) => state.brandReducer);
    const { updateBrand, detailBrand } = store;

    React.useEffect(() => {
        dispatch(brandAction.getDetailBrand({ brand_id: BrandId }));
    }, []);

    React.useEffect(() => {
        if (detailBrand) {
            let detail = detailBrand.detail;
            if (detailBrand.success) {
                form.setFieldsValue({
                    name: detail.brand_name,
                    code: detail.brand_code,
                    description: detail.brand_description,
                });
            }
        }
    }, [detailBrand]);

    React.useEffect(() => {
        if (updateBrand) {
            let detail = updateBrand.detail;
            if (updateBrand.success) {
                showNotification.success({ title: "Cập nhật thành công" });
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
                brand_id: BrandId ? BrandId : null,
                name: name ? name : null,
                code: code ? code : null,
                description: description ? description : null,
                image: image ? image.file.originFileObj : null,
            };
            dispatch(brandAction.postUpdateBrand(params));
        }
    };

    return (
        <>
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

export default EditBrand;
