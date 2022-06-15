//libs
import React, { Suspense } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from "react-animated-css";

import { useDispatch } from "react-redux";
import { Header } from "components/common/Header";
import { Footer } from "components/common/Footer";
import { TOKEN } from "functions/Utils";
import { PAGES_URL } from "contant";

const MainPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [showButton, setShowButton] = React.useState(false);
    const urlCurrent = location.pathname.split("/")[1];
    // const queryParams = new URLSearchParams(location.search);
    // const messageParams = queryParams.get("message");

    // useEffect(() => {
    //     if (messageParams === "Success") {
    //         const payment = getLocalStore("payment");
    //         const user = getLocalStore("user");
    //         let data = {
    //             book_id: parseInt(payment.id),
    //             user_id: parseInt(user.customer_id),
    //             date_borrow: moment().format("DD/MM/YYYY HH:mm:ss"),
    //             date_return: moment()
    //                 .add(6, "days")
    //                 .format("DD/MM/YYYY HH:mm:ss"),
    //         };
    //         const params = removeEmptyFromObj(data);
    //         if (params) {
    //             dispatch(bookAction.createAccountBook(params));
    //         }
    //     }
    // }, [messageParams]);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
        });
    };

    return (
        <div className="main-body">
            <div
                className={`mainPage ${
                    urlCurrent == "profile" ? "is-profile" : ""
                }`}
            >
                <Header />
                <Suspense fallback={""}>
                    <Switch>
                        {TOKEN === null && (
                            <Redirect
                                from={PAGES_URL.profile.url}
                                to={PAGES_URL.mainLogin.url}
                            />
                        )}
                        {MAIN.map((data, idx) => (
                            <Route exact key={idx} path={data.path}>
                                <Animated
                                    className="main-animate"
                                    animationIn="fadeIn"
                                    animationOut="fadeOut"
                                    isVisible={true}
                                >
                                    <data.component />
                                </Animated>
                            </Route>
                        ))}

                        {/* <Redirect from={PAGES_URL.payment.url} to={PAGES_URL.home.url} /> */}
                    </Switch>
                </Suspense>
                <Footer />
                <button
                    className={`back-to-top ${showButton ? "active" : ""}`}
                    onClick={scrollToTop}
                >
                    <i className="fas fa-angle-double-up"></i>
                </button>
            </div>
        </div>
    );
};

export default MainPage;
