import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbCustom = ({ router, isCheckout = false }) => {
    return (
        <div
            className={`page-breadcrumb-custom ${
                isCheckout ? "page-checkout" : ""
            }`}
        >
            <div className="container">
                <ol
                    className="breadcrumb-custom"
                >
                    {router.length > 0 &&
                        router.map((item, index) => {
                            return (
                                <li
                                    className={`breadcrumb-custom-item ${
                                        index == router.length - 1
                                            ? "active"
                                            : ""
                                    }`}
                                    key={index}
                                >
                                    {index != router.length - 1 ? (
                                        <>
                                            <Link to={item.path}>
                                                {item.label}
                                            </Link>
                                            <i className="icon las la-angle-right" />
                                        </>
                                    ) : (
                                        item.label
                                    )}
                                </li>
                            );
                        })}
                </ol>
            </div>
        </div>
    );
};

export default BreadcrumbCustom;
