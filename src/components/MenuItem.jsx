import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ svg, title, navLinkRoute }) => {
  return (
    <li className="mr-2">
      <NavLink activeClassName="active" to={navLinkRoute} exact>
        {svg}
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
