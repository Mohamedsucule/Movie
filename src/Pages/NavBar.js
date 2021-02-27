import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/" exact>
        {" "}
        Home{" "}
      </NavLink>

      <NavLink activeStyle={{ fontWeight: "bold" }} to="/About">
        {" "}
        About{" "}
      </NavLink>
      <NavLink activeStyle={{ fontWeight: "bold" }} to="/Discover">
        {" "}
        Discover{" "}
      </NavLink>
    </div>
  );
}
