import React from "react";
import { InputUpDown } from "components/base/Input";
import { useDispatch, useSelector } from "react-redux";
import { convertCurrency } from "functions/Utils";
import { cartAction } from "store/actions";

const ListCart = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        dataCart: [],
        countCart: 0,
    });

    const { cartItems } = useSelector((state) => state.cartReducer);

    React.useEffect(() => {
        if (cartItems.cart) {
            const newData = [].concat(cartItems.cart);
            const countData = newData
                .map((item) => item.quantity)
                .reduce((prev, next) => prev + next, 0);
            setState((e) => ({
                ...e,
                dataCart: newData,
                countCart: countData,
            }));
        }
    }, [cartItems.cart]);

    const onClickDown = (product, size) => {
        dispatch(cartAction.decreaseQuantity({ product: product, size: size }));
    };

    const onClickUp = (product, size) => {
        dispatch(cartAction.addToCart({ product: product, size: size }));
    };

    return (
        <div className="col-xs-12 col-lg-9 col-md-8 col-sm-7">
            <div className="cart-title">
                <h2>Giỏ hàng:</h2>
                <span className="cart-count">
                    <span className="cart-counter">{state.countCart} </span>
                    <span className="cart-item-title">Sản phẩm</span>
                </span>
            </div>
            <div className="item-wrap">
                {state?.dataCart?.length > 0 ? (
                    state.dataCart.map((item, index) => {
                        return (
                            <ul className="cart-wrap" key={index}>
                                <li className="item-info">
                                    <div className="item-img">
                                        <a>
                                            <img
                                                src={`data:image/jpeg;base64, ${item.image_bytes}`}
                                                alt="image"
                                            />
                                        </a>
                                    </div>
                                    <div className="item-title">
                                        <a>{item.shoes_name}</a>
                                        <span className="item-option">
                                            <span>{item.size}</span>
                                        </span>
                                        <span className="item-option">
                                            <span>SKU: {item.shoes_code}</span>
                                        </span>
                                        <span className="item-option">
                                            <span>
                                                {convertCurrency(
                                                    item.sale_price
                                                        ? item.sale_price
                                                        : item.retail_price,
                                                    "đ"
                                                )}
                                            </span>
                                        </span>
                                    </div>
                                </li>
                                <li className="item-qty">
                                    <InputUpDown
                                        value={item.quantity}
                                        onClickDown={() =>
                                            onClickDown(item, item.size)
                                        }
                                        onClickUp={() =>
                                            onClickUp(item, item.size)
                                        }
                                    />
                                    <div
                                        className="item-remove"
                                        onClick={() =>
                                            dispatch(
                                                cartAction.removeFromCart({
                                                    product: item,
                                                    size: item.size,
                                                })
                                            )
                                        }
                                    >
                                        <span className="remove-wrap">
                                            <a>Xóa</a>
                                        </span>
                                    </div>
                                </li>
                                <li className="item-price">
                                    <span className="money">
                                        {convertCurrency(
                                            item.sale_price * item.quantity,
                                            "đ"
                                        )}
                                    </span>
                                </li>
                            </ul>
                        );
                    })
                ) : (
                    <div className="text-center">
                        <svg width="60" height="60" viewBox="0 0 81 70">
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListCart;
