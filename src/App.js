import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Privacy from "./Privacy";
import Terms from "./Terms";
import ForgetPassword from "./ForgotPassword";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home count={count} setCount={setCount} />
        </Route>
        <Route path="/sign-in">
          <SignIn count={count} setCount={setCount} />
        </Route>
        <Route path="/sign-up">
          <SignUp count={count} setCount={setCount} />
        </Route>
        <Route path="/privacy">
          <Privacy count={count} setCount={setCount} />
        </Route>
        <Route path="/terms">
          <Terms count={count} setCount={setCount} />
        </Route>
        <Route path="/forgot-password">
          <ForgetPassword count={count} setCount={setCount} />
        </Route>
      </Switch>
    </Router>
  );
}