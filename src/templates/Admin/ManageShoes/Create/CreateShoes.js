import { Form } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { SelectBase } from "components/base/Select";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import { gender_category } from "constant/collection";
import { getValueText, showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { brandAction, categoryAction, shoesAction } from "store/actions";
import { TableSize } from "./Layout";

const CreateShoes = () => {
    const [form] = Form.useForm();

    const history = useHistory();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        dataBrand: null,
        dataCategory: null,
    });

    const store = useSelector((state) => state);
    const { updateShoes } = store.shoesReducer;
    const { listBrand } = store.brandReducer;
    const { listCategory } = store.categoryReducer;

    React.useEffect(() => {
        dispatch(brandAction.getListBrand());
        dispatch(categoryAction.getListCategory());
    }, []);

    React.useEffect(() => {
        if (updateShoes) {
            let detail = updateShoes.detail;
            if (updateShoes.success) {
                showNotification.success({ title: "Cập nhật thành công" });
            } else {
                showNotification.error({ title: detail });
            }
            dispatch(shoesAction.clearData());
        }
    }, [updateShoes]);

    React.useEffect(() => {
        if (listBrand) {
            let detail = listBrand.detail;
            if (listBrand.success) {
                let data = [];
                for (let i = 0; i < detail.length; i++) {
                    data.push({
                        label: getValueText(detail[i].brand_name),
                        value: getValueText(detail[i].brand_id),
                    });
                }
                setState({ ...state, dataBrand: data });
            }
        }
    }, [listBrand]);

    React.useEffect(() => {
        if (listCategory) {
            let detail = listCategory.detail;
            if (listCategory.success) {
                let data = [];
                for (let i = 0; i < detail.length; i++) {
                    data.push({
                        label: getValueText(detail[i].category_name),
                        value: getValueText(detail[i].category_id),
                    });
                }
                setState({ ...state, dataCategory: data });
            }
        }
    }, [listCategory]);

    React.useEffect(() => {
        if (updateShoes) {
            let detail = updateShoes.detail;
            if (updateShoes.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                setTimeout(() => {
                    history.replace(
                        PAGES_URL.shoes.url + "/edit/" + detail.shoes_id
                    );
                }, 1000);
            } else {
                showNotification.error({ title: detail });
            }
            dispatch(shoesAction.clearData());
        }
    }, [updateShoes]);

    const onFinish = (e) => {
        if (e) {
            const {
                name,
                code,
                description,
                retail_price,
                wholesale_price,
                size_quantity,
                brand_id,
                category_id,
                gender,
                image,
            } = e;
            const formData = new FormData();
            if (image.fileList.length > 0) {
                for (let i = 0; i < image.fileList.length; i++) {
                    let item = image.fileList[i].originFileObj;
                    formData.append("image", item);
                }
            }
            let data = {
                name: name,
                code: code,
                description: description ? description : null,
                retail_price: retail_price,
                // wholesale_price: wholesale_price,
                brand_id: brand_id,
                size_quantity: size_quantity,
                category_id: category_id,
                gender: gender,
            };
            const dataKeys = Object.keys(data);
            for (let i in dataKeys) {
                let valueItem = data[dataKeys[i]];
                Array.isArray(valueItem)
                    ? formData.append(dataKeys[i], JSON.stringify(valueItem))
                    : formData.append(dataKeys[i], valueItem);
            }
            let params = formData;
            dispatch(shoesAction.postUpdateShoes(params));
        }
    };

    return (
        <>
            <CardWrap title="Chỉnh sửa sản phẩm">
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="name"
                                label="Tên sản phẩm"
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
                                label="Mã sản phẩm"
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
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="retail_price"
                                label="Giá bán lẻ"
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
                                name="wholesale_price"
                                label="Giá bán sỉ"
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
                                name="brand_id"
                                label="Thương hiệu"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <SelectBase
                                    datas={state.dataBrand}
                                    placeholder="Chọn thương hiệu"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="category_id"
                                label="Kiểu"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <SelectBase
                                    datas={state.dataCategory}
                                    placeholder="Chọn kiểu giày"
                                />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="gender"
                                label="Giới tính"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <SelectBase
                                    datas={gender_category}
                                    placeholder="Chọn giới tính"
                                />
                            </Form.Item>
                        </div>

                        <div className="col-6">
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
                        <div className="col-6">
                            <Form.Item
                                label="Số lượng"
                                name="size_quantity"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <TableSize form={form} />
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

export default CreateShoes;
