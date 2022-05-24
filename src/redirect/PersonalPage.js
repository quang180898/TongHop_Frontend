//libs
import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { PERSONAL } from "../routes";
import { Animated } from "react-animated-css";

const PersonalPage = () => {
    return (
        <div className="personal-page">
            <Suspense fallback={""}>
                <Switch>
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
