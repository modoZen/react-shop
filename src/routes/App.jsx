import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/recoveryPassword";
import '../styles/global.css'

const App = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                   <Route exact path="/" component={Home}></Route>
                   <Route exact path="/login" component={Login}></Route>
                   <Route exact path="/recovery-password" component={RecoveryPassword}></Route>
                   <Route component={NotFound}></Route>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;