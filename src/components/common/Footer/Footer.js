import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container mt-4">
      <div className="footer-section">
        <div className="container">
          <div className="d-flex row">
            <div className="col-md-3 col-sm-6 col-xs-12 infomation mb-2">
              <div className="title-footer">
                <h4 className="h4">GIÀY SNEAKER</h4>
              </div>
              <div className="infomation-wanda">
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> 876
                    Trường Sa, Phường 13, Quận 3, TP.HCM
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    <a  href="/#">
                      01234567890
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    <a href="/#">
                      dangquangsneaker@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 tablink mb-2">
              <div className="title-footer">
                <h4 className="h4">Liên kết</h4>
              </div>
              <div className="footer-link-wanda">
                <ul>
                  <li>
                    <a href="/search">Tìm kiếm</a>
                  </li>
                  <li>
                    <a href="/pages/about-us">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="/pages/huong-dan-do-size-giay">
                      Hướng dẫn đo size giày
                    </a>
                  </li>
                  <li>
                    <a href="/pages/kiem-tra-don-hang">Theo dõi đơn hàng</a>
                  </li>
                  <li>
                    <a href="/blogs/news">Blog</a>
                  </li>
                  <li>
                    <a href="/pages/he-thong-cua-hang">Hệ thống cửa hàng</a>
                  </li>
                  <li>
                    <a href="/pages/cau-hoi-thuong-gap-1">Câu hỏi thường gặp</a>
                  </li>{" "}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 tablink mb-2">
              <div className="title-footer">
                <h4 className="h4">Chính sách</h4>
              </div>

              <div className="footer-link-wanda">
                <ul>
                  <li>
                    <a href="/pages/chinh-sach-doi-tra">Chính sách đổi trả</a>
                  </li>
                  <li>
                    <a href="/pages/chinh-sach-bao-mat">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="/pages/chinh-sach-bao-hanh">Chính sách bảo hành</a>
                  </li>
                  <li>
                    <a href="/pages/chinh-sach-khach-hang-than-thiet">
                      Khách hàng thân thiết
                    </a>
                  </li>
                  <li>
                    <a href="/pages/chinh-sach-giao-nhan">
                      Chính sách giao nhận
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 newletter">
              <div className="title-footer">
                <h4 className="h4">Đăng ký nhận khuyến mãi</h4>
                <p>Hãy là người đầu tiên nhận khuyến mãi lớn!</p>
              </div>
              <div className="form-ft-wanda">
                <form className="contact-form">
                  <div className="form-group mb-0">
                    <input
                      type="email"
                      required="required"
                      name="contact_email"
                      placeholder="Email"
                    />
                  </div>
                  <button className="btn" type="submit">
                    Đăng ký
                  </button>
                </form>{" "}
              </div>
              <ul className="social-footer d-flex mt-2 align-items-center">
                <li className="zalo">
                  <a href="1">
                    <img
                      width="30"
                      height="30"
                      src="//theme.hstatic.net/1000040357/1000808919/14/zalo-icon.svg?v=216"
                      alt="Liên hệ với chúng tôi qua Zalo"
                    />
                  </a>
                </li>
                <li className="tiktok">
                  <a href="1">
                    <img
                      width="18"
                      height="18"
                      src="//theme.hstatic.net/1000040357/1000808919/14/tik-tok.svg?v=216"
                      alt="Liên hệ với chúng tôi qua Tiktok"
                    />
                  </a>
                </li>
                <li className="twitter">
                  <a href="1">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a href="1">
                    <i className="fab fa-youtube" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a  href="/#">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a  href="/#">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wanda">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 text-left">
              <div className="text-copyright mb-0">
                <p>
                  © Copyright 2022 By
                  <a href="/" target="_blank" className="underline_hover link">
                    {" "}
                    Đăng Quang Sneaker.
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center mg-bt-mb-10">
              <img
                className="lazyloaded"
                src="//theme.hstatic.net/1000040357/1000808919/14/pay_copyright.png?v=216"
                data-src="//theme.hstatic.net/1000040357/1000808919/14/pay_copyright.png?v=216"
                width="247"
                height="25"
                alt="Payment"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
