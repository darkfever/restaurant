import './App.css';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Signup from './containers/signUp';
import Signin from './containers/signIn';
import Main from './containers/main';
import 'antd/dist/antd.css';
import setAuthToken from './utils/setAuthToken'
import * as types from './actions/types'
import jwt_decode from 'jwt-decode'
import Dashboard from './containers/dashboard'
import PrivateRoute from './components/private-route';

const store = configureStore()

if(localStorage.token){
    setAuthToken(localStorage.token)
    const decoded = jwt_decode(localStorage.token)
    store.dispatch({type: types.SET_CURRENT_USER, payload: decoded})
    const currentTime = Date.now() / 1000
    if(decoded.exp < currentTime){
        localStorage.removeItem(`token`)
        setAuthToken(false)
        store.dispatch({ type: types.SET_CURRENT_USER, payload: {} })
        window.location.href = `/`
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/signup" component={Signup} />
                    <PrivateRoute path={`/dashboard`} component={Dashboard} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
