import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage"));

const routes = [
  {
    path: "/",
    text: "Red Hat Single Sign On",
    component: HomePage,
    exact: true,
  }
];

export default routes;
