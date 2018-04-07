import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom';
import Login from './container/login/login'
import userInfo from './container/userInfo/userInfo'
import Register from './container/register/register'
import Dashboard from './container/dashboard/dashboard'
import Authroute from './component/authroute/authroute'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './reducer'
import './config'
import './rem'
//组件放在Component
//页面放在Container
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
function test() {
    return <h2> 404</h2>
}
ReactDOM.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                <Authroute></Authroute>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/info" component={userInfo}></Route>
                        <Route path="/" component={Dashboard}></Route>
                        <Route component={test}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    ), document.getElementById('root')
)
