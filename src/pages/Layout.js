import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ url }) => {
  return (
      <nav>
        <ul>
          <li><Link to={`${url}/Grooming`}>Grooming</Link></li>
          <li><Link to={`${url}/Shirt`}>Shirt</Link></li>
          <li><Link to={`${url}/Trouser`}>Trouser</Link></li>
          <li><Link to={`${url}/Jewellery`}>Jewellery</Link></li>
        </ul>
      </nav>
  );
};

export default Layout;