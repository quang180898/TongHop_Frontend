import { Form } from "antd";
import React from "react";
import { MainCheckout, SidebarCheckout } from "./layout";

const Checkout = () => {
    const [formCheckout] = Form.useForm();

    const onFinishCheckout = (e) => {
        console.log(e);
    };

    return (
        <div className="checkout">
            <Form
                form={formCheckout}
                layout="vertical"
                onFinish={onFinishCheckout}
            >
                <MainCheckout />
                <SidebarCheckout />
            </Form>
        </div>
    );
};

export default Checkout;
