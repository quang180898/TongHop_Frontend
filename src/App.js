import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import { ADMIN, getPathList, LOGINS, MAIN, PERSONAL } from "./routes";
import { PAGES_URL } from "contant";
import { TOKEN, TOKENADMIN } from "./functions/Utils";
import MainPage from "redirect/MainPage";
import PersonalPage from "redirect/PersonalPage";
import ErrorMain from "templates/Main/ErrorMain/ErrorMain";
import AdminPage from "redirect/AdminPage";
import LoginPage from "redirect/LoginPage";

const MainRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <MainPage />} />
);

const PersonalRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => <PersonalPage />} />
);

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest} render={(props) =>
            TOKENADMIN === null ? (
                <LoginPage />
            ) : (
                <Redirect to={PAGES_URL.admin.url} />
            )
        }
    />
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        TOKENADMIN
            ? <AdminPage />
            : <Redirect to={PAGES_URL.adminLogin.url} />
    )} />
)

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path={getPathList(MAIN)}>
                        <Route render={(props) => <MainRoute {...props} />} />
                    </Route>
                    <Route exact path={getPathList(PERSONAL)}>
                        <Route render={(props) => <PersonalRoute {...props} />}/>
                    </Route>
                    <Route exact path={getPathList(LOGINS)}>
                        <Route render={(props) => <PublicRoute {...props} />} />
                    </Route>
                    <Route exact path={getPathList(ADMIN)}>
                        <Route render={(props) => <PrivateRoute {...props} />} />
                    </Route>
                    <Route component={ErrorMain} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
