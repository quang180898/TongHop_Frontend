import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbCustom = ({ router }) => {
    return (
        <ul className="breadcrumb-custom">
            {router.length > 0 &&
                router.map((item, index) => {
                    return (
                        <li
                            className={`breadcrumb-custom-item ${
                                index == router.length - 1 ? "active" : ""
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
        </ul>
    );
};

export default BreadcrumbCustom;
