import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import { PAGES_URL } from "contant";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { categoryAction } from "store/actions";

const CreateCategory = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useSelector((state) => state.categoryReducer);
    const { updateCategory } = store;

    React.useEffect(() => {
        if (updateCategory) {
            let detail = updateCategory.detail;
            if (updateCategory.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                setTimeout(() => {
                    history.replace(
                        PAGES_URL.category.url + "/edit/" + detail.category_id
                    );
                }, 1000);
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
                name: name ? name : "",
                description: description ? description : "",
            };
            dispatch(categoryAction.postUpdateCategory(params));
        }
    };

    return (
        <>
            <CardWrap title="Thêm kiểu giày">
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
                        <ButtonBase
                            className="btn-blue"
                            label="Gửi"
                            htmlType="submit"
                        />
                    </div>
                </Form>
            </CardWrap>
            <div className="text-right">
                <ButtonBase className="btn-white mr-2" label="Trở về" onClick={() => history.goBack()}/>
            </div>
        </>
    );
};

export default CreateCategory;
