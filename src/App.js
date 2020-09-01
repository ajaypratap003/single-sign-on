import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import React from "react";
import localRoutes from "./routes";
import remoteRoutes from "threeScale/routes";
import { Sidebar } from './components/Sidebar';
import { Page, PageSection } from '@patternfly/react-core';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => (
  <HashRouter>
    <Page sidebar={<Sidebar routes={routes} />} isManagedSidebar>
      <React.Suspense fallback={<PageSection>Loading...</PageSection>}>
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
      </Page>
  </HashRouter>
);

export default App;
