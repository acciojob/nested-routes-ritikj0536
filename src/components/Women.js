import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const Women = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Women Category</h2>

      <nav>
        <Link to={`${url}/grooming`}>Grooming</Link> |{" "}
        <Link to={`${url}/shirt`}>Shirt</Link>|{" "}
        <Link to={`${url}/trouser`}>Trouser</Link>|{" "}
        <Link to={`${url}/jewellery`}>Jewellery</Link>
      </nav>

      <Switch>
        <Route exact path={path}>
          <p>Please select a category</p>
        </Route>

        <Route path={`${path}/grooming`} component={Grooming} />
        <Route path={`${path}/shirt`} component={Shirt} />
        <Route path={`${path}/trouser`} component={Trouser} />
        <Route path={`${path}/jewellery`} component={Jewellery} />
      </Switch>
    </div>
  );
};

export default Women;
