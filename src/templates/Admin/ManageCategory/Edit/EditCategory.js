import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { categoryAction } from "store/actions";

const CreateCategory = () => {
    const [form] = Form.useForm();
    const {CategoryId} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.categoryReducer);
    const { updateCategory, detailCategory } = store;

    React.useEffect(() => {
        dispatch(categoryAction.getDetailCategory({ category_id: CategoryId }));
    }, []);

    React.useEffect(() => {
        if (detailCategory) {
            let detail = detailCategory.detail;
            if (detailCategory.success) {
                form.setFieldsValue({
                    name: detail.category_name,
                    description: detail.category_description,
                });
            }
        }
    }, [detailCategory]);

    React.useEffect(() => {
        if (updateCategory) {
            let detail = updateCategory.detail;
            if (updateCategory.success) {
                showNotification.success({ title: "Cập nhật thành công" });
            } else {
                showNotification.error({ title: detail });
            }
            dispatch(categoryAction.clearData());
        }
    }, [updateCategory]);

    const onFinish = (e) => {
        if (e) {
            const { name, description } = e;
            let params = {
                category_id: CategoryId ? CategoryId : null,
                name: name ? name : null,
                description: description ? description : null,
            };
            dispatch(categoryAction.postUpdateCategory(params));
        }
    };

    return (
        <>
            <CardWrap title="Chỉnh sửa kiểu giày">
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="name"
                                label="Tên kiểu giày"
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
                                label="Mô tả kiểu giày"
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
                    </div>
                    <div className="text-right">
                        <ButtonBase className="btn-blue" label="Gửi" htmlType="submit"/>
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

export default CreateCategory;
