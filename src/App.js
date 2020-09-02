import { HashRouter, Route, Switch } from "react-router-dom";

import React from "react";
import routes from "navigation/routes";
import Page from 'navigation/Page';

const App = () => (
  <HashRouter>
    <Page>
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
    </Page>
  </HashRouter>
);

export default App;
