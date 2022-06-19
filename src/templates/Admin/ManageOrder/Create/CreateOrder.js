import { Form } from "antd";
import { ButtonBase } from "components/base/Button";
import { InputBase } from "components/base/Input";
import { UploadBase } from "components/base/Upload";
import CardWrap from "components/common/Card/CardWarp";
import { showNotification } from "functions/Utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { orderAction } from "store/actions";
import { TableOrder } from "./Layout";

const CreateOrder = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const store = useSelector(state => state) 
    const { createOrder } = store.orderReducer;

    React.useEffect(() => {
        if (createOrder) {
            let detail = createOrder.detail
            if (createOrder.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                // setTimeout(() => {
                //     history.replace(
                //         PAGES_URL.order.url + "/edit/" + detail.brand_id
                //     );
                // }, 1000);
            } else {
                showNotification.error({ title: detail });
            }
            dispatch(orderAction.clearData());
        }
    }, [createOrder])

    const onFinish = (e) => {
        if (e) {
            const { customer_id, address, order } = e;
            const newData = [].concat(order)
            for (let i = 0 ; i < newData.length; i++) {
                newData[i].quantity = parseInt(newData[i].quantity)
            }
            let params = {
                customer_id: customer_id ? parseInt(customer_id) : null,
                address: address ? address : null,
                order: newData ? newData : null,
            };
            dispatch(orderAction.postCreateOrder(params));
        }
    };
    return (
        <>
            <CardWrap title="Tạo đơn hàng">
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-xl-4">
                            <Form.Item
                                name="customer_id"
                                label="Mã người mua"
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
                        <div className="col-12 col-sm-6 col-xl-8">
                            <Form.Item
                                name="address"
                                label="Địa chỉ"
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
                        <div className="col-12">
                            <Form.Item
                                name="order"
                                label="Danh sách giày"
                                className="form-group"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập!",
                                    },
                                ]}
                            >
                                <TableOrder form={form}/>
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

export default CreateOrder;
