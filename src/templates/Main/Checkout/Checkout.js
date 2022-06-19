import { Form } from "antd";
import { PAGES_URL } from "contant";
import { getLocalStore, showNotification } from "functions/Utils";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { orderAction } from "store/actions";
import { MainCheckout, SidebarCheckout } from "./layout";

const Checkout = () => {
    const [formCheckout] = Form.useForm();

    const history = useHistory();
    const dispatch = useDispatch();
    const user = getLocalStore("user");

    const [state, setState] = useState();

    const store = useSelector((state) => state);
    const { cartItems } = store.cartReducer;
    const { createOrder, momoOrder } = store.orderReducer;

    React.useEffect(() => {
        const errorCode = new URLSearchParams(history.location.search).get(
            "errorCode"
        );
        if (errorCode == 0) {
            const params = getLocalStore("payment");
            if (params) {
                console.log(params);
                dispatch(orderAction.postCreateOrder(params));
            }
        } else {
            showNotification.error({ title: "Thanh toán thất bại" });
        }
    }, []);

    React.useEffect(() => {
        if (cartItems.cart) {
            if (cartItems.cart.length > 0) {
                setState(cartItems.cart);
            } else {
                window.location.replace("/cart");
            }
        }
    }, [cartItems.cart]);

    React.useEffect(() => {
        formCheckout.setFieldsValue({
            name: user ? user.name : "",
            mail: user ? user.mail : "",
            address: user ? user.address : "",
            payment: 1,
        });
    }, []);

    React.useEffect(() => {
        if (createOrder) {
            let detail = createOrder.detail;
            if (createOrder.success) {
                showNotification.success({ title: "Cập nhật thành công" });
                setTimeout(() => {
                    history.replace(PAGES_URL.home.url);
                }, 1000);
            } else {
                showNotification.success({ title: detail });
            }
            dispatch(orderAction.clearData());
        }
    }, [createOrder]);

    React.useEffect(() => {
        if (momoOrder) {
            let detail = momoOrder.detail;
            if (momoOrder.success) {
                window.location.href = detail.payUrl;
            } else {
                showNotification.success({ title: detail });
            }
            dispatch(orderAction.clearData());
        }
    }, [momoOrder]);

    const onFinishCheckout = (e) => {
        if (e) {
            const { address, payment } = e;
            const coupon = formCheckout.getFieldValue("coupon");
            let params = {
                customer_id: user.customer_id,
                address: address,
                order: [],
            };
            for (let i = 0; i < state.length; i++) {
                let item = state[i];
                params.order.push({
                    shoes_id: item.shoes_id,
                    size: item.size,
                    quantity: item.quantity,
                    price: item.sale_price
                        ? item.sale_price
                        : item.retail_price,
                });
            }
            if (coupon) {
                params.discount_code = coupon;
            }
            if (payment == 1) {
                dispatch(orderAction.postCreateOrder(params));
            } else {
                if (coupon) {
                    if (params.order.length > 1) {
                        showNotification.error({
                            title: "Mã khuyến mãi chỉ áp dụng 1 sản phẩm",
                        });
                    } else {
                        let newTotal = cartItems?.total - ((cartItems?.total * 10) / 100)
                        dispatch(
                            orderAction.postMomoOrder({
                                amount: newTotal,
                                orderInfo: "Test",
                            })
                        );
                    }
                } else {
                    dispatch(
                        orderAction.postMomoOrder({
                            amount: cartItems?.total,
                            orderInfo: "Test",
                        })
                    );
                }     
            }
            localStorage.setItem("payment", JSON.stringify(params));
        }
    };

    return (
        <div className="checkout">
            <Form
                form={formCheckout}
                layout="vertical"
                onFinish={onFinishCheckout}
            >
                <MainCheckout />
                <SidebarCheckout form={formCheckout} />
            </Form>
        </div>
    );
};

export default Checkout;
