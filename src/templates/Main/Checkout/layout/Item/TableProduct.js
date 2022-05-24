import React from "react";
import { TableCustom } from "components/base/Table";
import { convertCurrency } from "functions/Utils";
import { useSelector } from "react-redux";

const TableProduct = () => {
    const [state, setState] = React.useState({
        dataCart: [],
    });
    const { cartItems } = useSelector((state) => state.cartReducer);

    React.useEffect(() => {
        if (cartItems.cart) {
            const newData = [].concat(cartItems.cart);
            setState((e) => ({ ...e, dataCart: newData }));
        }
    }, [cartItems.cart]);

    const Theader = () => {
        return (
            <tr>
                <th />
                <th />
                <th />
                <th />
                <th />
            </tr>
        );
    };
    const Tbody = (item, index) => {
        return (
            <tr key={index}>
                <td className="product-image">
                    <div className="product-thumbnail">
                        <div className="product-thumbnail-wrapper">
                            <img
                                className="product-thumbnail-image"
                                alt="image-product"
                                src={item.image}
                            />
                        </div>
                        <span className="product-thumbnail-quantity">
                            {item.quantity}
                        </span>
                    </div>
                </td>
                <td colSpan={2} className="product-description">
                    <span className="order-summary-emphasis">{item.name}</span>
                    <span className="order-summary-small-text">
                        {item.size}
                    </span>
                </td>
                <td className="product-price">
                    <span className="order-summary-emphasis">
                        {convertCurrency(item.price * item.quantity, "đ")}
                    </span>
                </td>
            </tr>
        );
    };

    return (
        <TableCustom
            isTable={false}
            classNameWrap="table-checkout"
            childrenHead={<Theader />}
            childrenBody={
                state?.dataCart?.length > 0 &&
                state.dataCart.map((item, index) => {
                    return Tbody(item, index);
                })
            }
        />
    );
};

export default TableProduct;
