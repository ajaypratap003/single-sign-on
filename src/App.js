import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import TopNav from "./components/TopNav";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "threeScale/routes";
import { Sidebar } from './components/Sidebar';
import { Page } from '@patternfly/react-core';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <Page header={<TopNav />} sidebar={<Sidebar />} isManagedSidebar>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </React.Suspense>
    </Page>
  </HashRouter>
);

export default App;
