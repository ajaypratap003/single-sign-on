import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "threeScale/routes";

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route
            key={path}
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </React.Suspense>
  </HashRouter>
);

export default App;
