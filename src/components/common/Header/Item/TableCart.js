import React from "react";
import { TableCustom } from "components/base/Table";
import { InputUpDown } from "components/base/Input";
import { ButtonBase } from "components/base/Button";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "store/actions";
import { convertCurrency } from "functions/Utils";
import { useHistory } from "react-router-dom";
import { PAGES_URL } from "contant";

const TableCart = ({ onCloseModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

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

    const onClickDown = (product, size) => {
        dispatch(cartAction.decreaseQuantity({ product: product, size: size }));
    };

    const onClickUp = (product, size) => {
        dispatch(cartAction.addToCart({ product: product, size: size }));
    };

    const onRedirectCart = () => {
        onCloseModal();
        history.push(PAGES_URL.cart.url);
    };

    const onRedirectCheckout = () => {
        onCloseModal();
        history.push(PAGES_URL.checkout.url);
    };

    const Tbody = React.useCallback(
        (item, index) => {
            return (
                <tr className="list-item" key={index}>
                    <td className="img">
                        <a href="/#">
                            <img
                                src={`data:image/jpeg;base64, ${item?.image_bytes}`}
                                alt="image"
                            />
                        </a>
                    </td>
                    <td className="item">
                        <a className="pro-title-view" href="/#">
                            {item.shoes_name}
                        </a>
                        <span className="variant">{item.size}</span>
                        <InputUpDown
                            value={item.quantity}
                            onClickDown={() => onClickDown(item, item.size)}
                            onClickUp={() => onClickUp(item, item.size)}
                        />
                        <span className="pro-price-view">
                            {convertCurrency(
                                item.sale_price
                                    ? item.sale_price
                                    : item.retail_price,
                                "đ"
                            )}
                        </span>
                        <span
                            className="remove-cart"
                            onClick={() =>
                                dispatch(
                                    cartAction.removeFromCart({
                                        product: item,
                                        size: item.size,
                                    })
                                )
                            }
                        >
                            <i className="fa fa-times" />
                        </span>
                    </td>
                </tr>
            );
        },
        [state.dataCart]
    );

    return (
        <div className="cart-view">
            <div className="cart-scroll">
                <TableCustom
                    // className={"table-basic"}
                    style={{ width: "100%" }}
                    isTable={false}
                    childrenBody={
                        state?.dataCart?.length > 0 ? (
                            state.dataCart.map((item, index) => {
                                return Tbody(item, index);
                            })
                        ) : (
                            <tr>
                                <td className="text-center">
                                    <svg
                                        width="60"
                                        height="60"
                                        viewBox="0 0 81 70"
                                    >
                                        <g
                                            transform="translate(0 2)"
                                            stroke-width="4"
                                            stroke="#000"
                                            fill="none"
                                            fill-rule="evenodd"
                                        >
                                            <circle
                                                stroke-linecap="square"
                                                cx="34"
                                                cy="60"
                                                r="6"
                                            ></circle>
                                            <circle
                                                stroke-linecap="square"
                                                cx="67"
                                                cy="60"
                                                r="6"
                                            ></circle>
                                            <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
                                        </g>
                                    </svg>
                                    <p>Hiện chưa có sản phẩm</p>
                                </td>
                            </tr>
                        )
                    }
                />
            </div>
            <div className="line" />
            <div className="table-total">
                <div className="price-total">
                    <div className="title-total">TỔNG TIỀN:</div>
                    <div className="value-total">
                        {cartItems.total
                            ? convertCurrency(cartItems.total, "đ")
                            : "đ"}
                    </div>
                </div>
                <div className="button-total">
                    <ButtonBase
                        className="btn-black-outline mr-3"
                        label="Xem giỏ hàng"
                        onClick={onRedirectCart}
                    />
                    <ButtonBase
                        className="btn-black-outline-1"
                        label="Thanh toán"
                        onClick={onRedirectCheckout}
                    />
                </div>
            </div>
        </div>
    );
};

export default TableCart;
