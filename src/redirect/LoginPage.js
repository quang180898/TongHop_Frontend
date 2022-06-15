import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Animated } from "react-animated-css";
import { LOGINS } from "routes";
import { StaticLoading } from "components/base/Loading";

const LoginPage = () => {
    return (
        <main className="main-wrapper public_page">
            <Suspense fallback={<StaticLoading />}>
                <Switch>
                    {LOGINS.map((data, idx) => (
                        <Route key={idx} exact path={data.path}>
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                isVisible={true}
                            >
                                <data.component />
                            </Animated>
                        </Route>
                    ))}
                </Switch>
            </Suspense>
        </main>
    );
};
export default LoginPage;
