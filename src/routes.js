import React from "react";

const SSO = React.lazy(() => import("./pages/SSO"));
const Page1 = React.lazy(() => import("./pages/Page1"));
const Integration = React.lazy(() => import("./pages/Integration"));

const routes = [
  {
    path: "/",
    text: "Single sign on",
    component: SSO,
    exact: true,
  },
  {
    path: "/page1",
    text: "API manager",
    component: Page1,
    exact: true,
  },
  {
    path: "/page2",
    text: "Integration",
    component: Integration,
    exact: true,
  },
];

export default routes;
