import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/women">Women</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/women" component={Women} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
