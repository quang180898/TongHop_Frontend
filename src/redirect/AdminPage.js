
import { destroyNotification } from "functions/Utils";
import React, { useLayoutEffect, useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { ADMIN } from "routes";
import { commonAction } from "store/actions";
import { Breadcrumb } from "components/common/Breadcrumb";
import { Header, Sidebar } from "components/common/Frames";

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    React.useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("load", updateSize);
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => {
            window.removeEventListener("load", updateSize);
            window.removeEventListener("resize", updateSize);
        };
    }, []);
    return size;
}

const AdminPage = () => {
    const [width, height] = useWindowSize();
    const location = useLocation();
    const dispatch = useDispatch();

    const commonReducer = useSelector((state) => state.commonReducer);
    const { isShowSidebar, isShowSidebarMobile } = commonReducer;

    useEffect(() => {
        if (location.pathname != "/") {
            localStorage.setItem(
                "paths",
                JSON.stringify(["/", location.pathname])
            );
        } else {
            localStorage.setItem("paths", JSON.stringify(["/"]));
        }
        window.addEventListener("beforeunload", (e) => sessionStorage.clear());
    }, []);

    useEffect(() => {
        destroyNotification();
    }, [location]);

    useEffect(() => {
        if (width && height) {
            if (width < 772) {
                dispatch(commonAction.toggleSidebarMobile(true));
            } else if (width < 1502) {
                dispatch(commonAction.toggleSidebarMobile(false));
                dispatch(commonAction.toggleSidebar(true));
            } else {
                dispatch(commonAction.toggleSidebar(false));
            }
        }
    }, [width]);

    return (
        <main
            className={`main-wrapper auth_page ${
                isShowSidebar ? "mini-sidebar" : ""
            } ${isShowSidebarMobile ? "show-sidebar" : ""}`}
        >
            <div className={`header__bg purple`} />
            <Header />
            <div className="container-wrap">
                <Sidebar />
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <Suspense fallback={""}>
                            <Switch>
                                {ADMIN.map((data, idx) => {
                                    if (data) {
                                        return (
                                            <Route
                                                exact
                                                key={idx}
                                                path={data.path}
                                            >
                                                <Animated
                                                    animationIn="fadeIn"
                                                    animationOut="fadeOut"
                                                    isVisible={true}
                                                >
                                                    <Breadcrumb
                                                        router={ADMIN}
                                                        isAdmin={true}
                                                        title={data.label}
                                                    />

                                                    <data.component />
                                                </Animated>
                                            </Route>
                                        );
                                    }
                                })}
                            </Switch>
                        </Suspense>
                    </div>
                    <footer class="footer text-center text-muted">
                        <span className="pr-1">Copyright © 2022</span>
                        <a class="text-bold-800 grey darken-2" target="_blank">
                            G Shoes{" "}
                        </a>
                    </footer>
                </div>
            </div>
        </main>
    );
};

export default AdminPage;
