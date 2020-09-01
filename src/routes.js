import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Page1 = React.lazy(() => import("./pages/Page1"));

const routes = [
  {
    path: "/",
    text: "Home",
    component: HomePage,
    exact: true,
  },
  {
    path: "/page1",
    text: "Page 1",
    component: Page1,
    exact: true,
  },
];

export default routes;
