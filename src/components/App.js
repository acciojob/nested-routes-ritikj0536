import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/women">Women</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/women" component={Women} />
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
