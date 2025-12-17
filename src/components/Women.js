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

      <div>
        <Link to={`${url}/Grooming`}>Grooming</Link>
      </div>
      <div>
        <Link to={`${url}/Shirt`}>Shirt</Link>
      </div>
      <div>
        <Link to={`${url}/Trouser`}>Trouser</Link>
      </div>
      <div>
        <Link to={`${url}/Jewellery`}>Jewellery</Link>
      </div>

      <Switch>
        <Route exact path={path}>
          <p>Please select a category</p>
        </Route>

        <Route path={`${path}/Grooming`} component={Grooming} />
        <Route path={`${path}/Shirt`} component={Shirt} />
        <Route path={`${path}/Trouser`} component={Trouser} />
        <Route path={`${path}/Jewellery`} component={Jewellery} />
      </Switch>
    </div>
  );
};

export default Women;
