import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/women" component={Women} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
