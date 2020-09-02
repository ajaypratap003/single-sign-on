import { HashRouter, Route, Switch } from "react-router-dom";

import "@patternfly/react-core/dist/styles/base.css";
import React from "react";
import remoteRoutes from "threeScale/routes";
import PageHeader from "threeScale/PageHeader";
import Sidebar from "threeScale/Sidebar";
import { Page, PageSection } from '@patternfly/react-core';

const routes = remoteRoutes;

const App = () => (
  <HashRouter>
    <Page sidebar={<Sidebar routes={routes} />} header={<PageHeader />} isManagedSidebar>
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
