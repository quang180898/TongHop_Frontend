import { IMAGE_URL, PAGES_URL } from "contant";
import React from "react";
import { Link } from "react-router-dom";

const ErrorMain = () => {
    return (
        <div className="page-404">
            <header>
                <Link to={PAGES_URL.home.url} className="logo">
                    <figure className="img-logo">
                        <img src={`${IMAGE_URL + "logo-sneaker.jpg"}`} />
                    </figure>
                </Link>
            </header>
            <div className="content">
                <span className="text-404">
                    404
                </span>
                <h1 className="heading">Đã xảy ra lỗi...</h1>
                <p className="sub-heading text-center">
                    Rất tiếc, địa chỉ bạn truy cập không tồn tại trên hệ thống.<br/> Chúng tôi sẽ khắc phục lỗi sớm nhất.
                </p>
            </div>
        </div>
    );
};

export default ErrorMain;
