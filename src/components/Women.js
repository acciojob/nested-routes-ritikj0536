import React, { useState } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Shirt from "./Shirt";
import Grooming from "./Grooming";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";

const Women = () => {
  const { path, url } = useRouteMatch();
  const [history, setHistory] = useState([]);

  const addHistory = (item) => {
    setHistory([...history, item]);
  };

  return (
    <div>
      <h2>Women Category</h2>

      <ul>
        <li>
          <Link to={`${url}/Shirt`} onClick={() => addHistory("Shirt")}>
            Shirt
          </Link>
        </li>
        <li>
          <Link to={`${url}/Grooming`} onClick={() => addHistory("Grooming")}>
            Grooming
          </Link>
        </li>
        <li>
          <Link to={`${url}/Trouser`} onClick={() => addHistory("Trouser")}>
            Trouser
          </Link>
        </li>
        <li>
          <Link to={`${url}/Jewellery`} onClick={() => addHistory("Jewellery")}>
            Jewellery
          </Link>
        </li>
      </ul>

      {/* HISTORY LIST (VERY IMPORTANT FOR CYPRESS) */}
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/Shirt`} component={Shirt} />
        <Route path={`${path}/Grooming`} component={Grooming} />
        <Route path={`${path}/Trouser`} component={Trouser} />
        <Route path={`${path}/Jewellery`} component={Jewellery} />
      </Switch>
    </div>
  );
};

export default Women;
