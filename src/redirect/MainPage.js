//libs
import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { MAIN } from "../routes";
import { Animated } from "react-animated-css";
// import PageNotFound from 'templates/ErrorPage/PageNotFound';
import { getLocalStore, removeEmptyFromObj } from "functions/Utils";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "components/common/Header";
import { Footer } from "components/common/Footer";
import ErrorMain from "templates/Main/ErrorMain/ErrorMain";

const MainPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    // const urlCurrent = location.pathname.split('/')[1]
    // console.log(location)
    const queryParams = new URLSearchParams(location.search);
    const messageParams = queryParams.get("message");

    useEffect(() => {
        if (messageParams === "Success") {
            const payment = getLocalStore("payment");
            const user = getLocalStore("user");
            let data = {
                book_id: parseInt(payment.id),
                user_id: parseInt(user.customer_id),
                date_borrow: moment().format("DD/MM/YYYY HH:mm:ss"),
                date_return: moment()
                    .add(6, "days")
                    .format("DD/MM/YYYY HH:mm:ss"),
            };
            const params = removeEmptyFromObj(data);
            if (params) {
                dispatch(bookAction.createAccountBook(params));
            }
        }
    }, [messageParams]);

    return (
        <div className="main-body">
            <div className="mainPage">
                <Header />
                <Suspense fallback={""}>
                    <Switch>
                        {/* {TOKEN == null
                        &&
                        <Redirect from={"/profile/:id"} to={PAGES_URL.login.url} />
                    } */}
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
                        <Route component={ErrorMain} />
                    </Switch>
                </Suspense>
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
