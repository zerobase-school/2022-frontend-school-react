import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function TechPage() {
  return (
    <>
      <div>
        <h1>TechPage</h1>
        <Link to="/tech/react">React</Link> |{" "}
        <Link to="/tech/javascript">Javascript</Link>
      </div>
      <Outlet />
    </>
  );
}
