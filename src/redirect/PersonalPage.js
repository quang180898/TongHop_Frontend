//libs
import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { PERSONAL } from "../routes";
import { Animated } from "react-animated-css";
import { PAGES_URL } from "contant";
import { TOKEN } from "functions/Utils";

const PersonalPage = () => {
    return (
        <div className="personal-page">
            <Suspense fallback={""}>
                <Switch>
                    {TOKEN === null && (
                        <Redirect
                            from={PAGES_URL.checkout.url}
                            to={PAGES_URL.mainLogin.url}
                        />
                    )}
                    {PERSONAL.map((data, idx) => (
                        <Route exact key={idx} path={data.path}>
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
        </div>
    );
};

export default PersonalPage;
