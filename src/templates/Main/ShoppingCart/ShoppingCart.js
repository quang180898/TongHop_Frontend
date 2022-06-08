import { Form } from "antd";
import { Breadcrumb } from "components/common/Breadcrumb";
import React from "react";
import { MAIN } from "routes";
import { ListCart, SidebarCheckout } from "./layout";

const ShoppingCart = () => {

    return (
        <div className="shopping-cart">
            <Breadcrumb router={MAIN} />
            <div className="cart-template">
                <div className="container">
                    <Form>
                        <div className="row d-flex">
                            <ListCart />
                            <SidebarCheckout />
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
