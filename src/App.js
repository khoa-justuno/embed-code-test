import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from './SignUp'
import SignIn from './SignIn'
import Privacy from './Privacy'
import Terms from './Terms'
import ForgetPassword from './ForgotPassword'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/forgot-password">
            <ForgetPassword />
          </Route>
          
        </Switch>
      </Router>
    );
  }
}

export default App;
