import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './store';
import { getPathList , MAIN, PERSONAL} from './routes';
// import MainLogin from './MainLogin';
// import MainAdmin from "./MainAdmin";
import { PAGES_URL } from 'contant';
import { TOKEN, TOKENADMIN } from './functions/Utils';
import MainPage from 'redirect/MainPage';
import PersonalPage from 'redirect/PersonalPage';
import ErrorMain from 'templates/Main/ErrorMain/ErrorMain';

const MainRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <MainPage />
    )} />
)

const PersonalRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <PersonalPage />
    )} />
)

// const PrivateAdminRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         //check nếu chưa login thì ko được vào mainPage
//         TOKENADMIN
//             ? <MainAdmin />
//             : <Redirect to={PAGES_URL.login.url} />
//     )} />
// )

const App = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router>
                <Switch >
                    {/* <Route exact path={getPathList(LOGINS)} >
                        <Route render={props => <PrivateLoginRoute {...props} />} />
                    </Route> */}
                    <Route exact path={getPathList(MAIN)} >
                        <Route render={props => <MainRoute {...props} />} />
                    </Route>
                    <Route exact path={getPathList(PERSONAL)} >
                        <Route render={props => <PersonalRoute {...props} />} />
                    </Route>
                    {/* <Route exact path={getPathList(ADMIN)} >
                        <Route render={props => <PrivateAdminRoute {...props} />} />
                    </Route> */}
                    {/* <Route render={props => <PrivateRoute {...props} />} /> */}
                    <Route component={ErrorMain} />
                </Switch>
            </Router>
        </Provider>
    );
}


export default App;
