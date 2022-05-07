import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from '../store';
import { getPathList , MAIN} from '../routes';
// import MainLogin from './MainLogin';
import MainPage from "./MainPage";
// import MainAdmin from "./MainAdmin";
import { PAGES_URL } from 'contant';
import { TOKEN, TOKENADMIN } from '../functions/Utils';

// const PrivateLoginRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         <MainLogin />
//     )} />
// )
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <MainPage />
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
                        <Route render={props => <PrivateRoute {...props} />} />
                    </Route>
                    {/* <Route exact path={getPathList(ADMIN)} >
                        <Route render={props => <PrivateAdminRoute {...props} />} />
                    </Route> */}
                    <Route render={props => <PrivateRoute {...props} />} />
                </Switch>
            </Router>
        </Provider>
    );
}


export default App;
