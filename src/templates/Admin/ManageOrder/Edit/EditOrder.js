import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import CardWrap from "components/common/Card/CardWarp";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { orderAction } from "store/actions";

const EditOrder = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const { OrderId } = useParams();
    const store = useSelector((state) => state.orderReducer);
    const { updateOrder } = store;

    React.useEffect(() => {
        if (updateOrder) {
            let detail = updateOrder.detail;
            if (updateOrder.success) {
                showNotification.success({ title: "Cập nhật thành công" });
            } else {
                showNotification.success({ title: detail });
            }
            dispatch(orderAction.clearData());
        }
    }, [updateOrder]);

    const onFinish = (e) => {
        if (e) {
            const { customer_id, shoes_id, price, size, quantity } = e;
            let params = {
                customer_shoes_id: OrderId,
                customer_id: customer_id ? customer_id : null,
                shoes_id: shoes_id ? shoes_id : null,
                price: price ? price : null,
                size: size ? size : null,
                quantity: quantity ? quantity : null,
            };
            dispatch(orderAction.postUpdateOrder(params));
        }
    };
    return (
        <>
            <CardWrap title="Chỉnh sửa đơn hàng">
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="customer_id"
                                label="Mã người dùng"
                                className="form-group"
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="shoes_id"
                                label="Mã giày"
                                className="form-group"
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="price"
                                label="Giá giày"
                                className="form-group"
                            >
                                <InputBase />
                            </Form.Item>
                        </div>
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="size"
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

export default EditOrder;
